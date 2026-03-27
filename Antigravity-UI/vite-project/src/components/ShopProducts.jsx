import React, { useState } from 'react';
import ProductCard from './ProductCard';

// Comprehensive mock catalog
const SHOP_PRODUCTS = [
  {
    id: 101,
    category: 'Chair',
    title: 'Sakarias Armchair',
    price: 392,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop'
  },
  {
    id: 102,
    category: 'Chair',
    title: 'Baltsar Chair',
    price: 299,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop'
  },
  {
    id: 103,
    category: 'Sofa',
    title: 'Anjay Chair',
    price: 519,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop'
  },
  {
    id: 104,
    category: 'Sofa',
    title: 'Nyantuy Sofa',
    price: 921,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop'
  },
  {
    id: 105,
    category: 'Bed',
    title: 'Lövbacken Bed',
    price: 850,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop'
  },
  {
    id: 106,
    category: 'Lamp',
    title: 'Skarpt Lamp',
    price: 120,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop'
  },
  {
    id: 107,
    category: 'Chair',
    title: 'Oumbärlig Chair',
    price: 180,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&auto=format&fit=crop'
  },
  {
    id: 108,
    category: 'Sofa',
    title: 'Flottebo Sofa',
    price: 649,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop'
  }
];

const CATEGORIES = ['All', 'Chair', 'Sofa', 'Bed', 'Lamp'];

const ShopProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const filteredProducts = SHOP_PRODUCTS.filter(product => {
    if (activeCategory === 'All') return true;
    return product.category === activeCategory;
  });

  return (
    <section className="py-20 bg-white w-full">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* Controls Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          
          {/* Category Filter Pills (Matches Homepage styling) */}
          <div className="bg-[#EEEEEE] p-1.5 rounded-full inline-flex shadow-sm overflow-x-auto max-w-full scrollbar-hide">
            {CATEGORIES.map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[14px] md:text-[15px] font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category 
                    ? 'bg-white shadow-sm text-[#1E1E1E]' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Toggle Controls */}
          <div className="flex items-center gap-2 border border-gray-100 rounded-full p-1 bg-gray-50 shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-full transition-all duration-300 ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#E58411]' : 'text-gray-400 hover:text-gray-600'}`}
              aria-label="Grid View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-full transition-all duration-300 ${viewMode === 'list' ? 'bg-white shadow-sm text-[#E58411]' : 'text-gray-400 hover:text-gray-600'}`}
              aria-label="List View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Display Area */}
        {filteredProducts.length === 0 ? (
          <div className="w-full py-20 text-center text-gray-500 text-lg">
            No products found in this category.
          </div>
        ) : (
          <div className={`w-full ${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10' 
              : 'flex flex-col gap-8'
          }`}>
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                viewMode={viewMode} 
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ShopProducts;
