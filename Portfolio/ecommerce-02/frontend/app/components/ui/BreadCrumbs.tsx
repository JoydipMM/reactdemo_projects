import React from 'react'
import Link from 'next/link'

interface breadCrumpItem {
    label?: string,
    href?: string,
}

interface BreadCrumbsProps {
    items: breadCrumpItem[]
}

export default function BreadCrumbs({items}: BreadCrumbsProps) {
  return (
    <nav className='flex flex-wrap items-center gap-2 text-sm'>
      {items?.map((item, index) => {
        const isLastItem = index === items.length - 1;
        return(
            <div className="flex items-center gap-2" key={item.label}>
                {item.href && !isLastItem ? (<Link href={item.href} className='text-gray-500 hover:text-gray-600'>{item.label}</Link>) : (<span className={ isLastItem ? "font-medium text-foreground" : "text-muted-foreground hover:text-gray-600" }>{item.label}</span>) }
                {!isLastItem && <span>/</span>}
            </div>
        )
      })}
    </nav>
  )
}
