import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from '../app/layout'
import { HomePage, AboutPage, LoginPage, RegisterPage } from '../routes'

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                index:true,
                element: <HomePage/>
            },
            {
                path: '/about',
                element: <AboutPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/register',
                element: <RegisterPage/>
            },
        ]
    }
])