import React, { useState } from 'react'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Posts');

  const user = {
    name: "Joydip",
    handle: "@joydip_dev",
    bio: "Full Stack Developer | UI/UX Enthusiast 🚀 | Building the next generation of social apps.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joy",
    stats: {
      posts: 42,
      followers: "1.2k",
      following: 450
    }
  };

  const tabs = ['Posts', 'About', 'Photos', 'Friends'];

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-in fade-in duration-500">
      {/* Header / Cover Section */}
      <div className="relative">
        <div className="h-48 md:h-64 rounded-3xl bg-gradient-to-r from-primary/80 to-secondary/80 shadow-lg"></div>
        <div className="absolute -bottom-20 left-8 flex items-end gap-6">
          <div className="avatar">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-4 shadow-2xl">
              <img src={user.avatar} alt="Profile" />
            </div>
          </div>
          <div className="mb-4 hidden md:block">
            <h1 className="text-3xl font-bold text-base-content">{user.fullname}</h1>
            <p className="text-base-content/60 font-medium">{user.handle}</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="btn btn-sm btn-circle bg-black/20 border-none backdrop-blur-md hover:bg-black/40 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Profile Info Mobile */}
      <div className="mt-20 px-8 block md:hidden">
        <h1 className="text-2xl font-bold text-base-content">{user.fullname}</h1>
        <p className="text-base-content/60 font-medium">{user.handle}</p>
      </div>

      {/* Stats and Actions */}
      <div className="mt-4 md:mt-24 px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex gap-8 order-2 md:order-1 pt-4 md:pt-0">
          <div className="text-center group cursor-pointer">
            <div className="text-xl font-bold group-hover:text-primary transition-colors">{user.stats.posts}</div>
            <div className="text-xs font-medium text-base-content/60 uppercase tracking-wider">Posts</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-xl font-bold group-hover:text-primary transition-colors">{user.stats.followers}</div>
            <div className="text-xs font-medium text-base-content/60 uppercase tracking-wider">Followers</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-xl font-bold group-hover:text-primary transition-colors">{user.stats.following}</div>
            <div className="text-xs font-medium text-base-content/60 uppercase tracking-wider">Following</div>
          </div>
        </div>

        <div className="flex gap-3 order-1 md:order-2">
          <button className="btn btn-primary rounded-2xl px-6 shadow-lg shadow-primary/20">Edit Profile</button>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost bg-base-200 border-none rounded-2xl px-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 opacity-60">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.127c-.332.183-.582.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.127.332-.184.582-.496.645-.869L9.594 3.94z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[20] menu p-2 shadow-2xl bg-base-100 rounded-box w-52 border border-base-200 mt-2">
              <li><a>Account Privacy</a></li>
              <li><a>Notifications</a></li>
              <li><a>Security</a></li>
              <li className="text-error font-medium"><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mt-8 px-8">
        <p className="text-base text-base-content/80 leading-relaxed max-w-2xl">{user.bio}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-base-content/50">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            San Francisco, CA
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Joined March 2024
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10">
        <div className="tabs tabs-boxed bg-base-200 p-1 rounded-2xl mx-8">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab flex-1 h-10 rounded-xl font-bold transition-all ${activeTab === tab ? 'bg-base-100 text-primary shadow-sm' : 'text-base-content/50 hover:text-base-content/80'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 px-8">
          {activeTab === 'Posts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video bg-base-200 rounded-3xl border-2 border-dashed border-base-300 flex items-center justify-center text-base-content/40 font-medium">
                Your first post will show up here
              </div>
              <div className="aspect-video bg-base-200 rounded-3xl border-2 border-dashed border-base-300 flex items-center justify-center text-base-content/40 font-medium">
                Featured Post Placeholder
              </div>
            </div>
          )}
          {activeTab === 'About' && (
            <div className="bg-base-200 rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'TypeScript'].map(skill => (
                    <span key={skill} className="badge badge-outline p-4 font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Interests</h3>
                <p className="text-base-content/70">Open Source contributing, hiking, and exploring the next frontier of AI-driven development.</p>
              </div>
            </div>
          )}
          {activeTab === 'Friends' && (
            <div className="text-center py-20 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-medium">Growing your network</h3>
              <p className="text-base-content/60">Connect with more people to see them here.</p>
            </div>
          )}
          {activeTab === 'Photos' && (
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-square bg-base-200 rounded-2xl md:rounded-3xl border-2 border-dashed border-base-300"></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
