import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// Use the environment variable for the API URL
const apiUrl =
  import.meta.env.VITE_API_URL || "/choreo-apis/backend-682464492:8000";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
