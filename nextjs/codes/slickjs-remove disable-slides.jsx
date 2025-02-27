"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { id: 1, img: "/image1.jpg", disabled: false },
  { id: 2, img: "/image2.jpg", disabled: true }, // This slide will be removed
  { id: 3, img: "/image3.jpg", disabled: false },
];

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Filter out disabled slides
  const activeSlides = slides.filter(slide => !slide.disabled);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <Slider {...settings}>
        {activeSlides.map(slide => (
          <div key={slide.id}>
            <img src={slide.img} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
