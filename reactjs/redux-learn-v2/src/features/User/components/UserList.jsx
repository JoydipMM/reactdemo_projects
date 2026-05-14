import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../slices/userSlice'

function UserList() {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state)=>state.users);
    //console.log(users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
  return (
    <div>
      <h4>User List Component</h4>

      {/* we can dispatch the action by using event handler */}
      <button onClick={() => dispatch(fetchUsers())}>Click</button>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {
        users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))
      }
    </div>
  )
}

export default UserList
