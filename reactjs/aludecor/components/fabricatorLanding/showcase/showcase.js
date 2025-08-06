import React from "react";
import Link from "next/link";
import Image from "next/image";
import toolsstyles from "@/components/Solutionssystems/advantages/advantages.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Showcase({ rewardsData }) {
  const allData = rewardsData?.data?.content;
  const rewardsDatas = allData?.rewards;
  return (
    <>
      <section className={`${toolsstyles.tools_container} commonpadding`}>
        <div className="container">
          <div className="advantagewrap">
            <h2 className="titlecenter" style={{ paddingBottom: "15px" }}>
              <AnimatedText text={allData?.heading} />
            </h2>
            <p
              style={{
                width: "80%",
                margin: "0 auto",
                textAlign: "center",
                marginBottom: "15px"
              }}
            >
              {allData?.subheading}
            </p>
            <div className="toolswrapper">
              {rewardsDatas?.map((rewardsData, index) => (
                <div className="tools-item" key={`rewardsDataID-${index}`}>
                  <div className="icon1">
                    <Image
                      src="/images/system/calculator.png"
                      width={43}
                      height={48}
                      alt=""
                    />
                  </div>
                  <div className="item-heading">{rewardsData?.title}</div>
                  <div className="txt">{rewardsData?.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
