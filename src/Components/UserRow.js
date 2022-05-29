import axios from 'axios';
import React from 'react';

const UserRow = ({ user }) => {
    const { name, email, admin, _id } = user;

    const makeAdmin = id => {
        axios.put(`http://localhost:5555/useradmin/${id}`)
        window.location.reload();

    }
    return (
        <tr>
            <th>{name}</th>
            <td>{email}</td>
            <td>
                <div className="flex flex-col justify-center items-center">
                    {admin ? <div>Admin</div> : <div>User</div>}
                    {!admin && <button className="block" onClick={() => makeAdmin(_id)}>
                        <span className="badge badge-primary">Make Admin</span></button>}
                </div>


            </td>
        </tr >);
};

export default UserRow;