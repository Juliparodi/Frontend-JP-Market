import axios from 'axios';

export const getTokenWithCode = async (code, codeVerifier) => {
    const tokenUrl = import.meta.env.VITE_KEYCLOAK_TOKEN_URL;
    const clientId = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;

    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', clientId);
    params.append('code', code);
    params.append('redirect_uri', redirectUri);
    params.append('code_verifier', codeVerifier);

    try {
        const response = await axios.post(tokenUrl, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return response.data.access_token;
    } catch (error) {
        console.error('Token exchange failed', error);
        throw error;
    }
};