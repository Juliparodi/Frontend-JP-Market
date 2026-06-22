import { useKeycloak } from '@react-keycloak/web';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { keycloak, initialized } = useKeycloak();
    const location = useLocation();

    // WAIT for Keycloak
    if (!initialized) {
        return null; // or loading spinner
    }

    if (!keycloak.authenticated) {
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