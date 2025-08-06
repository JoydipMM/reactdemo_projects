import React from "react";
import Image from "next/image";
import toolsstyles from "@/components/Solutionssystems/advantages/advantages.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import varbenstyles from "@/components/zincSolidPanels/variousBenefits/variousBenefits.module.css";
import panelstyles from "@/components/sustainabilityAludecor/ourPanels/ourPanels.module.css";
export default function OurPanels({ helpData }) {
  const allData = helpData?.data?.content;
  const helpDatas = allData?.content;
  return (
    <>
      <section
        className={`${toolsstyles.tools_container} commonpadding ${panelstyles.panelwrper}`}
      >
        <div className="container">
          <div className="advantagewrap">
            <h2 className="titlecenter">
              <AnimatedText text={allData?.heading} />
            </h2>

            <div className={varbenstyles.adv_iconwrpmain}>
              {helpDatas &&
                helpDatas?.map((helpDatas, index) => (
                  <div
                    className={`${varbenstyles.adv_iconwrp} ${panelstyles.panelboxwrper}`}
                    key={`helpDatasId-${index}`}
                  >
                    <Image
                      width={57}
                      height={57}
                      src="/images/key_icon.svg"
                      alt="Recyclable Content"
                    />
                    <h3>{helpDatas?.title}</h3>
                    <p>{helpDatas?.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
