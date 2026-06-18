"use client";
import React from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'

async function addPost(data){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
    return res.json();
}

const QueryMutation = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: addPost, // this function will instantly run when mutation is called
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["post_query"] });
            console.log("success");
        },
        onError: (error) => {
            console.log(error);
        },
    })
  return (
    <>
      <button className='px-2 py-1 bg-indigo-500 text-white cursor-pointer' onClick={()=> mutation.mutate({title: "new post title 00002", body: "new post body 00002", userId: 1, id: 101 })}>Query Mutation</button>
    </>
  )
}

export default QueryMutation