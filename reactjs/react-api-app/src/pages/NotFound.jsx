import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
    <h1 className='text-3xl font-bold text-red-500'>Not Found</h1>
    <Link to="/">Back To Home</Link>
      
    </div>
  )
}

export default NotFound
