import React from 'react';
import ProfileCard from "../ProfileCard/ProfileCard";



const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Passionate about React and UI/UX.",
  },
  {
    name: "Bob Smith",
    role: "Backend Engineer",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    bio: "Loves APIs and databases.",
  },
  {
    name: "Sophie Lee",
    role: "Product Designer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Crafts beautiful user experiences.",
  },
];

const ProfileCards = () => {
  return (
    <>
      {teamMembers.map((member, index)=>(
        <ProfileCard key={index} {...member} />
        ))}
    </>
  )
}

export default ProfileCards
