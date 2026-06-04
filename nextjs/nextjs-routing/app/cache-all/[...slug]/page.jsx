import React from 'react'

const page = async ({ params }) => {
    const { slug } = await params;
    console.log(slug);
  return (
    <div>
      cache-all route page
      <br/>
      {slug.join('/') || ''}
      <br/>
      {slug.length > 0 && slug.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

export default page
