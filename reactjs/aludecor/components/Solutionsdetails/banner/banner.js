import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerstyles from "../banner/banner.module.css";

export default function Banner({ bannerData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    asNavFor: thumbSlider.current,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
  };

  const thumbSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: mainSlider.current,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  const slides = bannerData.data.content.project_galleries;

  return (
    <>
      <section className={bannerstyles.banner_container}>
        <div className="container">
          <div className={bannerstyles.slider_container}>
            <div className={bannerstyles.main_slider}>
              <Slider ref={mainSlider} {...mainSettings}>
                {slides.map((slide) => (
                  <div key={slide.id}>
                    <Image
                      src={slide.url}
                      alt={slide.alt}
                      width={1760}
                      height={960}
                    />

                    {/* <div className="banner-caption">
                      <div className="top-title">{slide.subheading}</div>
                      <div className="heading-title">{slide.heading}</div>
                      <div className="txt">{slide.description}</div>
                      <Link className="common-btn" href="/#">
                        <label>
                          Project details
                          <Image
                            alt=""
                            width="34"
                            height="16"
                            src="/images/arrow-right.svg"
                          />
                        </label>
                      </Link>
                    </div> */}
                    <div className="brands">
                      <Image
                        fill={true}
                        src="/images/brand-star.svg"
                        alt="brand-star"
                      />
                    </div>
                  </div>
                ))}
              </Slider>

              <div className={bannerstyles.slide_count}>
                {String(currentSlide + 1).padStart(2, "0")}
                {/* {String(slides.length).padStart(2, "0")} */}
              </div>
            </div>
            <div className={bannerstyles.thumbnail_slider}>
              <Slider ref={thumbSlider} {...thumbSettings}>
                {slides.map((slide) => (
                  <div key={slide.id}>
                    <Image
                      src={slide.url}
                      alt={`Thumbnail ${slide.id}`}
                      width={1760}
                      height={960}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
