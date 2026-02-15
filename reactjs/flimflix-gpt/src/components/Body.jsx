import Login from '../pages/Login'
import Browse from '../pages/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home';
import DefaultLayout from './layout/DEfaultLayout';
import ErrorPage from '../pages/ErrorPage';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <DefaultLayout />,
          errorElement: <ErrorPage />,
          children: [
            { path: "/", element: <Login /> },
            { path: "browse", element: <Browse /> }
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
