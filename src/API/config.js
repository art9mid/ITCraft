import axios from 'axios';

const TELEGRAM_API_USER_BOT_URL = 'https://jsonplaceholder.typicode.com';

export const client = function () {
  const http = axios.create({
    baseURL: TELEGRAM_API_USER_BOT_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    responseType: 'json',
    withCredentials: false,
  });

  http.interceptors.request.use(async (request) => {
    console.log('Starting Request', JSON.stringify(request, null, 2));
    return request;
  });

  return http;
};
