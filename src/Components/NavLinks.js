import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
            <li><NavLink to="/products" className="rounded-lg">All Products</NavLink></li>
            <li><NavLink to="/dashboard" className="rounded-lg">Dashboard</NavLink></li>
            <li><NavLink to="/blogs" className="rounded-lg">Blogs</NavLink></li>
            <li><NavLink to="/portfolio" className="rounded-lg">My portfolio</NavLink></li>
            <li><NavLink to="/login" className="rounded-lg">Login</NavLink></li>
            <li><NavLink to="/signup" className="rounded-lg">Sign up</NavLink></li>
        </>
    );
};

export default NavLinks;