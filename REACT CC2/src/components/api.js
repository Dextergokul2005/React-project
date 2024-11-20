import axios from 'axios';

// Base URL for the API
const API = axios.create({
  baseURL: 'https://your-backend-api-url.com/api',
});

// Interceptor to include auth token if needed (optional)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
