import React, { useState } from 'react';
import CommentSection from './CommentSection';

const FeedCard = ({ post }) => {
  // Support either single `image` or `images` array
  const images = post.images || (post.image ? [post.image] : []);
  
  // Image Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Comment Section State
  const [showComments, setShowComments] = useState(false);

  // --- Image Modal Functions ---
  const openModal = (index) => {
    setCurrentSlide(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // --- Render Helpers ---
  const renderImages = () => {
    if (images.length === 0) return null;

    if (images.length === 1) {
      return (
        <figure className="mt-4 rounded-xl overflow-hidden border border-base-200">
          <img
            src={images[0]}
            alt="Post content"
            className="w-full max-h-[500px] object-cover cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => openModal(0)}
          />
        </figure>
      );
    }

    let gridClass = "grid gap-1 mt-4 rounded-xl overflow-hidden border border-base-200 bg-base-300";
    if (images.length === 2) gridClass += " grid-cols-2";
    else if (images.length === 3) gridClass += " grid-cols-2 grid-rows-2";
    else gridClass += " grid-cols-2 grid-rows-2"; // 4+

    return (
      <div className={gridClass}>
        {images.slice(0, 4).map((img, index) => {
          let wrapperClass = "relative w-full h-full";
          let imgClass = "w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity";

          if (images.length === 3 && index === 0) {
            wrapperClass += " col-span-2 row-span-1";
            imgClass += " aspect-video";
          } else if (images.length === 3 || images.length >= 4) {
            imgClass += " h-48 sm:h-64";
          } else if (images.length === 2) {
            imgClass += " h-64 sm:h-80";
          }

          return (
            <div key={index} className={wrapperClass} onClick={(e) => { e.stopPropagation(); openModal(index); }}>
              <img src={img} alt={`Post content ${index + 1}`} className={imgClass} />
              {index === 3 && images.length > 4 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-3xl font-bold cursor-pointer hover:bg-black/70 transition-colors">
                  +{images.length - 4}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="card bg-base-200 shadow-md border border-base-200">
        <div className="card-body p-5">
          {/* Post Header */}
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full cursor-pointer">
                  <img src={post.user.avatar} alt={post.user.fullname} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-base hover:underline cursor-pointer">{post.user.fullname}</h3>
                <div className="text-sm text-base-content/60 flex items-center gap-1">
                  <span>{post.user.handle}</span>
                  <span>·</span>
                  <span>{post.time}</span>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle m-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-48 border border-base-200">
                <li onClick={() => document.activeElement.blur()}><a>Save Post</a></li>
                <li onClick={() => document.activeElement.blur()}><a>Hide Post</a></li>
                <li onClick={() => document.activeElement.blur()}><a>Unfollow User</a></li>
                <li onClick={() => document.activeElement.blur()} className="text-error"><a>Report</a></li>
              </ul>
            </div>
          </div>

          {/* Post Content */}
          <div className="mt-3 text-base">
            <p>{post.content}</p>
          </div>

          {/* Post Images Collage */}
          {renderImages()}

          {/* Post Actions */}
          <div className="flex justify-between items-center mt-4 pt-2 border-t border-base-200 text-base-content/60">
            <button className="btn btn-ghost btn-sm group flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <span className="font-medium group-hover:text-primary transition-colors">{post.stats.likes}</span>
            </button>
            <button 
              className={`btn btn-ghost btn-sm group flex gap-2 ${showComments ? 'text-blue-500' : ''}`}
              onClick={() => setShowComments(!showComments)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              <span className="font-medium group-hover:text-blue-500 transition-colors">{post.stats.comments}</span>
            </button>
            <button className="btn btn-ghost btn-sm group flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              <span className="font-medium group-hover:text-green-500 transition-colors">{post.stats.shares}</span>
            </button>
            <button className="btn btn-ghost btn-sm btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
            </button>
          </div>

          {/* Comment Section */}
          {showComments && <CommentSection postId={post.id} />}
        </div>
      </div>

      {/* Image Carousel Modal */}
      {isModalOpen && (
        <dialog open className="modal modal-open bg-black/90 z-[9999] fixed inset-0 m-0">
          <div
            className="w-full h-full flex flex-col justify-center items-center relative"
            onClick={closeModal}
          >
            <button
              className="btn btn-circle btn-ghost absolute right-4 top-4 z-[60] text-base-content bg-base-100/50 hover:bg-base-100"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="relative w-full h-full md:w-4/5 md:h-[85vh] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>

              <img
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="max-w-full max-h-full object-contain select-none shadow-2xl rounded-sm"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="btn btn-circle border-0 absolute left-4 md:-left-12 text-black bg-white hover:bg-gray-200 shadow-lg"
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextSlide}
                    className="btn btn-circle border-0 absolute right-4 md:-right-12 text-black bg-white hover:bg-gray-200 shadow-lg"
                  >
                    ❯
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                  <div key={i} className={`h-2.5 w-2.5 rounded-full transition-colors shadow-sm ${i === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}></div>
                ))}
              </div>
            </div>

            <div className="absolute top-4 left-4 text-white font-medium z-[60] bg-black/50 px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {images.length}
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default FeedCard;
