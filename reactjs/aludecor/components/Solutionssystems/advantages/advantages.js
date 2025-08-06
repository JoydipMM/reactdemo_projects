import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import toolsstyles from "../advantages/advantages.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Advantages({ systemAdvantageData }) {
  const advantageData = systemAdvantageData.data?.content;
  const advantageHighlights = advantageData?.highlights;
  return (
    <>
      <section className={`${toolsstyles.tools_container} commonpadding`}>
        <div className="container">
          <div className="advantagewrap">
            <h2 className="titlecenter">
              <span>{advantageData?.preheading}</span>
              <AnimatedText text={advantageData?.heading} />
            </h2>
            <div className="toolswrapper">
              {advantageHighlights?.map((advantageHighlight, index) => (
                <div className="tools-item" key={`advantageHighlights${index}`}>
                  <div className="icon1">
                    <Image
                      src="/images/system/calculator.png"
                      width={48}
                      height={48}
                      alt="calculator"
                    />
                  </div>
                  <div className="item-heading">
                    {advantageHighlight?.heading}
                  </div>
                  <div className="txt">{advantageHighlight?.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
