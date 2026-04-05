import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const params = useParams();

  const mutation = useMutation({
    mutationFn: async (newproduct) => {
      return axios.put(`https://dummyjson.com/products/${params.productid}`, newproduct)
    }
  })

  const fetchSingleProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/${params.productid}`);
    const data = await response.json();
    return data;
  }

  const { isLoading, error, data: product } = useQuery({
    queryKey: ["product-details", params.productid],
    queryFn: fetchSingleProduct
  })

  if(isLoading){
      return <h3 className='w-screen h-screen fixed top-0 left-0 bg-amber-100 z-99 text-3xl font-bold flex justify-center items-center'>Loading...</h3>
  }
  if(error){
      return <h3 className='w-screen h-screen fixed top-0 left-0 bg-amber-100 z-99 text-3xl font-bold flex justify-center items-center'>{error.message}</h3>
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Product Detail : {product.title}</h1>


      <div>
      {mutation.isPending ? (
        'Updating product...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>product updated!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ title: 'updated Product title' })
            }}
          >
            Update product
          </button>
        </>
      )}
    </div>
    </>
  )
}

export default ProductDetail
