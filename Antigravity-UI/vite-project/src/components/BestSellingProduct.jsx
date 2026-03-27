import React, { useRef, useState } from 'react';
import ProductCard from './ProductCard';

const BestSellingProduct = () => {
  const [activeTab, setActiveTab] = useState('Chair');
  const carouselRef = useRef(null);

  const tabs = ['Chair', 'Beds', 'Sofa', 'Lamp'];

  // Using Unsplash images with transparent blend mode to mimic the clean cutouts
  const products = [
    {
      id: 1,
      category: 'Chair',
      title: 'Sakarias Armchair',
      price: 392,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60', // dark chair
    },
    {
      id: 2,
      category: 'Chair',
      title: 'Baltsar Chair',
      price: 299,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&auto=format&fit=crop&q=60', // blue chair
    },
    {
      id: 3,
      category: 'Chair',
      title: 'Anjay Chair',
      price: 519,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60', // brown chair
    },
    {
      id: 4,
      category: 'Chair',
      title: 'Nyantuy Chair',
      price: 921,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60', // textured chair
    },
    {
      id: 5,
      category: 'Chair',
      title: 'Vintage Lounge',
      price: 450,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500&auto=format&fit=crop&q=60', // classic chair
    }
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden w-full relative">
      <div className="container mx-auto px-4 max-w-8xl">

        {/* Header */}
        <h2 className="text-[36px] md:text-[42px] font-bold text-[#1E1E1E] text-center mb-10 tracking-tight">
          Best Selling Product
        </h2>

        {/* Custom Tabs using DaisyUI concepts but customized to match design precisely */}
        <div className="flex justify-center mb-24">
          <div className="bg-[#EEEEEE] p-1.5 rounded-full inline-flex shadow-sm">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${activeTab === tab
                    ? 'bg-white shadow-sm text-[#1E1E1E]'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="relative w-full mx-auto group">

          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden lg:flex absolute left-[0px] top-[45%] -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.08)] text-gray-800 hover:bg-gray-50 transition-colors opacity-90 hover:opacity-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>

          <div
            ref={carouselRef}
            className="carousel w-full gap-6 lg:gap-8 py-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide items-start"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute right-[0px] top-[45%] -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.08)] text-gray-800 hover:bg-gray-50 transition-colors opacity-90 hover:opacity-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>

        {/* View All Link */}
        <div className="flex justify-center mt-6 mb-4">
          <a href="#view-all" className="inline-flex items-center text-[#E58411] text-[15px] font-medium hover:text-[#c9740e] transition-colors group">
            <span>View All</span>
            <svg
              className="w-8 h-4 ml-3 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>

      {/* CSS to hide scrollbar for non-Firefox browsers (DaisyUI handles some but this guarantees it) */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
};

export default BestSellingProduct;
