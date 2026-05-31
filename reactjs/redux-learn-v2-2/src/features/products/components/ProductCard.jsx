import React from 'react'

const ProductCard = ({ title, description, price, thumbnail, onAddToCart }) => {
  return (
    <div style={{border:"1px solid gray", padding:"10px"}}>
      {thumbnail && <img width={100} height={100} src={thumbnail} alt={title} /> }
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button onAddToCart={onAddToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductCard;
