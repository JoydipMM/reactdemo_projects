import React from 'react';

const Materials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden w-full">
      <div className="container mx-auto px-6 max-w-[1300px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center lg:pl-4 z-10 order-2 lg:order-1 relative">
            <p className="text-[#E58411] uppercase tracking-[0.25em] text-[14px] font-bold mb-5">
              Materials
            </p>
            <h2 className="text-[36px] md:text-[45px] leading-[1.2] font-bold text-[#1E1E1E] mb-6 tracking-tight">
              Very Serious <br className="hidden lg:block" />
              Materials For Making <br className="hidden lg:block" />
              Furniture
            </h2>
            <p className="text-[#898989] text-[16px] md:text-[17px] leading-[1.8] font-light mb-8 max-w-[480px]">
              Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
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

          {/* Right Image Composition */}
          <div className="w-full lg:w-[55%] relative order-1 lg:order-2">
            
            {/* The decorative light gray block behind the images */}
            <div className="hidden md:block absolute top-[15%] right-[-10%] w-[60%] h-[80%] bg-[#F8F9FA] rounded-[40px] z-0"></div>

            <div className="flex gap-4 md:gap-7 relative z-10 w-full items-center justify-center lg:justify-end">
              
              {/* Left Column of Images */}
              <div className="flex flex-col gap-4 md:gap-7 w-[45%] md:w-[40%] mt-[-30px] lg:mt-[-60px]">
                {/* Top Left Image - Square */}
                <figure className="w-full aspect-[1/1] rounded-[24px] md:rounded-[36px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)] bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600" 
                    alt="armchair" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </figure>
                {/* Bottom Left Image - Tall */}
                <figure className="w-full aspect-[4/5] rounded-[24px] md:rounded-[36px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)] bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600" 
                    alt="sofa" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </figure>
              </div>

              {/* Right Column (Single Tall Image) */}
              <div className="w-[50%] md:w-[48%] mt-[40px] md:mt-[80px]">
                <figure className="w-full aspect-[3/4] rounded-[24px] md:rounded-[36px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.1)] bg-gray-100 border border-white/50">
                  <img 
                    src="https://images.unsplash.com/photo-1565814329452-e1efa11c5e8d?auto=format&fit=crop&q=80&w=800" 
                    alt="dining room" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </figure>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Materials;
