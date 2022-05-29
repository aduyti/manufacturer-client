import { Navigate } from 'react-router-dom';
import useUser from "../Hooks/useUser";

const RequireUser = ({ auth, children }) => {
    const [user] = useUser();
    if (auth === "user" && user?.admin) {
        return <Navigate to="/dashboard" />;
    }
    if (auth === "admin" && !user?.admin) {
        return <Navigate to="/dashboard" />;
    }
    return children;
};

export default RequireUser;