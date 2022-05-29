import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content p-4">

                    <label for="cancel-modal" id="cancel" class="btn modal-button hidden">open modal</label>
                    <input type="checkbox" id="cancel-modal" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">You Want to Cancel?</h3>
                            <div class="modal-action">
                                <label for="cancel-modal" class="btn"
                                    onClick={() => window.location.reload()}>
                                    Yes</label>
                            </div>
                        </div>
                    </div>

                    <Outlet />

                </div>
                <div class="drawer-side top-[-100px]">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                        <li><NavLink to="/dashboard/">My Profile</NavLink></li>

                        <li><NavLink to="/dashboard/addreview">Add Review</NavLink></li>
                        <li><NavLink to="/dashboard/myorders">My Orders</NavLink></li>
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;