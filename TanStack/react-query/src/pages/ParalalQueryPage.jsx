import React from 'react'
import { useQueries, useQuery } from '@tanstack/react-query';

const ParalalQueryPage = () => {
    const [userId, setUserId] = React.useState([1,2,3]);

    // multiple query at parallel
    // we want to fetch the data of 1,2 at the same time

    /*
    userId.forEach((id) => {
        const userQuery = useQuery({
            queryKey: ['user', id],
            queryFn: async () => {
                const response = await fetch(`https://dummyjson.com/users/${id}`);
                const data = await response.json();
                return data;
            }
        })
    }) 
    */
    // Uncaught Error: Rendered more hooks than during the previous render.
    // because react hook can not be called inside a callback

    const userQueries = useQueries({
        queries: userId.map((id) => {
            return {
                queryKey: ['user', id],
                queryFn: async () => {
                    const response = await fetch(`https://dummyjson.com/users/${id}`);
                    const data = await response.json();
                    return data;
                }
            }
        })
    })



  return (
    <div>
      <h1 className="text-3xl font-bold">Paralal Query Page</h1>
      {userId.map((id) => (
        <p key={id}>User ID: {id}</p>
      ))}
      <button 
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={() => 
        setUserId((prev) => [...prev, prev.length + 1])
    }>Add User ID</button>
    </div>
  )
}

export default ParalalQueryPage
