// import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Classes from "../Pages/Classes/Classes";
import DashBoard from "../DashBoard/DashBoard";
import SelectClass from "../DashBoard/selectClass/SelectClass";
import EnrolledClass from "../DashBoard/enrolledClass/EnrolledClass";
import AllUsers from "../DashBoard/allUsers/AllUsers";
import UserHome from "../DashBoard/userHome/UserHome";
import UserPayment from "../DashBoard/userPayment/UserPayment";
import AddClasses from "../DashBoard/addClasses/AddClasses";
import Adminuser from "../DashBoard/adminUser/Adminuser";
import ManageClass from "../DashBoard/manageClass/ManageClass";
import SeeClass from "../Pages/Instructors/SeeClass";
import PageNotFound from "../Pages/pagenotfound/PageNotFound";
import Payment from "../DashBoard/payment/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'seeClass',
                element: <SeeClass></SeeClass>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'selectClass',
                element: <SelectClass></SelectClass>
            },
            {
                path: 'payments',
                element: <Payment></Payment>
            },
            {
                path: 'enrolledClass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'usersHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'payment',
                element: <UserPayment></UserPayment>
            },
            {
                path: 'addClass',
                element: <AddClasses></AddClasses>
            },
            {
                path: 'adminUser',
                element: <Adminuser></Adminuser>
            },
            {
                path: 'manage',
                element: <ManageClass></ManageClass>
            }
        ]
    }
]);

export default router;