"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import AnimatedText from "@/components/Framemotion/framemotion";

import pillarsstyles from "../pillars/pillars.module.css";

export default function Pillars({ pillarsData }) {
  const allData = pillarsData?.data?.content;
  const allPillarDatas = allData?.pillars_items;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allData?.heading} />
          </h2>
          <p className={`${pillarsstyles.center}`}>{allData?.description}</p>

          <div className={`${pillarsstyles.pillars_content}`}>
            {allPillarDatas &&
              allPillarDatas.map((allPillarData, index) => {
                return (
                  <div className="pillar-item" key={`allPillarDataID-${index}`}>
                    <div className="icon-pic">
                      <Image
                        src={allPillarData?.icon?.url}
                        alt="icon"
                        width={64}
                        height={70}
                      />
                    </div>
                    <div className="title">{allPillarData?.title}</div>
                    <p>{allPillarData?.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
