import React from "react";
import Image from "next/image";
import toolsstyles from "@/components/Solutionssystems/advantages/advantages.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function WhyChoose({ whyChooseData }) {
  const allChooseData = whyChooseData?.data?.content;
  const chooseWorks = allChooseData?.why_choose;
  return (
    <>
      <section className={`${toolsstyles.tools_container} commonpadding`}>
        <div className="container">
          <div className="advantagewrap">
            <h2 className="titlecenter" style={{ paddingBottom: "15px" }}>
              <AnimatedText text={allChooseData?.heading} />
            </h2>
            <p
              style={{
                width: "80%",
                margin: "0 auto",
                textAlign: "center",
                marginBottom: "15px"
              }}
            >
              {allChooseData?.subheading}
            </p>
            <div className="toolswrapper">
              {chooseWorks &&
                chooseWorks.map((chooseWork, index) => {
                  return (
                    <div className="tools-item" key={`chooseWorksID-${index}`}>
                      <div className="icon1">
                        <Image
                          src={chooseWork?.icon?.url}
                          width={43}
                          height={48}
                          alt=""
                        />
                      </div>
                      <div className="item-heading">{chooseWork?.heading}</div>
                      <div className="txt">{chooseWork?.description}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
