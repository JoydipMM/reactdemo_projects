import React, { useContext } from 'react';
import "./Cart.css";
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems, food_list, addToCart, removeFormCart, totalCartAmount, totalCartItem, deleteFormCart} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div>
      <h3>Cart Items</h3>
      {food_list.map((item)=>{ if(cartItems[item._id]===0){ return(<>fgfdgdfgdfgdf</>) } })}
      <table>
        <thead>
        <tr>
          <th>Item</th>
          <th>Title</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {food_list.map((item)=>{
          if(cartItems[item._id]>0){
            return(
              <tr key={item._id}>
                <td><img src={item.image} /></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={()=>removeFormCart(item._id)}>-</button>
                  {cartItems[item._id]}
                  <button onClick={()=>addToCart(item._id)}>+</button>
                </td>
                <td>{item.price*cartItems[item._id]}</td>
                <td><button onClick={()=>deleteFormCart(item._id)}>Remove</button></td>
              </tr>
            )
          }
        })}
        </tbody>
      </table>

        <p><b>Total QTY: </b> {totalCartItem()}</p>
        <p><b>Sub Total: </b> ${totalCartAmount()}</p>
        <p><b>Charges</b> $20</p>
        <p><b>Total: </b> ${totalCartAmount()+20}</p>
        <button onClick={()=>navigate('/placeorder')}>Checkout</button>

    </div>
  )
}

export default Cart
