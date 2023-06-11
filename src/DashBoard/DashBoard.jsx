// import React from 'react';

import { FaArchive, FaArtstation, FaBook, FaCalendarCheck, FaHome, FaUserShield, FaWallet } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {

    // const isAdmin = true;

    const [isAdmin] = useAdmin();
    return (
        <div className="max-w-6xl mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center bg-[#f7f7f7]">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn bg-[#59c6bc] drawer-button lg:hidden">Open Dashboard</label>

                </div>
                <div className="drawer-side active-color">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[240px] h-full bg-[#59c6bc] text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <li><NavLink to={'/dashboard/adminUser'}><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/addClass'}><FaBook></FaBook>Add Classes</NavLink></li>
                                <li><NavLink to={'/dashboard/allUsers'}><FaUserShield></FaUserShield>All Users</NavLink></li>
                                <li><NavLink to={'/dashboard/manage'}><FaWallet></FaWallet>Manage Class</NavLink></li>
                            </> : <><li><NavLink to={'/dashboard/usersHome'}><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/selectClass'}><FaCalendarCheck></FaCalendarCheck>My Selected Classes</NavLink></li>
                                <li><NavLink to={'/dashboard/enrolledClass'}><FaArchive></FaArchive>My Enrolled Classes</NavLink></li>
                                <li><NavLink to={'/dashboard/payment'}><FaArtstation></FaArtstation>Payment History</NavLink></li></>
                        }
                        <hr className="my-4" />
                        <li><Link to={'/'}><FaHome></FaHome>Home</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;