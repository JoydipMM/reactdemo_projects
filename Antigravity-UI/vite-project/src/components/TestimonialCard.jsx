import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="carousel-item snap-center shrink-0 w-[85%] sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] group/card flex justify-center">
      <div className="w-full h-[520px] rounded-[32px] overflow-hidden relative _shadow-[0_20px_40px_rgba(0,0,0,0.06)] _hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] _transition-shadow duration-300 mx-auto max-w-[470px]">

        {/* Background Image */}
        <img
          src={testimonial.bgImg}
          alt="Interior background"
          className="absolute inset-0 w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-700"
        />

        {/* Overlay subtle shadow to add contrast at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

        {/* Floating White Review Card */}
        <div className="absolute left-6 right-6 bottom-6 bg-white rounded-[24px] shadow-lg flex flex-col items-center pt-10 pb-8 px-6 transition-transform duration-300">

          {/* Avatar Overflowing */}
          <div className="absolute -top-[36px] left-1/2 -translate-x-1/2 rounded-full p-2 bg-white _shadow-md">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-[60px] h-[60px] rounded-full object-cover _shadow-sm"
            />
          </div>

          {/* Content */}
          <h3 className="text-[19px] font-bold text-[#1E1E1E] mb-1 leading-tight">{testimonial.name}</h3>
          <p className="text-[#898989] text-[13px] mb-4">{testimonial.role}</p>

          <p className="text-[#555555] text-[15px] font-light text-center mb-6 leading-[1.6] px-1 line-clamp-4">
            {testimonial.text}
          </p>

          {/* Star Ratings */}
          <div className="flex gap-[6px] justify-center mt-auto w-full text-[#E58411]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-[16px] h-[16px] fill-current ${i === 4 && testimonial.id === 1 ? 'text-[#F5D8B8]' : ''}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialCard;
