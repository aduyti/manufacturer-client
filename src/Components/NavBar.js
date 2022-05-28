import React from 'react';
import { ToastContainer } from 'react-toastify';
import NavLinks from './NavLinks';

const NavBar = ({ children }) => {
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="px-4 md:px-14 navbar fixed top-0 z-50 bg-base-100">
                    <div class="flex-1 px-2 mx-2 text-2xl font-semibold">The Bolts</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div class="mt-28">
                    {children}
                </div>
                <ToastContainer autoClose={1500} />
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-52 bg-base-100">
                    <NavLinks />
                </ul>
            </div>
        </div>
    );
};

export default NavBar;