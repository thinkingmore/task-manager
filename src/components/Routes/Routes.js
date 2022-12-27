import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
            path: '/',
            element:<PrivateRoute><Home></Home></PrivateRoute> 
            
        },
        {
          path: '/addtask',
          element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
        },
        {
          path: '/comtask',
          element:<PrivateRoute><CompletedTask></CompletedTask></PrivateRoute> 
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])