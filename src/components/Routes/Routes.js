import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
            
        },
        {
          path: '/addtask',
          element: <AddTask></AddTask>
        },
        {
          path: '/comtask',
          element: <CompletedTask></CompletedTask>
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