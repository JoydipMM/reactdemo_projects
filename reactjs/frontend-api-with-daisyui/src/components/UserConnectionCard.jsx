import React from 'react';

const UserConnectionCard = ({ user }) => {
  return (
    <div className="card bg-base-200 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300">
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
            <ul tabIndex={0} className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-40 border border-base-200">
              <li onClick={() => document.activeElement.blur()}><a className="text-warning">Block</a></li>
              <li onClick={() => document.activeElement.blur()}><a className="text-success">Unblock</a></li>
            </ul>
          </div>
        </div>

        <div className="card-actions grid grid-cols-3 gap-2 mt-6">
          <button className="btn btn-primary btn-sm md:btn-md rounded-xl shadow-md hover:shadow-lg transition-all duration-300 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            <span className="hidden sm:inline">Send</span>
          </button>
          <button className="btn btn-outline btn-success btn-sm md:btn-md rounded-xl hover:bg-success hover:border-success transition-all duration-300 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="hidden sm:inline">Accept</span>
          </button>
          <button className="btn btn-outline btn-error btn-sm md:btn-md rounded-xl hover:bg-error hover:border-error transition-all duration-300 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="hidden sm:inline">Ignore</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserConnectionCard;
