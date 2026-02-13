import Login from '../pages/Login'
import Browse from '../pages/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body
