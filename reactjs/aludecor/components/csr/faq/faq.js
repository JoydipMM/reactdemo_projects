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
            <AnimatedText text="FAQs" />
          </h2>
          <div className={needstyles.needaccordian}>
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="1. What is Aludecor Cares, and why was it started?"
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
                title="2. How does Aludecor contribute to sustainability?"
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
                title="3. What kind of fire safety initiatives does Aludecor support?"
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
                title="4. How can I participate or collaborate with Aludecor Cares?"
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
                title="5. Where can I see Aludecor Cares’ latest activities?"
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
                key="6"
                aria-label="Accordion 6"
                title="6. Does Aludecor use recyclable materials?"
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
