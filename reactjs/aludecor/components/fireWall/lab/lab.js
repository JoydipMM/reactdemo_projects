import AnimatedText from "@/components/Framemotion/framemotion";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import labstyles from "../lab/lab.module.css";

export default function Lab({ testingData }) {
  const allTestingData = testingData.data?.content;
  const labTestingDatas = allTestingData?.lab_items;
  return (
    <>
      <section className={`${labstyles.lab_content} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allTestingData?.heading} />
          </h2>

          <div className={`${labstyles.lab_row}`}>
            {labTestingDatas?.map((labTestingData, index) => (
              <div className="lab-item" key={`firewallProtectDataID-${index}`}>
                <div className="pic hoverarea">
                  <Image
                    src={labTestingData?.image?.url}
                    alt="lab"
                    fill="true"
                  />
                  <div className="brands">
                    <Image
                      fill={true}
                      src="/images/brand-star.svg"
                      alt="star"
                    />
                  </div>
                </div>
                <div className="title">{labTestingData?.heading}</div>
                <p>{labTestingData?.description}</p>
              </div>
            ))}
          </div>

          <div
            className={`${labstyles.microcopy}`}
            dangerouslySetInnerHTML={{ __html: allTestingData?.highlights }}
          ></div>
        </div>
      </section>
    </>
  );
}
