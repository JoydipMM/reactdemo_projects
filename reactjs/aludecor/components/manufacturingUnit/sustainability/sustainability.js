"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import videostyles from "../video/video.module.css";
import sustainabilitystyles from "../sustainability/sustainability.module.css";

export default function Sustainability({ exploreData }) {
  const exploringData = exploreData.data?.content;
  const exploringItems = exploringData?.items;

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };

  return (
    <>
      <section
        className={`slidergallery topadding_top ${videostyles.slidergallery} ${sustainabilitystyles.slidergallery}`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <span>{exploringData?.pre_heading}</span>
            <AnimatedText text={exploringData?.heading} />
          </h2>

          <div className={`premium_boxwrp ${videostyles.premium_boxwrp}`}>
            <Slider {...settings} className="commonSlider">
              {exploringItems?.map((exploringItem, index) => (
                <div className="box-content" key={`exploringID-${index}`}>
                  <div className="pic">
                    <Image
                      src={exploringItem?.image?.image_url}
                      alt="video"
                      fill={true}
                    />
                    <div className="brands">
                      <Image
                        alt="star"
                        fill={true}
                        src="/images/brand-star.svg"
                      />
                    </div>
                  </div>
                  <p>{exploringItem?.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
