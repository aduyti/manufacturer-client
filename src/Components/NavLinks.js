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
            <li className="pl-1"><NavLink to="/" className="rounded-lg">Home</NavLink></li>
            <li className="pl-1"><NavLink to="/allproducts" className="rounded-lg">All Products</NavLink></li>
            <li className="pl-1"><NavLink to="/blogs" className="rounded-lg">Blogs</NavLink></li>
            <li className="pl-1"><NavLink to="/portfolio" className="rounded-lg">My portfolio</NavLink></li>
            {loading && <li className="pl-1"><Spinner /></li>}
            {
                user ?
                    <>
                        <li className="pl-1"><NavLink to="/dashboard" className="rounded-lg">Dashboard</NavLink></li>
                        <li className="pl-1"><button className="btn btn-outline rounded-lg"
                            onClick={() => signOut(auth)}>Sign Out</button></li>
                    </> :
                    <>
                        <li className="pl-1"><NavLink to="/login" className="rounded-lg">Login</NavLink></li>
                        <li className="pl-1"><NavLink to="/signup" className="rounded-lg">Sign up</NavLink></li>
                    </>
            }
        </>
    );
};

export default NavLinks;