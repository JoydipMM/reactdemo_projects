import React, { useState } from 'react';
import './Navbar.css'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

  return (
    <div>
      <ul className="navlist">
        <li onClick={() => setMenu("home") } className={ menu==="home" ? "menuitem active" : "menuitem "  }>Home</li>
        <li onClick={() => setMenu("menu") } className={ menu==="menu" ? "menuitem active" : "menuitem "  }>Menu</li>
        <li onClick={() => setMenu("mobile-app") } className={ menu==="mobile-app" ? "menuitem active" : "menuitem "  }>Mobile App</li>
        <li onClick={() => setMenu("contact-us") } className={ menu==="contact-us" ? "menuitem active" : "menuitem "  }>Contact Us</li>
      </ul>
      <button onClick={() => setShowLogin(true)}>Login</button>
    </div>
  )
}

export default Navbar
