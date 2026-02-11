import React, { use, useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(addUser({ uid, email, displayName, photoURL }));
    } else {
      dispatch(removeUser());
    }
  });
  }, [])

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
