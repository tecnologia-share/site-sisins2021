import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${cookies['share.token']}`,
  },
});

export default api;
