import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <b>Header</b>
      <nav>
        <ul className='header-nav'>
            <li>
                <NavLink to="/" className={({isActive})=>`link ${isActive? `active` : ``}`} >Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=>`link ${isActive? `active` : ``}`} >About</NavLink>
            </li>
            <li>
                <NavLink to="/user" className={({isActive})=>`link ${isActive? `active` : ``}`} >User</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive})=>`link ${isActive? `active` : ``}`} >Contact</NavLink>
            </li>
            <li>
                <NavLink to="/loader" className={({isActive})=>`link ${isActive? `active` : ``}`} >NavLink Loader</NavLink>
            </li>
            <li>
                <NavLink to="/product/:id" className={({isActive})=>`link ${isActive? `active` : ``}`} >Product</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
