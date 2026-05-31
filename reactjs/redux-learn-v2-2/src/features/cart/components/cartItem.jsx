import React from 'react'

const cartItem = ({item, onUpdateQuantity, onRemove}) => {
  return (
    <div>
    {thumbnail && <img width={100} height={100} src={thumbnail} alt={title} /> }
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button> 
      {item.quantity} 
      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button> 
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  )
}

export default cartItem;