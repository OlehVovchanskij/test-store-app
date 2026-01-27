import axios from 'axios';

export const storeApi = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  timeout: 10000,
});
