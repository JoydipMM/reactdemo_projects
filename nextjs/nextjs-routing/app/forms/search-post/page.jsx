import React from 'react'

const SearchPostPage = async({searchParams}) => {

    const { query } = await searchParams;
    console.log(query);

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query}`);
    const data = await res.json();

  return (
    <div>
        <h2>SearchPostPage Info:</h2>
        {data.title}

    </div>
    
  )
}

export default SearchPostPage