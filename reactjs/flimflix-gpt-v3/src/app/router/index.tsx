import { createBrowserRouter } from "react-router-dom";
import { ROUTE } from "../../shared/constants/routes";
import { MainLayout, AuthLayout } from "../layout";
import { HomePage } from "../../features/home";
import { MoviesPage } from "../../features/movies";
import { DashboardPage } from "../../features/dashboard";


export const router = createBrowserRouter([
    {
        //path:"/",
        path:ROUTE.HOME,
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                //path:"/movies",
                path:ROUTE.MOVIES,
                element:<MoviesPage/>
            },
        ]
    },
    {
        path:ROUTE.DASHBOARD,
        element:<AuthLayout/>,
        children:[
            {
                index:true,
                element:<DashboardPage/>
            }
        ]
    }
]);