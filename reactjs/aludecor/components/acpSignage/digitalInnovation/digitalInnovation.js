import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";
import needstyles from "@/components/Bim/need-to-know/need.module.css";
import digitalinstyles from "@/components/acpSignage/digitalInnovation/digitalInnovation.module.css";

export default function DigitalInnovation({ innovationData }) {
  const allInnovationData = innovationData?.data?.content;
  const innoItems = allInnovationData?.items;
  return (
    <>
      <section className={`${needstyles.needwrper} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allInnovationData?.heading} />
          </h2>
          <div
            className={`${needstyles.needaccordian} ${digitalinstyles.digitalinnvwrp}`}
          >
            <Accordion>
              {innoItems &&
                innoItems.map((innoItem, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      aria-label={`Accordion ${index}`}
                      title={innoItem?.heading}
                      className={needstyles.boxaccor}
                    >
                      <div className={needstyles.accordiancont}>
                        <p>{innoItem?.description}</p>
                      </div>
                    </AccordionItem>
                  );
                })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
