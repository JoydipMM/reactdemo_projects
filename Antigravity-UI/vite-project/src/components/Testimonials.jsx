import React, { useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Bang Upin',
      role: 'Pedagang Asongan',
      text: '"Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal"',
      rating: 5,
      bgImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Ibuk Sukijan',
      role: 'Ibu Rumah Tangga',
      text: '"Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah"',
      rating: 5,
      bgImg: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&auto=format&fit=crop&q=80',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Mpok Ina',
      role: 'Karyawan Swasta',
      text: '"Sangat terjangkau untuk kantong saya yang tidak terlalu banyak"',
      rating: 5,
      bgImg: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=80',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1ebcc8?w=200&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'Pak Budi',
      role: 'Pengusaha',
      text: '"Kualitas kayunya sangat bagus, finishingnya rapih sekali. Saya sangat puas"',
      rating: 5,
      bgImg: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&auto=format&fit=crop&q=80',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      name: 'Neng Siti',
      role: 'Arsitek',
      text: '"Pelayanannya ramah dan hasil pengerjaan tepat waktu dengan kualitas wahid"',
      rating: 5,
      bgImg: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=600&auto=format&fit=crop&q=80',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80'
    }
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden w-full relative">
      <div className="container mx-auto px-4 max-w-[1600px]">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E58411] uppercase tracking-[0.25em] text-[14px] font-bold mb-4">
            Testimonials
          </p>
          <h2 className="text-[36px] md:text-[42px] font-bold text-[#1E1E1E] tracking-tight">
            Our Client Reviews
          </h2>
        </div>

        {/* Carousel Slider */}
        <div className="relative w-full mx-auto group">

          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden lg:flex absolute left-[24px] md:left-[-24px] top-[50%] -translate-y-1/2 z-20 w-[60px] h-[60px] bg-white rounded-full items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.1)] text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>

          <div
            ref={carouselRef}
            className="carousel w-full gap-6 md:gap-8 px-4 py-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide items-start"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute right-[-24px] top-[50%] -translate-y-1/2 z-20 w-[60px] h-[60px] bg-white rounded-full items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.1)] text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
