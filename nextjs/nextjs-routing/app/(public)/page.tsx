"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {

  const [title, setTitle] = React.useState('');
  const [message, setMessage] = React.useState('');
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();

    if(data.success) {
      setTitle('');
      setMessage("Todo added successfully"+ data.todo.title);
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }else{
      setMessage("failed to add todo");
    }

  }
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      Home page<br/>
      {
        message && <p>{message}</p>
      }
      <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="submit" value={"SUBMIT"} />
      </form>
      <br/>
      <p>What is Query parameters</p>
      <p>Query parameters are the key-value pairs in a URL that comes after the question mark (?).</p>
      <p>Example: /products?color=red&size=large</p>



    </div>
  );
}
