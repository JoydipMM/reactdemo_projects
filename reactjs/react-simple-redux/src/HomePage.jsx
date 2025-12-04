import React from 'react'
import CartItem from "./CartItem";

const HomePage = () => {
  return (
    <div>
        <CartItem item={"Momo"} />
        <CartItem item={"Pizza"} />
        <CartItem item={"Burger"} />
        <CartItem item={"Biryani"} />
        Home Page
    </div>
  )
}

export default HomePage
