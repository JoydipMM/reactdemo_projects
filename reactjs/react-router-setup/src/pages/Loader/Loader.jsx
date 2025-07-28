import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Loader = () => {
    const data = useLoaderData()
  return (
    <>
      <h2>NavLink Loader Page</h2>
      <h4>Data: {data.id}</h4>
    </>
  )
}

export default Loader

export const loaderData = async () => {
    const response = await fetch("https://api.github.com/users/joydipsarkar");
    return response.json()
}
