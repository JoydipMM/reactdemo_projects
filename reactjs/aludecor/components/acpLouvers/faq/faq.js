import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";
import needstyles from "@/components/Bim/need-to-know/need.module.css";
// import faqstyles from "@/components/residentialSolutions/faq/faq.module.css";
// import Link from "next/link";
// import Image from "next/image";

export default function Faq({ faqData }) {
  const allFaqData = faqData?.data?.content;
  // console.log("allFaqData", allFaqData);
  const faqs = allFaqData?.faqs;
  return (
    <>
      <section className={`${needstyles.needwrper} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allFaqData?.heading} />
          </h2>
          <div className={needstyles.needaccordian}>
            <Accordion>
              {faqs &&
                faqs.map((faq, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      aria-label={`Accordion ${index}`}
                      title={faq?.question}
                      className={needstyles.boxaccor}
                    >
                      <div className={needstyles.accordiancont}>
                        <p>{faq?.answer}</p>
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
