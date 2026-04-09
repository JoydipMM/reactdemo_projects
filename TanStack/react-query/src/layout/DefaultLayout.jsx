import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto'>
        <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        {" | "}
        <NavLink to='/products' className={({isActive}) => isActive ?  'active' : ''}>Products</NavLink>
        {" | "}
        <NavLink to='/paralal-query' className={({isActive}) => isActive ?  'active' : ''}>Paralal Query</NavLink>
        <hr/>
        <Outlet/>
    </div>
    </>
  )
}

export default DefaultLayout
