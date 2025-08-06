import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";
import indappstyles from "@/components/preCoatedAluminium/indApplication/indApplication.module.css";
import Image from "next/image";

export default function Applications({ applicationData }) {
  const allAppData = applicationData?.data?.content;
  const applicationDatas = allAppData?.applications;
  return (
    <>
      <section className={`${indappstyles.indwrper} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allAppData?.heading} />
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: allAppData?.description }}
          ></div>

          <div className={indappstyles.indappaccordian}>
            <Accordion>
              {applicationDatas?.map((applicationData, index) => (
                <AccordionItem
                  key={index + 1}
                  aria-label={`Accordion ${index + 1}`}
                  className={indappstyles.boxaccor}
                  title={
                    <div className={indappstyles.accordiantitle}>
                      <div className={indappstyles.imconttit}>
                        <Image
                          fill={true}
                          src={applicationData?.image?.url}
                          alt="Construction"
                        />
                      </div>
                      <h3>{applicationData?.title}</h3>
                    </div>
                  }
                >
                  <div className={indappstyles.accordiancont}>
                    <p>{applicationData?.description}</p>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
