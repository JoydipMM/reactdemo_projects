import React from 'react';

const Banner = () => {
  return (
    <div 
      className="hero min-h-screen relative overflow-hidden bg-[#1e2329]"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(30,35,41,0.6), rgba(30,35,41,0.2)), url("https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-content text-center text-white z-10 pt-24 md:pt-32">
        <div className="max-w-4xl px-4">
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-[75px] font-bold leading-[1.15] tracking-tight">
            Make Your Interior More Minimalistic & Modern
          </h1>
          <p className="mb-12 text-base md:text-[22px] font-light text-gray-200/90 max-w-2xl mx-auto leading-relaxed">
            Turn your room with panto into a lot more minimalist and modern with ease and speed
          </p>
          
          <div className="relative max-w-md mx-auto group">
            <input 
              type="text" 
              placeholder="Search furniture" 
              className="input w-full rounded-full pl-6 pr-14 py-4 h-[65px] bg-white/20 backdrop-blur-md border border-white/50 text-white placeholder:text-gray-300 focus:outline-none focus:border-white focus:bg-white/30 transition-all duration-300" 
            />
            <button className="btn btn-circle absolute right-2 top-2 border-none h-[49px] w-[49px] bg-[#E58411] hover:bg-[#c9740e] transition-colors focus:outline-none flex items-center justify-center rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative interactive dots to match the mock visual pattern */}
      <div className="hidden lg:block absolute left-[22%] top-[55%] w-8 h-8 rounded-full bg-white/30 border border-white/50 backdrop-blur-md cursor-pointer before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:top-[9px] before:left-[10px] shadow-lg animate-pulse hover:bg-white/50 transition-colors" />
      <div className="hidden lg:block absolute right-[25%] bottom-[20%] w-8 h-8 rounded-full bg-white/30 border border-white/50 backdrop-blur-md cursor-pointer before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:top-[9px] before:left-[10px] shadow-lg hover:animate-ping transition-colors" />
      <div className="hidden lg:block absolute right-[10%] top-[40%] w-8 h-8 rounded-full bg-white/30 border border-white/50 backdrop-blur-md cursor-pointer before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:top-[9px] before:left-[10px] shadow-lg animate-pulse hover:bg-white/50 transition-colors duration-1000 delay-500" />
    </div>
  );
};

export default Banner;
