import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Common/Footer';
import AdminHeader from '../Components/Common/AdminHeader';

const AdminLayout = () => {
  return (
    <>
    <AdminHeader/>
    <h3>Admin Layout</h3>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminLayout
