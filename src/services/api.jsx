import axios from 'axios';
import keycloak from '../Configuration/auth/keycloak';


const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_GATEWAY_URL || 'http://localhost:8084',
});

export const authRequest = async (config) => {
    await keycloak.updateToken(30);

    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${keycloak.token}`,
        },
    };
};

export default apiClient;