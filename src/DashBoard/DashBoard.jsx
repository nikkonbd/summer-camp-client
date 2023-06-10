// import React from 'react';

import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center bg-[#f7f7f7]">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn bg-[#59c6bc] drawer-button lg:hidden">Open Dashboard</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[240px] h-full bg-[#59c6bc] text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to={'/dashboard/selectClass'}>My Selected Classes</Link></li>
                        <li><Link to={'/dashboard/enrolledClass'}>My Enrolled Classes</Link></li>
                        <button className="btn btn-primary mt-96"><Link to={'/'}>Go to Homepage</Link></button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;