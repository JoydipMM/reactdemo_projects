import React from 'react';
import { userProfile } from "../data/StaticData";
import UserProfile from '../components/UserProfile/UserProfile'

const Profile = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-purple-700 mb-6'>Profile</h1>
      <UserProfile data={userProfile} />
    </>
  )
}

export default Profile
