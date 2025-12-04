import { createBrowserRouter, Outlet } from "react-router-dom"; // we import createBrowserRouter from react-router-dom to create a router for our react app
import { Provider } from "react-redux"; 
import appStore from "./utils/appStore";
// here we import Provider from react-redux to use redux store in our react app, so this Provider is a bridge between react and redux
// Here we use provider as a wrapper for our whole app. This Provider component takes a prop called store which holds the redux store we created in appStore.js file
import Cart from "./Cart";

import { Route, Routes } from 'react-router-dom'
import ViewCartPage from "./ViewCartPage";
import Header from "./Header";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

function App() {

  return (
    <>
    {/* Note : here store={appStore} is a prop passed to Provider */}
    {/* <Provider store={appStore}>
      <Header />
      <Cart />
      <hr/>
      <div>
        <Outlet />
      </div>
    </Provider> */}

      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<CartPage/>} />
        </Route>
        <Route element={<BlankLayout/>}>
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>

    </>
  )
}

export default App;


// we have created routing configauration using createBrowserRouter
export const appRouter = createBrowserRouter([
  { path: "/", 
    element: <App />, 
    // now we set the App component as the root component for this route. Here we add common components like Header and Cart inside App component so that they are visible on all pages.
    children: [ // we use children to define nested routes
      { path: "/", 
        element: <HomePage /> // when the path is "/" we will render HomePage component
      },
      { path: "/cart", 
        element: <ViewCartPage /> // when the path is "/cart" we will render ViewCartPage component
      },
    ],
    errorElement: <ErrorPage /> // added errorElement to handle invalid routes
  },
  
]);
