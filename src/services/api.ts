import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies';
import { signOut } from '../pagesComponents/login/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

let isRefreshing = false;
let failedRequestsQueue = [];

export function setupApiClient(ctx = undefined) {
  let cookies = parseCookies(ctx);
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
    (error: AxiosError) => {
      const { response, config } = error;
      if (response.status === 401) {
        if (response.data?.message === 'Token Expired') {
          cookies = parseCookies(ctx);
          const { 'share.refreshToken': refreshToken } = cookies;
          const originalConfig = config;

          if (!isRefreshing) {
            isRefreshing = true;
            api
              .post('/api/refresh-token', { token: refreshToken })
              .then((res) => {
                setCookie(ctx, 'share.token', res.data.token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                });

                setCookie(ctx, 'share.refreshToken', res.data.refreshToken, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                });
                api.defaults.headers[
                  'Authorization'
                ] = `Bearer ${res.data.token}`;

                failedRequestsQueue.forEach((request) =>
                  request.onSuccess(res.data.token)
                );
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request) =>
                  request.onFailure(err)
                );
                if (process.browser) signOut();
                else Promise.reject(new AuthTokenError());
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
        } else {
          if (process.browser) signOut();
          else Promise.reject(new AuthTokenError());
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
}

const api = setupApiClient();
export default api;
