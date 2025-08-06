import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";
import earlylifestyles from "../earlylife/earlylife.module.css";

export default function EarlyLife({ descriptionData }) {
  const allOurCmdData = descriptionData?.data?.content;
  return (
    <>
      <section
        className={`${earlylifestyles.earlylife_container} topadding_bottom`}
      >
        <div className="container">
          <div className="earlylife-row">
            <div className="left topadding_top">
              <h2>
                <AnimatedText text={allOurCmdData?.ls_heading} />
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: allOurCmdData?.ls_content }}
              ></div>
            </div>
            <div className="right topadding_top">
              <h3>
                <AnimatedText text={allOurCmdData?.rs_heading} />
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: allOurCmdData?.rs_content }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
