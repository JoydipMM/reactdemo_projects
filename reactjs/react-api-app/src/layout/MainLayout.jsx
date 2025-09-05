import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
    <Header/>
    <div className='body-section'>
      <div className='container'>
        <Outlet/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default MainLayout
