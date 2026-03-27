import React, { useState } from 'react';

const ProductCard = ({ product, viewMode = 'carousel' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Reusable Quick View Modal Component rendered directly into the DOM tree
  const QuickViewModal = () => (
    <dialog className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-4xl p-0 overflow-hidden bg-white rounded-[24px]">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side: Large Image */}
          <div className="w-full md:w-1/2 bg-[#FAFAFA] relative flex justify-center items-center p-8 border-b md:border-b-0 md:border-r border-gray-100">
             <img src={product.image} alt={product.title} className="w-full h-auto max-h-[400px] object-cover mix-blend-multiply drop-shadow-xl" />
          </div>
          
          {/* Right Side: Details */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
             <p className="text-[#898989] text-[15px] font-medium tracking-wide uppercase mb-2">{product.category}</p>
             <h3 className="font-bold text-3xl md:text-4xl text-[#1E1E1E] mb-3">{product.title}</h3>
             
             <div className="flex items-center gap-2 mb-6 text-[#E58411]">
               <span className="text-[#1E1E1E] font-bold mr-1 text-[16px]">{product.rating}</span>
               <div className="flex gap-1">
                 {[...Array(Math.floor(product.rating || 5))].map((_, i) => (
                   <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
               </div>
               <span className="text-gray-400 text-sm font-normal ml-2 hover:underline cursor-pointer">(12 Reviews)</span>
             </div>

             <div className="text-[32px] font-bold text-[#1E1E1E] flex items-center mb-6">
                <span className="text-[20px] text-[#898989] mr-2">$</span>
                {product.price}
             </div>
             
             <p className="text-gray-500 mb-8 leading-relaxed font-light text-sm md:text-base">
               Experience the absolute maximum comfort with the {product.title}. Premium architecture ensures stunning visualization and lifetime stability regardless of context.
             </p>
             
             <div className="flex gap-4 items-center mt-auto pt-6 border-t border-gray-100">
               <button className="btn rounded-full px-8 bg-[#1E1E1E] hover:bg-[#E58411] text-white border-none flex-grow shadow-lg">
                  Add to Cart
               </button>
               <button 
                 onClick={() => setIsModalOpen(false)}
                 className="btn btn-circle btn-outline border-gray-300 text-gray-500 hover:bg-gray-100 hover:border-gray-400"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
               </button>
             </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
        <button tabIndex="-1">close</button>
      </form>
    </dialog>
  );

  // Quick View Button Component to DRY logic
  const QuickViewButton = () => (
    <button 
      onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
      className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-md text-gray-700 hover:text-[#E58411] hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 cursor-pointer scale-95 hover:scale-105"
      title="Quick View"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    </button>
  );

  // High-fidelity Horizontal List layout for Shop View
  if (viewMode === 'list') {
    return (
      <>
        <div className="w-full bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden group">
          <figure className="w-full md:w-[320px] bg-[#FAFAFA] flex justify-center items-center relative overflow-hidden shrink-0 border-r border-gray-50">
            <img 
               src={product.image} 
               alt={product.title} 
               className="w-full h-[220px] md:h-[260px] object-cover mix-blend-multiply transform group-hover:scale-105 transition-transform duration-700 p-4"
            />
            <QuickViewButton />
          </figure>
          <div className="p-6 md:p-8 flex flex-col justify-center flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-[#898989] text-[14px] uppercase tracking-wider mb-2 font-medium">{product.category}</p>
                <h3 className="text-[#1E1E1E] text-[24px] font-bold tracking-tight">{product.title}</h3>
              </div>
              <div className="flex gap-1 text-[#E58411] items-center">
                 <span className="text-[#1E1E1E] font-bold mr-2 text-[15px]">{product.rating}</span>
                 {[...Array(Math.floor(product.rating || 5))].map((_, i) => (
                   <svg key={i} className="w-[18px] h-[18px] fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
              </div>
            </div>
            <p className="text-gray-500 text-[15px] font-light mb-6 line-clamp-2 max-w-2xl leading-relaxed mt-2">
              A premium {product.title.toLowerCase()} crafted with absolute precision. High-quality materials and modern engineering make this stunning piece highly durable while maintaining a minimalist aesthetic profile.
            </p>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
              <div className="text-[#1E1E1E] text-[26px] font-bold shrink-0">
                 <span className="text-[16px] font-medium mr-1 text-gray-500">$</span>
                 {product.price}
              </div>
              <button className="btn rounded-full px-8 bg-[#1E1E1E] hover:bg-[#E58411] text-white border-none shadow-md hover:shadow-lg transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <QuickViewModal />
      </>
    );
  }

  // Determine wrapper classes based on grid context or carousel context
  const wrapperClass = viewMode === 'carousel' 
    ? "carousel-item snap-start shrink-0 w-[85%] sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-2.5rem)] pb-8 pt-2 px-2 group" 
    : "w-full pb-8 pt-2 group"; // For standard CSS grid usage

  return (
    <div className={wrapperClass}>
      {/* Standard vertically stacked card matching screenshot */}
      <div className="card w-full bg-white _shadow-xl _hover:shadow-2xl transition-all duration-300 rounded-[28px] overflow-visible border border-gray-100">

        {/* Top Image Section - Light Gray Background */}
        <figure className="bg-[#FAFAFA] rounded-t-[28px] h-[220px] w-full relative overflow-hidden flex justify-center items-end border-b border-gray-50">
          <img
            src={product.image}
            alt={product.title}
            // The image continues upward past the border radius by pulling negative margin or absolute positioning 
            className="h-[100%] w-[100%] object-cover drop-shadow-2xl mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500"
          />
          <QuickViewButton />
        </figure>

        {/* Bottom Content Section - White Background */}
        <div className="card-body p-6 bg-white rounded-b-[28px]">
          <p className="text-[#898989] text-[15px] font-normal w-full m-0 p-0 text-left">{product.category}</p>
          <h2 className="card-title text-[21px] font-bold text-[#1E1E1E] mt-1 mb-1">{product.title}</h2>

          {/* Star Ratings */}
          <div className="flex gap-1 w-full justify-start mt-2 mb-4 text-[#E58411]">
            {[...Array(Math.floor(product.rating || 5))].map((_, i) => (
              <svg key={i} className="w-[18px] h-[18px] fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <div className="card-actions justify-between items-center w-full mt-2">
            <div className="text-[24px] font-bold text-[#1E1E1E]">
              <span className="text-[16px] text-[#898989] mr-1">$</span>
              {product.price}
            </div>
            <button className="btn btn-circle bg-[#1E1E1E] hover:bg-[#E58411] text-white border-none w-11 h-11 min-h-0 shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <QuickViewModal />
    </div>
  );
};

export default ProductCard;
