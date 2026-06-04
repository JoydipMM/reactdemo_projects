import React from 'react'

const page = async ({ params }) => {
    console.log(params.productid);
    const { productid } = await params;
  return (
    <div>
      Product Details Page
      <br/>
      Product ID: { productid }
    </div>
  )
}

export default page
