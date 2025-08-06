import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";
import earlylifestyles from "@/components/ourCMD/earlylife/earlylife.module.css";
import chooseZincstyles from "@/components/zincCompositePanels/chooseZinc/chooseZinc.module.css";

export default function Choosezinc({ whyChooseData }) {
  const allWhyChooseData = whyChooseData?.data?.content;
  // console.log("allWhyChooseData", allWhyChooseData);
  const whyChooseDatas = allWhyChooseData?.why_choose;
  return (
    <>
      <section
        className={`${earlylifestyles.earlylife_container} ${chooseZincstyles.earlylife_container} commonpadding`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allWhyChooseData?.heading} />
          </h2>
          <p>{allWhyChooseData?.subheading}</p>
          <div className="earlylife-row">
            <div className={`${chooseZincstyles.right_container} left`}>
              <ul>
                {whyChooseDatas &&
                  whyChooseDatas.map((whyChooseData, index) => {
                    return (
                      <li key={`whyChooseDataID-${index}`}>
                        <h4>
                          <Image
                            width={42}
                            height={42}
                            src={whyChooseData?.icon?.url}
                            alt="whyChooseData"
                          />
                          {whyChooseData?.title}
                        </h4>
                        <p>{whyChooseData?.description}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className={`${chooseZincstyles.right_area} right`}>
              <h2>
                <AnimatedText text={allWhyChooseData?.right_heading} />
              </h2>
            </div>
          </div>
          <div className="quotebordercont">
            <h3>{allWhyChooseData?.quotation}</h3>
          </div>
        </div>
      </section>
    </>
  );
}
