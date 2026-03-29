import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
    Default Layout<br/>
      <Outlet/>
    </>
  )
}

export default DefaultLayout
