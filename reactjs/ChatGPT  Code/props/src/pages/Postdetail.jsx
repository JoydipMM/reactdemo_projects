import React from 'react';
import { useParams, Link } from "react-router-dom";

const Postdetail = ({posts}) => {
  // const { id } = useParams();
  const { slug } = useParams();
  //const post = posts.find((p) => p.id === parseInt(id));
  // const decodedId = atob(id);
  // const post = posts.find((p) => p.id === parseInt(decodedId) );
  const post = posts.find((p) => p.slug === slug );
  return (
    <div>
      <h2>Post Details <small style={{ fontSize: "12px" }}>Slug: {slug}</small></h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  )
}

export default Postdetail
