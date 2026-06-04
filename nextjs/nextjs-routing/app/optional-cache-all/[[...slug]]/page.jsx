import React from 'react'

const page = async({ params }) => {
    const { slug } = await params;
  return (
    <div>
      Optional cache-all route page
      <br/>
      {slug?.join('/') || ''}
      <br/>
      {slug?.length > 0 && slug.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

export default page
