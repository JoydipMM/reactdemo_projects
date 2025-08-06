import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";
import indappstyles from "@/components/preCoatedAluminium/indApplication/indApplication.module.css";
import Image from "next/image";

export default function IndApplication({ industriesData }) {
  const allindustryData = industriesData?.data?.content;
  const industryDatas = allindustryData?.industries;
  return (
    <>
      <section className={`${indappstyles.indwrper} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allindustryData?.heading} />
          </h2>
          <p
            dangerouslySetInnerHTML={{ __html: allindustryData?.description }}
          ></p>
          <div className={indappstyles.indappaccordian}>
            <Accordion>
              {industryDatas?.map((industryData, index) => (
                <AccordionItem
                  key={`ind-${index + 1}`}
                  aria-label={`Accordion ${index + 1}`}
                  className={indappstyles.boxaccor}
                  title={
                    <div className={indappstyles.accordiantitle}>
                      <div className={indappstyles.imconttit}>
                        <Image
                          fill={true}
                          src={industryData?.image?.image_url}
                          alt="Construction"
                        />
                      </div>
                      <h3>{industryData?.title}</h3>
                    </div>
                  }
                >
                  <div
                    className={indappstyles.accordiancont}
                    dangerouslySetInnerHTML={{ __html: industryData?.content }}
                  ></div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
