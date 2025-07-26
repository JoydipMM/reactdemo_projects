import React from 'react'

const ProfileCard = ({ name, role, bio, avatar}) => {
  return (
    <div className="card">
      <img src={avatar} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
    </div>
  )
}

export default ProfileCard
