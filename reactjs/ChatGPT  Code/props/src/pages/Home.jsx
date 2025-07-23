import React from 'react';
import { Link } from "react-router-dom";

const Home = ({posts}) => {
  
  return (
    <div className="home">
      <h1>📚 Blog Posts</h1>
      {posts.map((post) => {
        const encodedId = btoa(post.id.toString());
        return(
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <p>{post.content.slice(0, 80)}...</p>
            {/* <Link to={`/post/${post.id}`}>Read more</Link> */}
            {/* <Link to={`/post/${encodedId}`}>Read more</Link> */}
            <Link to={`/post/${post.slug}`}>Read more</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home
