"use client";
import React from 'react'
import { useParams } from 'next/navigation'  

const USeParamsHookPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>UseParams Hook Page</h2>
      <p><b>useParams</b> is a client component hook that returns the current route's dynamic params filled in by the <b>current URL</b>.</p>
      <p>example: app\useparams\page.jsx</p>
      <p>Result: {JSON.stringify(params)}</p>
      <br/>
      <p>example: app\useparams\[id]\page.jsx</p>
      <p>url: http://localhost:3000/useparams/1</p>
      <p>Result: "&#123;"id: '6567656756'"&#125;"</p>
      {/* <p>Result: {id: '6567656756'}</p> */}
      <br/>
      <p>example: app\useparams\[...slug]\page.jsx</p>
      <p>url: http://localhost:3000/useparams/computer/ram/ddr4</p>
      <p>Result: &#123;"slug": &#91;"computer", "ram", "ddr4"&#93;&#125;</p>
      {/* <p>slug: (3) ['computer', 'ram', 'ddr4']</p> */}
    </div>
  )
}

export default USeParamsHookPage