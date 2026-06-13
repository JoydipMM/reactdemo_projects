"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation'

const page = () => {

    const params = useSearchParams();
    
  return (
    <div>
        <h2>Search Params page</h2>
        User name: {params.get("username")}<br/>
        Email: {params.get("email")}

    </div>
  )
}

export default page