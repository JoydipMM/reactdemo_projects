import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='header-section'>
      <div className='container'>
        <nav className='header-nav'>
          <NavLink to="/" className={({isActive})=>(isActive ? "current" : "")}>Home</NavLink>
          <NavLink to="/course" className={({isActive})=>(isActive ? "current" : "")}>Course</NavLink>
          <NavLink to="/team" className={({isActive})=>(isActive ? "current" : "")}>Team</NavLink>
          <NavLink to="/profile" className={({isActive})=>(isActive ? "current" : "")}>Profile</NavLink>
          {/* <NavLink to="/posts" className={({isActive})=>(isActive ? "current" : "")}>Posts</NavLink> */}
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header
