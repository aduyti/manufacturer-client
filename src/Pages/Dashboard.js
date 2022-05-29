import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useUser from '../Utilities/Hooks/useUser';

const Dashboard = () => {
    const [user] = useUser();
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">

                    <label htmlFor="cancel-modal" id="cancel" className="btn modal-button hidden">open modal</label>
                    <input type="checkbox" id="cancel-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">You Want to Cancel?</h3>
                            <div className="modal-action">
                                <label htmlFor="cancel-modal" className="btn"
                                    onClick={() => window.location.reload()}>
                                    Yes</label>
                            </div>
                        </div>
                    </div>

                    <Outlet />

                </div>
                <div className="drawer-side top-[-100px]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                        <li><NavLink to="/dashboard/">My Profile</NavLink></li>

                        {!user?.admin &&
                            <>
                                <li><NavLink to="/dashboard/addreview">Add Review</NavLink></li>
                                <li><NavLink to="/dashboard/myorders">My Orders</NavLink></li>

                            </>
                        }
                        {user?.admin &&
                            <>
                                <li><NavLink to="/dashboard/addproduct">Add Product</NavLink></li>
                                <li><NavLink to="/dashboard/manageorders">Manage Orders</NavLink></li>
                                <li><NavLink to="/dashboard/manageproducts">Manage Product</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers">Manage Users</NavLink></li>

                            </>
                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;