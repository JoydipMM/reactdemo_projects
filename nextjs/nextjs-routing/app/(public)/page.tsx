"use client";
import Image from "next/image";
import React, { useState } from "react";
import ConatctFormMain from "@/components/ConatctFormMain";
import ContactList from "@/components/ContactList";

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
    <div>
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
      </ul>
      <br/>
      <br/>
      <h4>Cookies</h4>
      <p>cookies are small pieces of data that server sent to the client's web browser.</p>
      <p>The browser can store the cookies and send them back to the same server with the future requests.</p>
      <h4>cookies serve main three purposes:</h4>
      <ol>
        <li>managing session (like user's login and shopping carts)</li>
        <li>handling personalization (such as user's preferance and theme)</li>
        <li>Tracking (like recordings and analyzing user behavior)</li>
      </ol>
      <p>when a client makes a request to the server, the server can send back a cookie to the client. After that server not going to remember the request and response cycle. So they are stateless. So sending a new request we again need to build a new connection for send request. It also known as "Three way Hand Shake". So in that case I wanted to server to keep remember me. For that server send a small information that is known as "cookie". Then we store that inside the client's web browser. So every time when client make a new request to the server, the server can identify the client by the cookie.</p>
      <p>*** The TCP <b>Three-Way Handshake</b> is the process used to establish a reliable connection between a client and a server before data is transmitted.</p>
      <br/>
      <h3>Approach - 1 (while returning the response set-cookie header)</h3>
      <p></p>
      <br/>
      <br/><br/>
      <br/><br/>
      <ConatctFormMain/>
      <ContactList/>
      
      
      
      
      
      <br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/>
    </div>
  );
}
