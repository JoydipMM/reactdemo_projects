import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <>
      <nav>
        <Link to="dashboard">Dashboard</Link>
        <Link to="setting">Setting</Link>
      </nav>
    </>
  )
}

export default AdminHeader
