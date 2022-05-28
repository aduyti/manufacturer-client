import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../Utilities/firebase.init';
import Spinner from './Spinner';

const NavLinks = () => {
    const [user, loading] = useAuthState(auth);

    return (
        <>
            <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
            <li><NavLink to="/allproducts" className="rounded-lg">All Products</NavLink></li>
            <li><NavLink to="/blogs" className="rounded-lg">Blogs</NavLink></li>
            <li><NavLink to="/portfolio" className="rounded-lg">My portfolio</NavLink></li>
            {loading && <li><Spinner /></li>}
            {
                user ?
                    <>
                        <li><NavLink to="/dashboard" className="rounded-lg">Dashboard</NavLink></li>
                        <li><button className="btn btn-outline rounded-lg"
                            onClick={() => signOut(auth)}>Sign Out</button></li>
                    </> :
                    <>
                        <li><NavLink to="/login" className="rounded-lg">Login</NavLink></li>
                        <li><NavLink to="/signup" className="rounded-lg">Sign up</NavLink></li>
                    </>
            }
        </>
    );
};

export default NavLinks;