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
            element:<PrivateRoute><Instructor></Instructor></PrivateRoute>
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
        }
      ]
    }
    
  ]);