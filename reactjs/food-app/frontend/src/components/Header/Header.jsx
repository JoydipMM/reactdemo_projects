import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Header = ({setShowLogin}) => {

  const { totalCartAmount } = useContext(StoreContext)
  return (
    <div>
      <Link to="/"><img src={assets.logo} /></Link>
      <Navbar setShowLogin={setShowLogin}/>

      <Link to="/cart" className="cart-btn">
        <img src={assets.bag_icon} />
        {totalCartAmount()>0?<span className="cart-dot"></span>:''}
        
      </Link>
    </div>
  )
}

export default Header
