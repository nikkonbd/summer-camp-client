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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: 'enrolledClass',
                element: <EnrolledClass></EnrolledClass>
            }
        ]
    }
]);

export default router;