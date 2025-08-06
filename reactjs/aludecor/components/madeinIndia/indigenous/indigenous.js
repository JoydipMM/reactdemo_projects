import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toolsstyles from "@/components/Home/tools/tools.module.css";
import manufacturerstyles from "@/components/Export/manufacturer/manufacturer.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import indigenousstyles from "@/components/madeinIndia/indigenous/indigenous.module.css";
export default function Indigenous({ indigenousData }) {
  const allIndigenousData = indigenousData?.data?.content;
  const indigenousDatas = allIndigenousData?.indigenous;
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
        breakpoint: 1200,
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
        className={`${toolsstyles.tools_container} ${indigenousstyles.tools_container} commonpadding`}
      >
        <h2 className="titlecenter">
          <AnimatedText text={allIndigenousData?.heading} />
        </h2>
        <div className="container">
          <Slider {...settings}>
            {indigenousDatas &&
              indigenousDatas.map((indigenousData, index) => {
                return (
                  <div className="tools-item" key={`indigenousDataID-${index}`}>
                    <div className="icon1">
                      <Image
                        src={indigenousData?.image?.url}
                        width={520}
                        height={520}
                        alt="indigenousData"
                      />
                    </div>
                    <div className="item-heading">
                      {indigenousData?.heading}
                    </div>

                    <div className="txt">{indigenousData?.excerpt}</div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </>
  );
}
