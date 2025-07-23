import React, { useState } from "react";
import './assets/global.css';
import ProfileCards from "./components/ProfileCards/ProfileCards";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import NewPost from "./pages/NewPost";
import Postdetail from "./pages/Postdetail";
import {initialPosts} from "./postdata";

function App() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <>
    <nav>
      <Link to={"/"}>Home</Link>  
      <Link to={"/post"}>Posts</Link>  
      <Link to={"/new"}>New Post</Link>  
    </nav>
    <Routes>
      <Route path="/" element={<Home posts={posts}/>} />
      <Route path="/post" element={<Post posts={posts}/>} />
      <Route path="/new" element={<NewPost setPosts={setPosts}/>} />
      {/* <Route path="/post/:id" element={<Postdetail posts={posts}/>} /> */}
      <Route path="/post/:slug" element={<Postdetail posts={posts}/>} />
    </Routes>
    {/* <ProfileCards/> */}
    </>
  )
}

export default App
