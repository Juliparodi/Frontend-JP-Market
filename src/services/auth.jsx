import axios from 'axios';

let accessToken = null;

export const getAccessToken = async () => {
    if (accessToken) return accessToken;

    const tokenUrl = import.meta.env.VITE_KEYCLOAK_TOKEN_URL;
    const clientId = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_KEYCLOAK_CLIENT_SECRET;

    // Create Base64 encoded credentials for Basic Auth
    const credentials = btoa(`${clientId}:${clientSecret}`);

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    try {
        const response = await axios.post(tokenUrl, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${credentials}`
            }
        });

        accessToken = response.data.access_token;
        return accessToken;
    } catch (error) {
        console.error("Failed to obtain OAuth 2.0 token", error);
        throw error;
    }
};

export const clearAccessToken = () => {
    accessToken = null;
};
