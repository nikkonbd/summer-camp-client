// import React from 'react';

import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    const navItem = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/instructors'}>Instructors</Link></li>
        <li><Link to={'/classes'}>Classes</Link></li>
        <li><Link to={'/dashboard'}>DashBoard</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
    </>
    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="normal-case text-xl font-medium">MUSIC SCHOOL</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-md mr-2 btn-outline">Book Online</button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/team-3-370x370.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;