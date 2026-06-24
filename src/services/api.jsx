import axios from 'axios';
import keycloak from '../Configuration/auth/keycloak';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_GATEWAY_URL,
});

apiClient.interceptors.request.use((config) => {
    if (keycloak.authenticated) {
        config.headers.Authorization = `Bearer ${keycloak.token}`;
    }
    return config;
});

export default apiClient;