import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content p-4">
                    <Outlet />

                </div>
                <div class="drawer-side top-[-100px]">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        <li><NavLink to="/dashboard/">My Profile</NavLink></li>

                        <li><NavLink to="/dashboard/addreview">Add Review</NavLink></li>
                        <li><NavLink to="/dashboard/myorders">My Orders</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;