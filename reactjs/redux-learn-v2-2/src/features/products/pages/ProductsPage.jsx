import React from 'react'
import { useProductsQuery } from '@/features/products';
import { ProductCard } from '@/features/products';
// import { useCart } from '@/features/cart/hooks/useCart';

const ProductsPage = ({addToCart}) => {

  // const {addToCart} = useCart();

    const onAddToCart = (product) => {
        addToCart(product);
    };

    const {
        data: products,
        isLoading,
        isError,
        error
    } = useProductsQuery();
    
  return (
    <div>
      <h2>Products Page</h2>

      {isLoading && <div>Loading...</div>}

      {isError && <div>{error.message}</div>}
      <ul>
        {products?.products?.map((product) => (
            // <li key={product.id}>{product.title}</li>
            <ProductCard product={product} onAddToCart={onAddToCart}  key={product.id}/>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage
