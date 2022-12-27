import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";

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
        }
      ]
    }
  ])