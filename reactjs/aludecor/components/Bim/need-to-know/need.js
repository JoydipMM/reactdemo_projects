import { useState } from "react";
import needstyles from "@/components/Bim/need-to-know/need.module.css";
import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function NeedKnow({ faqData }) {
  const allFaqData = faqData?.data?.content;
  const faqs = allFaqData?.faq;
  // console.log("faqs", faqs);
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
