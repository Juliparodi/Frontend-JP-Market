import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const Login = () => {
    const { login } = useAuth();
    const location = useLocation();

    useEffect(() => {
        const from = location.state?.from?.pathname || '/';

        sessionStorage.setItem('redirect_after_login', from);

        login();
    }, []);

    return <div>Redirecting to login...</div>;
};

export default Login;