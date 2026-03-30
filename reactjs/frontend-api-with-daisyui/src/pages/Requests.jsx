import React from 'react'
import UserConnectionCard from '../components/UserConnectionCard'

const Requests = () => {
  const requests = [
    { id: 101, name: "Gal Gadot", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gal" },
    { id: 102, name: "Henry Cavill", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Henry" },
    { id: 103, name: "Margot Robbie", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Margot" }
  ];

  return (
    <div className="max-w-xl mx-auto pb-10">
      <div className="flex items-center justify-between mb-8 px-2">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Friend Requests
          <div className="badge badge-primary badge-md">{requests.length}</div>
        </h1>
        <button className="btn btn-ghost btn-sm text-primary">View Sent</button>
      </div>

      <div className="space-y-6">
        {requests.length > 0 ? (
          requests.map(user => (
            <UserConnectionCard 
              key={user.id} 
              user={user} 
              showSend={false} 
            />
          ))
        ) : (
          <div className="text-center py-20 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
            <div className="text-5xl mb-4">📬</div>
            <h3 className="text-xl font-medium">No pending requests</h3>
            <p className="text-base-content/60">When someone wants to connect, it'll show up here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Requests
