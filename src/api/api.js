import axios from 'axios';

let BASE_URL;
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3001/api';
} else if (process.env.NODE_ENV === 'production') {
  //TO DO: Production url
  BASE_URL = '';
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('loggedAppUser'));
  const token = user && user.data.accesstoken;
  config.headers.Authorization = `Bearer ${token}`;
  console.log('from intercepter', config.headers.Authorization);
  return config;
});
