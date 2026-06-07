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

      <br/>
      <br/>
      <br/>
      <h2>headers in route handler</h2>
      <p>HTTP headers represent the metadata associated with an api request and response.</p>
      <h4>1. request headers</h4>
      <p>these are sending by the client, Such as a web browser to the server. They contain essantial information about the request, which help to the server understand the request and process it correctly.</p>
      <ul>
        <li>Authorization (token)</li>
        <li>User-Agent (browser info)</li>
        <li>Accept (what kind of response the client expects)</li>
      </ul>
      <br/>
      <br/>
      <h4>2. response headers</h4>
      <p>These are send back from the server to the client. They provide information about the server and the data being send in the response. </p>
      <ul>
        <li>Content-Type: (JSON, HTML etc)</li>
        <li>Cache-Control</li>
        <li>CORS Headers</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
