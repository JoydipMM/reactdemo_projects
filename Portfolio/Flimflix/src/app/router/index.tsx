import { createBrowserRouter } from "react-router-dom";
import { ROUTE } from "../../shared/constants/routes";
import { MainLayout, AuthLayout } from "../layout";
import { HomePage, HomeTemplatePage } from "../../features/home";
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
                path:ROUTE.HOME_TEMPLATE,
                element:<HomeTemplatePage/>
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
