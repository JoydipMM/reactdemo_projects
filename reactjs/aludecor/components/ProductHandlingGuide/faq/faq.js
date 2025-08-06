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
                title="1. What is BIM and why is it important?"
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
                title="2. What is BIM and why is it important?"
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
                title="3. How do I use these BIM files in my design software?"
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
