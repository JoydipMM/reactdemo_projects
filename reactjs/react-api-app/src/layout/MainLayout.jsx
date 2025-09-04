import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
    <Header/>
    Main Layout<br/><br/>
    <Outlet/><br/><br/>
    <Footer/>
    </>
  )
}

export default MainLayout
