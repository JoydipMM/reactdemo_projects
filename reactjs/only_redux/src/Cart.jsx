import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from './store/actions/movieList'

const Cart = () => {
    const [cart, setCart] = useState([])
    const cartItems = useSelector((state)=> state.cart)
    const dispatch = useDispatch();
    console.log("cartlist ", cartItems)
    //console.log(Object.keys(cartItems));


    /*
    Note:
    cartItems is an object, not an array. Array methods like map, reduce, filter do not work on objects directly. 
    Object.values(cartItems) ===> This converts the object into an array of its values.
    */
    const totalAmount = Object.values(cartItems).reduce((total, item) => {
      console.log("rd ",item.count * item.payload.price)
      return total + item.count * item.payload.price;
    }, 0)

    function removeItemEvent(id) {
      console.log("remove cart item ID: ", id)
        dispatch(removeFromCart(id))
    }
    
  return (
    <div>
      {Object.keys(cartItems).map((item) => {
        const product = cartItems[item];
        const { id, title, year, director, genre, rating } = product.payload
        return(
            <div key={id} className='cartbox'>
            <h4>{title}</h4>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <div style={{display: "flex", alignItems: "center"}}>
                {product.count > 0 && <p>Quantity: {product.count} &nbsp;</p>} x {product.payload.price}
              </div>
              <div style={{display: "flex", alignItems: "center"}}>
                {product.count * product.payload.price}
              </div>
              <button onClick={() => removeItemEvent(id)}>Delete</button>
              
            </div>
            {/* <p>{year}</p>
            <p>{director}</p>
            <p>{genre}</p>
            <p>{rating}</p> */}
            </div>
        )
      })}

      {totalAmount > 0 && <h3>Total: {totalAmount}</h3> }
    </div>
  )
}

export default Cart
