import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies';

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestsQueue = [];

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${cookies['share.token']}`,
  },
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  ({ response, config }: AxiosError) => {
    if (response.status === 401) {
      if (response.data?.message === 'Token Expired') {
        cookies = parseCookies();
        const { 'share.refreshToken': refreshToken } = cookies;
        const originalConfig = config;

        if (!isRefreshing) {
          isRefreshing = true;
          api
            .post('/api/refresh-token', { token: refreshToken })
            .then((res) => {
              setCookie(undefined, 'share.token', res.data.token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
              });

              setCookie(
                undefined,
                'share.refreshToken',
                res.data.refreshToken,
                {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                }
              );
              api.defaults.headers[
                'Authorization'
              ] = `Bearer ${res.data.token}`;

              failedRequestsQueue.forEach((request) =>
                request.onSuccess(res.data.token)
              );
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure(err));
            })
            .finally(() => {
              isRefreshing = false;
              failedRequestsQueue = [];
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers['Authorization'] = `Bearer ${token}`;

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }
    } else {
    }
  }
);

export default api;
