import React from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../../assets/assets.js'

const Sidebar = () => {
  return (
    <div>
        <Link to={"/"}><img src={assets.logo} /></Link>
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/list-food"}>Food List</Link>
        <Link to={"/add-food"}>Food Add</Link>
    </div>
  )
}

export default Sidebar
