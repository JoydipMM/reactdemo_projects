import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import toolsstyles from "../tools/tools.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Tools({ toolDataVal }) {
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
  const toolData = toolDataVal.data?.content;
  const toolCats = toolData?.tools;
  return (
    <>
      <section className={`${toolsstyles.tools_container} commonpadding`}>
        <h2 className="titlecenter">
          <span>{toolData?.preheading}</span>
          <AnimatedText text={toolData?.heading} />
        </h2>
        <div className="container">
          {/* Wrapped Slider inside a div to ensure tabIndex is on a valid element */}
          <div>
            <Slider {...settings}>
              {toolCats?.map((toolCat, index) => (
                <Link
                  href={toolCat?.view_link == "" ? "#" : toolCat?.view_link}
                >
                  <div className="tools-item" key={`tool-${index}`}>
                    <div className="icon1">
                      <Image
                        src={toolCat.image_link}
                        width={43}
                        height={48}
                        alt="tools-icon3"
                      />
                    </div>
                    <div className="item-heading">{toolCat.title}</div>
                    <div className="item-title">{toolCat.subtitle}</div>
                    <div className="txt">{toolCat.description}</div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
