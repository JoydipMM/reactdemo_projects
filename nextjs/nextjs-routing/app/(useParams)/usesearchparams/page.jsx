"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const page = () => {
    const searchParams = useSearchParams();
    //const tab = "aboutus" // default value for check active tab in static links
    const tab = searchParams.get("tab") || "aboutus"; // get parameter from url, if not found then default value will be aboutus/which item we want to active
    console.log(tab);

  return (
    <div>
      <h2>UseSearchParams Page</h2>
      <p><b>useSearchParams</b> is a client component hook that returns the current url's query strings</p>
      <p>Example: shop/dashboard?product=mouse&tab=sales</p>
    <br/>
    <br/>
    <Link href={`/usesearchparams?tab=aboutus`} className={tab === "aboutus" ? "text-red-500" : ""} >About</Link>
    <Link href={`/usesearchparams?tab=team`} className={tab === "team" ? "text-red-500" : ""} >Team</Link>
    <Link href={`/usesearchparams?tab=work`} className={tab === "work" ? "text-red-500" : ""} >Work</Link>

    { tab === "aboutus" && <p>aboutus content</p>}
    { tab === "team" && <p>team content</p>}
    { tab === "work" && <p>work content</p>}

    </div>
  )
}

export default page