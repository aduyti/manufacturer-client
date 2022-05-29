import React from 'react';

const ManageUser = () => {

    return (
        <div className="px-8 md:px-20">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Manage Users</h3>

        </div>
    );
};

export default ManageUser;

// const [user] = useUser();
// let location = useLocation();
// const navigate = useNavigate();
// let from = location.state?.from?.pathname || "/";
// if (!user?.admin) {
//     navigate(from, { replace: true });
// }

