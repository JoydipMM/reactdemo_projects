import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const {productId} = useParams();
  return (
    <>
      <h2>Product id: {productId?productId:null}</h2>
    </>
  )
}

export default Product
