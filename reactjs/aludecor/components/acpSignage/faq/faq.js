import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";
import needstyles from "@/components/Bim/need-to-know/need.module.css";



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
                title="1. What is ACP in signage?"
                className={needstyles.boxaccor}
              >
                <div className={needstyles.accordiancont}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially{" "}
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="2. What is the ideal thickness of an acp sign board?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially{" "}
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="3. Are ACP boards fire-retardant?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially{" "}
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="4. Can ACP signage be printed directly?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially{" "}
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="5. What is the cost of an ACP LED sign board?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially{" "}
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="6. What are the types of signage compatible with ACP boards?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially{" "}
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