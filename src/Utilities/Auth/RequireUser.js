import React from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import useUser from "../Hooks/useUser";

const RequireUser = ({ acc, children }) => {
    const [user] = useUser();

    if (user?._id) {
        if (acc === "user" && user?.admin) {
            return <Navigate to="/dashboard" />;
        }
        if (acc === "admin" && !user?.admin) {
            return <Navigate to="/dashboard" />;
        }
        return children;
    }
    else {
        <Spinner />
    }
};

export default RequireUser;