import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import AdminLayout from '../Layout/AdminLayout';

import NotFound from '../Pages/NotFound';
import Home from '../Pages/Front/Home';
import About from '../Pages/Front/About';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import AdminSetting from '../Pages/Admin/AdminSetting';
import AdminLogin from '../Pages/Admin/AdminLogin';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>} >
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Route>
        <Route path="/admin">
          <Route index element={<AdminLogin/>} />
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="dashboard" element={<AdminDashboard/>} />
          <Route path="setting" element={<AdminSetting/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
