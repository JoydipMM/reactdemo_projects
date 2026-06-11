"use client";
import React from 'react'
import { useParams } from 'next/navigation'
const page = () => {
    const params = useParams();
    console.log(params);
  return (
    <div>page {JSON.stringify(params)}</div>
  )
}

export default page