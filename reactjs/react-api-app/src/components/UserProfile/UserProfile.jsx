import React from 'react'
import GridRow from '../GridRow/GridRow';
import UserAvater from './UserAvater';


const UserProfile = ({data}) => {

    const {id, name, email, location, avatar, joined, preferences, badges} = data;
  return (
    <>
    {/* gridcol="grid-cols-2" */}
      <GridRow>
        <h4 className='text-xs font-medium text-gray-600 bg-gray-200 mb-2 absolute top-0 right-0 px-5 py-1 rounded-2xl rounded-tl-none rounded-br-none'>ID: {id}</h4>
        <UserAvater avatar={avatar}/>
      </GridRow>
    </>
  )
}

export default UserProfile
