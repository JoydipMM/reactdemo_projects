import DefaultLayout from "./layout/DefaultLayout";
import { Homepage, AboutPage } from "../pages";

export const routes = [
    {
        path:'/',
        element: <DefaultLayout/>,
        children:[
            {
                index:true,
                element:<Homepage/>
            },
            {
                path:'/about',
                element:<AboutPage/>
            },
        ]
    },
    
]