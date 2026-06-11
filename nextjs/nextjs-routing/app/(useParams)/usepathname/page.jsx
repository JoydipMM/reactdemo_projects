"use client";
import React from 'react'
import { usePathname } from 'next/navigation'

const page = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <div>
        <h2>UsePathname Hook Page</h2>
        <p>UsePathname give us the current url path name</p>
        <p>Example: app\usepathname\page.jsx</p>
        <p>URL: http://localhost:3000/usepathname</p>
        <p>Result: /usepathname</p>
        page {JSON.stringify(pathname)}
        <br/>
        <br/>
        <p>Eaxmple: app\usepathname\usepath-01\page.jsx</p>
        <p>URL: http://localhost:3000/usepathname/usepath-01</p>
        <p>Result: /usepathname/usepath-01</p>
        <br/>
        <br/>
        <p>Eaxmple: app\usepathname\usepath-01\usepath-01-inner\page.jsx</p>
        <p>URL: http://localhost:3000/usepathname/usepath-01/usepath-01-inner</p>
        <p>Result: /usepathname/usepath-01/usepath-01-inner</p>

        
        </div>
  )
}

export default page