import React from 'react'
import PostCard from '../components/PostCard/PostCard';

const Home = () => {
  return (
    <>
      Home
    <h1 className='text-3xl font-bold text-red-500'>Welcome</h1>
    
      <PostCard active={false}/>
    </>
  )
}

export default Home
