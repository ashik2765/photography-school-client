import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructor from "../Pages/Instructor/Instructor";
import PrivateRoute from "./PrivateRoute";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import AddAClass from "../Pages/Dashboard/AddAClass";
import Payment from "../Pages/Dashboard/Payment";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'instructor',
            element:<Instructor></Instructor>
        },
        {
            path:'allclasses',
            element:<AllClasses></AllClasses>
        },
        {
            path:"login",
            element:<Login></Login>,
        },
        {
            path:"signup",
            element:<SignUp></SignUp>,
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>
        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'manageclasses',
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path:'addaclass',
          element:<InstructorRoute><AddAClass></AddAClass></InstructorRoute>
        }
       
      ]
    }
    
  ]);