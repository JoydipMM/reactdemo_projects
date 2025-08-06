import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";
import needstyles from "@/components/Bim/need-to-know/need.module.css";

export default function Faq({ faqData }) {
  const allFaqData = faqData?.data?.content;
  const allFaqs = allFaqData?.faq;
  //console.log("allFaqData", allFaqData);
  return (
    <>
      <section className={`${needstyles.needwrper} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text="FAQ" />
          </h2>
          <div className={needstyles.needaccordian}>
            <Accordion>
              {allFaqs &&
                allFaqs.map((allFaq, index) => {
                  return (
                    <AccordionItem
                      key={`acc-${index}`}
                      aria-label={`Accordion ${index}`}
                      title={`${index + 1}. ${allFaq?.question}`}
                      className={needstyles.boxaccor}
                    >
                      <div className={needstyles.accordiancont}>
                        <p>{allFaq?.answer}</p>
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
