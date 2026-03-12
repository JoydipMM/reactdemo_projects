import Login from '../pages/Login'
import Browse from '../pages/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home';
import DefaultLayout from './layout/DEfaultLayout';
import ErrorPage from '../pages/ErrorPage';
import Genres from '../pages/Genres';
import Search from '../pages/Search';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <DefaultLayout />,
          errorElement: <ErrorPage />,
          children: [
            // { path: "/", element: <Login /> },
            { path: "/", element: <Home /> },
            { path: "browse", element: <Browse /> },
            { path: "genres", element: <Genres /> },
            { path: "search", element: <Search/> }
          ]
        }
    ]);
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body
