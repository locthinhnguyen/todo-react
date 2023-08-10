import axios from 'axios';

export const API_URL = 'http://localhost:3001';

const authToken = localStorage.getItem('accessToken');

export const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  },
});
