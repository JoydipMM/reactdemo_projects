"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import AnimatedText from "@/components/Framemotion/framemotion";

import protectstyles from "@/components/fireWall/protect/protect.module.css";
import uniqueFeaturesstyles from "@/components/zincCompositePanels/uniqueFeatures/uniqueFeatures.module.css";

export default function Uniquefeatures({ uniqueData }) {
  const allUniqueData = uniqueData?.data?.content;
  const uniqueFeatures = allUniqueData?.features;
  return (
    <>
      <section className={`${protectstyles.protect_wrapper} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allUniqueData?.heading} />
          </h2>
          <p style={{ textAlign: "center" }}>{allUniqueData?.subheading}</p>

          <div
            className={`${protectstyles.protect_content} ${uniqueFeaturesstyles.protect_content}`}
          >
            {uniqueFeatures &&
              uniqueFeatures.map((uniqueFeature, index) => {
                return (
                  <div
                    className="protect-item"
                    key={`uniqueFeatureID-${index}`}
                  >
                    <div className="icon-pic">
                      <Image
                        src={uniqueFeature?.icon?.url}
                        alt="uniqueFeature"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="title">{uniqueFeature?.title}</div>
                    <p>{uniqueFeature?.information}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
