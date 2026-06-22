import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from '../../Configuration/auth/keycloak';

export const AuthProvider = ({ children }) => {
    return (
        <ReactKeycloakProvider
            authClient={keycloak}
            initOptions={{
                onLoad: 'check-sso',
                pkceMethod: 'S256',
                checkLoginIframe: false
            }}
        >
            {children}
        </ReactKeycloakProvider>
    );
};