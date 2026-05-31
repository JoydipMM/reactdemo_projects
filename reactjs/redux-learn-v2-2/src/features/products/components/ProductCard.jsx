import React from 'react'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{border:"1px solid gray", padding:"10px"}}>
      {product.thumbnail && <img width={100} height={100} src={product.thumbnail} alt={product.title} /> }
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={()=>onAddToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard;
