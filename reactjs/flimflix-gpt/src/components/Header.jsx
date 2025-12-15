import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </>
  )
}

export default Header
