import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import toolsstyles from "@/components/Home/tools/tools.module.css";
import manufacturerstyles from "../manufacturer/manufacturer.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function Manufacturer({ manufacturingData }) {
  const allData = manufacturingData?.data?.content;
  const allManufacDatas = allData?.items;
  const settings = {
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
      <section
        className={`${toolsstyles.tools_container} ${manufacturerstyles.manufacturer_container} commonpadding`}
      >
        <h2 className="titlecenter">
          <span>{allData?.preheading}</span>
          <AnimatedText text={allData?.heading} />
        </h2>
        <div className="container">
          <Slider {...settings}>
            {allManufacDatas &&
              allManufacDatas.map((allManufacData, index) => {
                return (
                  <div className="tools-item" key={`allManufacDataID-${index}`}>
                    <div className="icon1">
                      <Image
                        src={allManufacData?.image?.url}
                        width={75}
                        height={75}
                        alt="icon"
                      />
                    </div>
                    <div className="item-heading">
                      {allManufacData?.heading}
                    </div>

                    <div className="txt">{allManufacData?.description}</div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </>
  );
}
