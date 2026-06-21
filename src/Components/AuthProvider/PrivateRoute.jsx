import { useAuth } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { authenticated, initialized} = useAuth();
    const location = useLocation();


    if (!initialized) return null; // or loading spinner

    if (!authenticated) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }

    return children;
};

export default PrivateRoute;