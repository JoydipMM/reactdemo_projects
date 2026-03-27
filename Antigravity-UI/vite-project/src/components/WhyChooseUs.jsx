import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Luxury facilities',
      description: 'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.',
    },
    {
      title: 'Affordable Price',
      description: 'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.',
    },
    {
      title: 'Many Choices',
      description: 'We provide many unique work space choices so that you can choose the workspace to your liking.',
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 container mx-auto max-w-7xl bg-white">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start justify-between">
        
        {/* Left Title Area */}
        <div className="lg:w-1/4 shrink-0">
          <h2 className="text-[36px] md:text-[42px] font-bold text-[#1E1E1E] leading-[1.2] tracking-tight">
            Why <br className="hidden lg:block" />
            Choosing Us
          </h2>
        </div>

        {/* Right Features Grid */}
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pl-0 lg:pl-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#1E1E1E] mb-5">{feature.title}</h3>
              <p className="text-[#898989] text-[15px] md:text-[16px] font-light leading-[1.7] mb-6 flex-grow">
                {feature.description}
              </p>
              <a href="#more-info" className="inline-flex items-center text-[#E58411] text-[14px] font-medium hover:text-[#c9740e] transition-colors group mt-auto w-fit">
                <span>More Info</span>
                <svg 
                  className="w-8 h-4 ml-4 transform group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
