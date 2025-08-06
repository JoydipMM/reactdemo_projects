import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";
import needstyles from "@/components/Bim/need-to-know/need.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Faq() {
  return (
    <>
    
      <section className={`${needstyles.needwrper} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
           <AnimatedText text="FAQ"/> 
          </h2>
          <div className={needstyles.needaccordian}>
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="1. Does Aludecor export ACP sheets worldwide?"
                className={needstyles.boxaccor}
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="2. Is Aludecor among the top 10 ACP sheet brands in India?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="3. How can I become a distributor of Aludecor ACP sheets in my country?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="4. What types of ACP sheets are available for export?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="5. Can I order customized ACP sheets for my project?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem
                key="6"
                aria-label="Accordion 6"
                title="6. Are Aludecor’s ACP sheets compliant with international standards?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem
                key="7"
                aria-label="Accordion 7"
                title="7. What is the minimum order quantity (MOQ) for international shipments?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem
                key="8"
                aria-label="Accordion 8"
                title="8. How long does it take to process and ship export orders?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem
                key="9"
                aria-label="Accordion 9"
                title="9. Does Aludecor provide logistics and shipping support for export orders?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem
                key="10"
                aria-label="Accordion 10"
                title="10. How can I get a price quote for bulk orders?"
              >
                <div className={needstyles.accordiancont}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
