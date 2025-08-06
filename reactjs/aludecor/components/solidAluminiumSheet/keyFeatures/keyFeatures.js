import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import keyfeatstyles from "../keyFeatures/tools.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function KeyFeatures({ benefitData }) {
  const allbenefitsData = benefitData.data?.content;
  const allbefItems = allbenefitsData?.items;
  const keyslider = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className={`${keyfeatstyles.tools_container} commonpadding`}>
        <h2 className="titlecenter">
          <span>{allbenefitsData?.pre_heading}</span>
          <AnimatedText text={allbenefitsData?.heading} />
        </h2>
        <div className="container">
          {/* Wrapped Slider inside a div to ensure tabIndex is on a valid element */}
          <div>
            <Slider {...keyslider}>
              {allbefItems &&
                allbefItems.map((allbefItem, index) => {
                  return (
                    <div className="tools-item" key={`allbefItems-${index}`}>
                      <div className="icon1">
                        <Image
                          src="/images/key_icon.svg"
                          width={57}
                          height={57}
                          alt="tools-icon3"
                        />
                      </div>
                      <div className="item-heading">{allbefItem?.title}</div>

                      <div className="txt">{allbefItem?.content}</div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
