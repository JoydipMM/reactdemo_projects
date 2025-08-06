"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import AnimatedText from "@/components/Framemotion/framemotion";

import protectstyles from "../protect/protect.module.css";

export default function Protects({ protectsData }) {
  const allProtectData = protectsData.data?.content;
  const firewallProtectDatas = allProtectData?.firewall_protects;

  return (
    <>
      <section className={`${protectstyles.protect_wrapper} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allProtectData?.heading} />
          </h2>

          <div className={`${protectstyles.protect_content}`}>
            {firewallProtectDatas?.map((firewallProtectData, index) => (
              <div
                className="protect-item"
                key={`firewallProtectData-${index}`}
              >
                <div className="icon-pic">
                  <Image
                    src={firewallProtectData?.icon?.url}
                    alt="firewallProtectData"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="title">{firewallProtectData?.title}</div>
                <p>{firewallProtectData?.excerpt}</p>
              </div>
            ))}
          </div>

          <div className="bottom-txt">{allProtectData?.description}</div>
        </div>
      </section>
    </>
  );
}
