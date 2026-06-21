import React, { createContext, useContext, useEffect, useState } from 'react';
import keycloak from '../../Configuration/auth/keycloak';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [initialized, setInitialized] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        keycloak
            .init({
                onLoad: 'login-required',
                pkceMethod: 'S256',
                checkLoginIframe: false,
            })
            .then((auth) => {
                setAuthenticated(auth);
                setInitialized(true);

                const redirect = sessionStorage.getItem('redirect_after_login');

                if (auth && redirect) {
                    sessionStorage.removeItem('redirect_after_login');
                    window.location.replace(redirect);
                }
            })
            .catch(() => {
                setAuthenticated(false);
                setInitialized(true);
            });
    }, []);

    const login = () => keycloak.login();
    const logout = () => keycloak.logout();

    const getToken = () => keycloak.token;

    return (
        <AuthContext.Provider
            value={{
                keycloak,
                initialized,
                authenticated,
                login,
                logout,
                getToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);