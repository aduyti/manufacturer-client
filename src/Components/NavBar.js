import React from 'react';
import { ToastContainer } from 'react-toastify';
import NavLinks from './NavLinks';
import Footer from '../Components/Footer';
import { DotsVerticalIcon } from '@heroicons/react/outline';


const NavBar = ({ children }) => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="px-4 md:px-14 navbar fixed top-0 z-50 bg-base-100">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                            <DotsVerticalIcon className="inline-block w-6 h-6" />
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-2xl font-semibold">The Bolts</div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className="mt-16">
                    {children}
                </div>

                <ToastContainer autoClose={1500} />
                <Footer />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-52 bg-base-100">
                    <NavLinks />
                </ul>
            </div>
        </div>
    );
};

export default NavBar;