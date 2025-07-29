import React from 'react'
import { UserContext } from '../Context/UserContext'

const UserShow = () => {
    const {user} = React.useContext(UserContext);
  return (
    <>
      <h4>Show User</h4>
      {user}
    </>
  )
}

export default UserShow
