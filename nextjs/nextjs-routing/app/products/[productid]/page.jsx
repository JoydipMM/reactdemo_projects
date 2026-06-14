import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({params}){
  const { productid } = await params;
  return {
    title: `Product ID: ${productid}`,
    description: `Product Description of : ${productid}`
  }
}

const page = async ({ params }) => {
  const { productid } = await params;
  console.log(productid);


  //   if(productid > 10) return (
  //     notFound()
  // )
  return (
    <div>
      Product Details Page
      <br/>
      Product ID: { productid }
    </div>
  )
}

export default page
