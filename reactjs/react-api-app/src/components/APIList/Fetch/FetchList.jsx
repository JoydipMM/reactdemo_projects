import React, { useState, useEffect } from 'react'
const FetchList = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(false);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            if(!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);




    return (
        <>
        {loading && <div className='text-2xl font-bold fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-blue-950 z-50 text-amber-200'><span class="loader"></span></div>}
        {error && <h1 className='text-2xl font-bold text-orange-800'>Error: {error}</h1>}
        {users.map((user, index)=>{
            return(
                <article className="rounded-[10px] border border-gray-200 bg-white px-4 pt-4 pb-4" key={index}>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        {user.name}
                        </h3>
                    </a>
                    <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600"> {user.email} </span>


                    <div className="flow-root">
                        <dl className="mt-4 divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50">
                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Username</dt>
                                <dd className="text-gray-700 sm:col-span-2">{user.username}</dd>
                            </div>
                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Phone</dt>
                                <dd className="text-gray-700 sm:col-span-2">{user.phone}</dd>
                            </div>
                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Website</dt>
                                <dd className="text-gray-700 sm:col-span-2">{user.website}</dd>
                            </div>
                        </dl>
                    </div>

                    {/* <div className="mt-4 flex flex-wrap gap-1">
                        <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600">
                        Snippet
                        </span>

                        <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600">
                        JavaScript
                        </span>
                    </div> */}
                </article>
            )
        })}
        </>
    )
}

export default FetchList;