"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogItem = ({ id, title, description, category, image }) => {
  return (
      

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Link href={`blog/${id}`} style={{ position: "relative"}}>
            <Image className="rounded-t-lg" width={600} height={200} src={image} overrideSrc="blog-item-01.jpg" alt="" />
        </Link>
        <div className="p-5">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium _me-2 px-2.5 py-0.5 mb-4 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{category}</span>
            
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href={`blog/${id}`}>{title}</Link></h5>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <Link href={`blog/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </Link>
        </div>
    </div>

  )
}

export default BlogItem
