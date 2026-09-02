import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
      <h3>Auth Layout</h3>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
