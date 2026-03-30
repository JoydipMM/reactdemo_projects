import React, { useState } from 'react';

const UserConnectionCard = ({
  user,
  showSend = true,
  showAccept = true,
  showIgnore = true
}) => {
  const [isBlocked, setIsBlocked] = useState(false);

  return (
    <div className={`card ${isBlocked ? 'opacity-50 grayscale' : 'bg-base-200'} shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
      {isBlocked && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
          <span className="badge badge-error gap-2 p-4 text-white font-bold animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
            Blocked
          </span>
        </div>
      )}

      <div className="card-body p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.avatar} alt={user.name} />
              </div>
            </div>
            <div>
              <h2 className="card-title text-lg font-bold">{user.name}</h2>
              <p className="text-sm text-base-content/60 italic">Online</p>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[20] menu p-2 shadow-2xl bg-base-100 rounded-box w-40 border border-base-200">
              <li onClick={() => { setIsBlocked(true); document.activeElement.blur(); }}>
                <a className="text-warning font-medium">Block</a>
              </li>
              <li onClick={() => { setIsBlocked(false); document.activeElement.blur(); }}>
                <a className="text-success font-medium">Unblock</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`card-actions grid ${[showSend, showAccept, showIgnore].filter(Boolean).length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-2 mt-6`}>
          {showSend && (
            <button className="btn btn-primary btn-sm md:btn-md rounded-xl shadow-md hover:shadow-lg transition-all duration-300 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              <span className="hidden sm:inline">Send</span>
            </button>
          )}
          {showAccept && (
            <button className="btn btn-outline btn-success btn-sm md:btn-md rounded-xl hover:bg-success hover:border-success transition-all duration-300 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="hidden sm:inline">Accept</span>
            </button>
          )}
          {showIgnore && (
            <button className="btn btn-outline btn-error btn-sm md:btn-md rounded-xl hover:bg-error hover:border-error transition-all duration-300 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="hidden sm:inline">Ignore</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserConnectionCard;
