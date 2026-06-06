import { notFound } from 'next/navigation';
import React from 'react'

const page = async ({ params }) => {
  const { productid } = await params;
  console.log(params.productid);
    if(productid > 10) return (
      notFound()
  )
  return (
    <div>
      Product Details Page
      <br/>
      Product ID: { productid }
    </div>
  )
}

export default page
