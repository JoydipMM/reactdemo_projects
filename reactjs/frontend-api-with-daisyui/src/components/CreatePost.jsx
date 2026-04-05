import React from 'react';

const CreatePost = () => {
  return (
    <div className="card bg-base-100 shadow-md border border-base-200">
      <div className="card-body p-4">
        <div className="flex gap-4">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Me" alt="My avatar" />
            </div>
          </div>
          <textarea
            className="textarea textarea-bordered w-full resize-none mt-1"
            placeholder="What's on your mind?"
            rows="2"
          ></textarea>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-2 text-base-content/60">
            <button className="btn btn-ghost btn-sm btn-circle" aria-label="Add image">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </button>
            <button className="btn btn-ghost btn-sm btn-circle" aria-label="Add video">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </button>
            <button className="btn btn-ghost btn-sm btn-circle" aria-label="Add emoji">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </button>
          </div>
          <button className="btn btn-primary btn-sm rounded-full px-6">Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
