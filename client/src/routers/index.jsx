import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/details";

export const routers = createBrowserRouter([
    {
        index:true,
        element:<Home/>
    },
    {
      path: '/:country',
      element: <Details/>,
    },
])