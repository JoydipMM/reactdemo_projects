import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      Header<br/>
      <nav>
        <NavLink to="/" className={({isActive})=>(isActive ? "current" : "")}>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </>
  )
}

export default Header
