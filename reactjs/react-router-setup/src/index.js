import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import User from "./pages/User/User";
import Contact from "./pages/Contact/Contact";
import MainLayout from './Layout/MainLayout';
import Loader, {loaderData} from './pages/Loader/Loader';
import Product from './pages/Product/Product';


// Type 1 - for create router start ----------------------------
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<MainLayout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/user",
//         element:<User/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       },
//       {
//         loader: loaderData,
//         path:"/loader",
//         element:<Loader/>,
//       },
//     ]
//   }
// ])
// Type 1 - for create router ended ----------------------------


// Type 2 - for create router start ----------------------------
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="user" element={<User/>} />
      <Route path="product/:productId" element={<Product/>} />
      <Route loader={loaderData} path="loader" element={<Loader/>} />
    </Route>
  )
)
// Type 2 - for create router ended ----------------------------


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
