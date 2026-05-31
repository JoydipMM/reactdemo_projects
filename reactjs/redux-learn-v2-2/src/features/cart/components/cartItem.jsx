import React from 'react'

const CartItem = ({item, onUpdateQuantity, onRemove}) => {
  return (
    <div>
    {item.thumbnail && <img width={100} height={100} src={item.thumbnail} alt={item.title} /> }
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button> 
      {item.quantity} 
      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button> 
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  )
}

export default CartItem;