import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home';
import DefaultLayout from '../shared/components/layout/DEfaultLayout';
import ErrorPage from '../pages/ErrorPage';
import Genres from '../pages/Genres';
import Search from '../pages/Search';
import Browse from '../pages/Browse';

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "browse", element: <Browse /> },
            { path: "genres", element: <Genres /> },
            { path: "search", element: <Search/> }
        ]
    }
]);

const AppRoutes = () => {
    return <RouterProvider router={appRouter}/>
}

export default AppRoutes;

