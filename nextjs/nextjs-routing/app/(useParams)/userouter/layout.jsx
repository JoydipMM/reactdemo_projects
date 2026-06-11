"use client";
import React from 'react'
import { useRouter, redirect } from 'next/navigation';

const UseRouterLayout = ({children}) => {
    const router = useRouter();
  return (
    <div>
        <h2>useRouter Hook layout</h2>
        <button className='px-2 py-1 bg-indigo-300 cursor-pointer' onClick={() => router.push("/userouter/router-01")} >UseRouter push router-01</button>
        {" "}
        <button className='px-2 py-1 bg-indigo-300 cursor-pointer' onClick={() => router.push("/userouter/router-02")} >useRouter push router-02</button>
        {" "}
        <button className='px-2 py-1 bg-indigo-300 cursor-pointer' onClick={() => router.replace("/userouter/router-03")} >useRouter replace router-03</button>
        {" "}
        <button className='px-2 py-1 bg-indigo-300 cursor-pointer' onClick={() => router.refresh()} >useRouter refresh</button>
        {" "}
        <button className='px-2 py-1 bg-indigo-300 cursor-pointer' onClick={() => router.back()} >Previous route</button>
        {" "}
        <button className='px-2 py-1 bg-indigo-300 cursor-pointer' onClick={() => router.forward()} >Next route</button>
        {" "}
        <button className='px-2 py-1 bg-indigo-300 cursor-pointer' onClick={() => redirect("/userouter")} >Redirect to userouter</button>


        {children}
    </div>
  )
}

export default UseRouterLayout