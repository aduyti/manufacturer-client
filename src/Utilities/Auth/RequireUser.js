import { Navigate } from 'react-router-dom';
import useUser from "../Hooks/useUser";

const RequireUser = ({ acc, children }) => {
    const [user] = useUser();
    if (acc === "user" && user?.admin) {
        return <Navigate to="/dashboard" />;
    }
    if (acc === "admin" && !user?.admin) {
        return <Navigate to="/dashboard" />;
    }
    return children;
};

export default RequireUser;