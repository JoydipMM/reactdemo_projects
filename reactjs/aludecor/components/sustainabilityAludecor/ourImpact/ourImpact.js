import React from "react";
import Image from "next/image";
import toolsstyles from "@/components/Solutionssystems/advantages/advantages.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import CountUp from "react-countup";
import impacttyles from "@/components/sustainabilityAludecor/ourImpact/ourImpact.module.css";

export default function OurImpact({ numbersData }) {
  const allData = numbersData?.data?.content;
  const numberDatas = allData?.numbers;
  return (
    <>
      <section className={`${toolsstyles.tools_container} commonpadding`}>
        <div className="container">
          <div className="advantagewrap">
            <h2 className="titlecenter">
              <AnimatedText text={allData?.heading} />
            </h2>

            <div className={`toolswrapper ${impacttyles.impactbox}`}>
              {numberDatas &&
                numberDatas?.map((numberData, index) => (
                  <div className="tools-item" key={`numberDatasID-${index}`}>
                    <div className="icon1">
                      <Image
                        src={numberData?.image?.image_url}
                        width={65}
                        height={65}
                        alt=""
                      />
                    </div>
                    <div className="item-heading">{numberData?.title}</div>
                    <div className={impacttyles.countsust}>
                      <CountUp
                        start={0}
                        end={parseInt(numberData?.amount)}
                        duration={40}
                      />
                      {numberData?.params}
                    </div>
                  </div>
                ))}
            </div>

            <h3 style={{ textAlign: "center" }}>{allData?.quote}</h3>
          </div>
        </div>
      </section>
    </>
  );
}
