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
      Post Details
      <br/>
      <br/>
      {post.title}
    </div>
  )
}

export default Postdetail
