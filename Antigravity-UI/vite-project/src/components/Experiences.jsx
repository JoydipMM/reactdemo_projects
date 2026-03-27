import React from 'react';

const Experiences = () => {
  return (
    <section className="py-24 bg-white overflow-hidden w-full">
      <div className="container mx-auto px-6 max-w-[1300px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Image Section */}
          <div className="w-full lg:w-[55%] relative xl:pl-0">
            {/* The decorative light gray block behind the image */}
            <div className="hidden md:block absolute top-[5%] right-[-5%] w-[80%] h-[100%] bg-[#F8F9FA] rounded-[40px] -translate-y-12 translate-x-8 z-0"></div>
            
            {/* Image Container */}
            <figure className="relative z-10 rounded-tr-[40px] rounded-br-[40px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              {/* Unsplash interior stock image as a placeholder for the beautiful green couch room */}
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury interior experience" 
                className="w-full h-full object-cover max-h-[450px] lg:max-h-[520px] hover:scale-105 transition-transform duration-700"
              />
            </figure>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 lg:px-0 z-10">
            <p className="text-[#E58411] uppercase tracking-[0.25em] text-[14px] font-bold mb-5">
              Experiences
            </p>
            <h2 className="text-[36px] md:text-[45px] leading-[1.2] font-bold text-[#1E1E1E] mb-6 tracking-tight">
              We Provide You The <br className="hidden md:block" />
              Best Experience
            </h2>
            <p className="text-[#898989] text-[16px] md:text-[17px] leading-[1.8] font-light mb-8 max-w-[480px]">
              You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials.
            </p>
            <a href="#more-info" className="inline-flex items-center text-[#E58411] text-[15px] font-medium hover:text-[#c9740e] transition-colors group w-fit cursor-pointer">
              <span>More Info</span>
              <svg 
                className="w-8 h-4 ml-4 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experiences;
