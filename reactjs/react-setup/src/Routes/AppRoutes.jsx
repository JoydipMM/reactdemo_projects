import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'

import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home';
import About from '../Pages/About';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>} >
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
