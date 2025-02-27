"use client";
import React, {useEffect, useState, use } from 'react';
import {blogData} from '@/data/data';
import Image from 'next/image';

const BlogDetail = ({params}) => {

    const { id } = use(params);

    const [getBlogData, setBlogData] = useState(null);

    const fetchData= () => {
        console.log("Blog data fetched");
        for(let i=0; i < blogData.length; i++ ){
            if(Number(id) === blogData[i].id){
                setBlogData(blogData[i])
                console.log(blogData[i]);
                break;

            }
            
        }
    }

    useEffect(()=>{
        
        fetchData()
    },[])

    if (!getBlogData) {
        return <p>Loading...</p>;
      }

  return (
    <div>
      Blog detail {id}<br/>
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium _me-2 px-2.5 py-0.5 mb-4 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{getBlogData.category}</span>
      <h2>{getBlogData.title}</h2>
      <p>{getBlogData.description}</p>
      <Image src={getBlogData.image} width={200} height={100} alt="" />
    </div>
  )
}

export default BlogDetail
