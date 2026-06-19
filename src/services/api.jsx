import axios from 'axios';
import { getAccessToken, clearAccessToken } from './auth';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_GATEWAY_URL || 'http://localhost:8084',
});

// Request interceptor to add the Bearer token
apiClient.interceptors.request.use(
    async (config) => {
        const token = await getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle 401 Unauthorized
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        // If the error is 401 and we haven't retried yet
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            clearAccessToken();
            // This will fetch a new token since we cleared the old one
            try {
                await getAccessToken();
                return apiClient(originalRequest);
            } catch (retryError) {
                return Promise.reject(retryError);
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;
