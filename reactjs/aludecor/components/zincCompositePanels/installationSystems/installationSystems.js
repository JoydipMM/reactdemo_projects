import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";
import needstyles from "@/components/Bim/need-to-know/need.module.css";

export default function Installationsystems({ installationData }) {
  const allInstallationData = installationData?.data?.content;
  const installations = allInstallationData?.installation;

  return (
    <>
      <section className={`${needstyles.needwrper} topadding_bottom`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allInstallationData?.heading} />
          </h2>
          <div className={needstyles.needaccordian}>
            <Accordion>
              {installations &&
                installations.map((installation, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      aria-label={`Accordion ${index}`}
                      title={installation?.heading}
                      className={needstyles.boxaccor}
                    >
                      <div className={needstyles.accordiancont}>
                        <p>{installation?.description}</p>
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
