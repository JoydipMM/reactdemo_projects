import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../shared/ui/Header'

const MainLayout = () => {
  return (
    <>
    <Header/>
    <h1>Main Layout</h1>
    <Outlet/>
    </>
  )
}

export default MainLayout
