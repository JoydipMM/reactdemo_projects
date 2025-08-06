import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";
import needstyles from "@/components/Bim/need-to-know/need.module.css";
import faqstyles from "@/components/residentialSolutions/faq/faq.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Faqs() {
  return (
    <>
   
      <section className={`${needstyles.needwrper} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
           <AnimatedText text="FAQs"/> 
          </h2>
          <div className={needstyles.needaccordian}>
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="What is the use of aluminium honeycomb panel?"
                className={needstyles.boxaccor}
              >
                <div className={needstyles.accordiancont}>
                  <p>
                    Aluminium honeycomb panels are commonly used in construction, aerospace, and transportation industries for lightweight and rigid structural applications.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="How strong are aluminium honeycomb panels?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                    Aluminium honeycomb panels are known for their high strength-to-weight ratio, providing excellent strength and structural stability.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Is aluminium honeycomb panel a good insulator?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                   Although the material used to produce the honeycomb panel itself, aluminium, does not possess inherent heat insulation and sound insulation properties due to its conductivity, the unique structure of the honeycomb panel allows it to exhibit good heat insulation and sound insulation performance.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="What is honeycomb board made of?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                   Honeycomb boards are typically made of a lightweight core material sandwiched between two facing panels, such as aluminium, zinc, copper, or fiberglass.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="What is the core material of aluminium honeycomb panel?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  The core material of aluminium honeycomb panels is typically made of aluminium honeycomb, which consists of hexagonal cells formed by thin aluminium sheets.
                  </p>
                </div>
              </AccordionItem>
             
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
