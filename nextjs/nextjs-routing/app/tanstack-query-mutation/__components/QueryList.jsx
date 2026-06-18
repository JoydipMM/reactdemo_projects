"use client";
import React from 'react';
import { useQuery } from "@tanstack/react-query";  

const QueryList = () => {

    const fetchPostsFunction = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data
    }

    const { data:postslist, error, isLoading } = useQuery({
        queryKey: ["post_query"],
        queryFn: () => fetchPostsFunction(),
    })


  return (
    <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {postslist && postslist.map((post) => (<div key={post.id}>{post.title}</div>))}
        
    </div>
  )
}

export default QueryList