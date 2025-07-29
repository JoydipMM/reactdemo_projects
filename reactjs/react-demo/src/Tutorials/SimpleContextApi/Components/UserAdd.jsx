import React from 'react'
import { UserContext } from '../Context/UserContext'

const UserAdd = () => {
    const {user, setUser} = React.useContext(UserContext)
  return (
    <>
      <h4>Add User</h4>
      <input 
      type='text'
      value={user}
      onChange={(e)=>setUser(e.target.value)}
      />
    </>
  )
}

export default UserAdd
