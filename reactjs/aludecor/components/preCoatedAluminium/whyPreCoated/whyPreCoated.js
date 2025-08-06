import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import whyprestyles from "../whyPreCoated/whyPreCoated.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function WhyPreCoated({ whyPreCoatedData }) {
  const allWhyPreCoatedData = whyPreCoatedData?.data?.content;
  const featureDatas = allWhyPreCoatedData?.features;
  const whyslider = {
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
      <section className={`${whyprestyles.tools_container} topadding_top`}>
        <div className="container">
          <h2
            className="titlecenter"
            style={{ maxWidth: "1186px", margin: "0 auto" }}
          >
            <AnimatedText text={allWhyPreCoatedData?.heading} />
            <span style={{ paddingTop: "6px" }}>
              {allWhyPreCoatedData?.sub_heading}
            </span>
          </h2>
          {/* Wrapped Slider inside a div to ensure tabIndex is on a valid element */}
          <div>
            <Slider {...whyslider}>
              {featureDatas?.map((featureData, index) => (
                <div className="tools-item" key={`bimFeatured-${index}`}>
                  <div className="icon1">
                    <Image
                      src={featureData?.image?.image_url}
                      width={50}
                      height={50}
                      alt="Durability"
                    />
                  </div>
                  <div className="item-heading">{featureData?.title}</div>

                  <div className="txt">{featureData?.description}</div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
