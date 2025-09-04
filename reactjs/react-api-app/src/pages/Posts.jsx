import React, { useEffect, useState } from "react";
import { getPost } from "../api/post";

const Posts = () => {
  const [postData, setPostData] = useState([]); // initialize as an empty array
  const [visibleCount, setVisibleCount] = useState(10);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10); // increase by 10
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await getPost();
        console.log("Fetched posts:", posts);
        setPostData(posts);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPost();
  }, []); // run once on mount

  return (
    <div>
      <h2>Post List</h2>

      {postData.length > 0 ? (
        postData.slice(0, visibleCount).map((post) => (
          <div key={post.id}>
            <strong>{post.title}</strong>
          </div>
        ))

      ) : (
        <p style={{width:"100%", height:"100%", position:"fixed", top:"0px", left:"0px", zIndex: "991", background:"rgba(0,0,0,0.4)" }} >Loading...</p>
      )}
      <br/>
      <br/>
      <br/>
      {visibleCount < postData.length && postData.length > 10 && (
        <button onClick={handleLoadMore} style={{color:"#fff"}}>Load More</button>
      )}
      <br/>
      <br/>
      {visibleCount} of {postData.length}
    </div>
  );
};

export default Posts;
