"use client";
import React from 'react'
import { usePathname } from 'next/navigation';


const Layout = ({children}) => {
    const pathname = usePathname();
    const menulist = [
        { url: "/usepathname/usepath-01", title: "usepath-01" },
        { url: "/usepathname/usepath-02", title: "usepath-02" },
        { url: "/usepathname/usepath-03", title: "usepath-03" },
    ]
  return (
    <div>
        <h2>usepathname layout</h2>
        <br/>
        <ul>
            {menulist.map((item) => (
                <li key={item.url}>
                    <a 
                    href={item.url}
                    className={`${pathname === item.url ? "text-red-500" : ""}`}
                    >
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
        {children}
        
    </div>
  )
}

export default Layout;