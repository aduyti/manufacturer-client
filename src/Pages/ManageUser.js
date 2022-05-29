import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserRow from '../Components/UserRow';

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://mysterious-coast-30403.herokuapp.com/users')
            .then(res => setUsers(res.data))
    }, [])

    return (
        <div className="px-8 md:px-20">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Manage Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => <UserRow key={user._id} user={user} />)
                        }
                    </tbody>
                </table>
            </div>
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

