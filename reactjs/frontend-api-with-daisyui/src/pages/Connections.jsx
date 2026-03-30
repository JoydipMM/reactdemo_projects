import React from 'react'
import UserConnectionCard from '../components/UserConnectionCard'

const Connections = () => {
  const users = [
    { id: 1, name: "Jessica Alba", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica" },
    { id: 2, name: "Chris Evans", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris" },
    { id: 3, name: "Scarlett Johansson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Scarlett" }
  ];

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {users.map(user => (
        <UserConnectionCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Connections
