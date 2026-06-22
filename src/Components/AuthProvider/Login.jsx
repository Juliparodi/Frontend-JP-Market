import { useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Login = () => {
    const { keycloak } = useKeycloak();

    useEffect(() => {
        keycloak.login({
            redirectUri: window.location.origin + '/cart',
        });
    }, [keycloak]);

    return <div>Redirecting...</div>;
};

export default Login;