import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import AnimatedText from "@/components/Framemotion/framemotion";
import needstyles from "@/components/Bim/need-to-know/need.module.css";
import faqstyles from "@/components/residentialSolutions/faq/faq.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Faq({ commercialCtaData, faqData }) {
  const allCommercialCtaData = commercialCtaData?.data?.content;
  const allFaqData = faqData?.data?.content;
  const faqs = allFaqData?.faq;
  return (
    <>
      <section className={`${faqstyles.bttnwrper} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allCommercialCtaData?.pre_heading} />
          </h2>
          <div className={`${faqstyles.btnarea}`}>
            <Link
              href={
                allCommercialCtaData?.download_button_url == ""
                  ? "#"
                  : allCommercialCtaData?.download_button_url
              }
              className="common-btn"
            >
              <label>
                {allCommercialCtaData?.download_button_text}
                <Image
                  width={34}
                  height={16}
                  src="/images/arrow-right.svg"
                  alt=""
                />{" "}
              </label>
            </Link>
            <Link
              href={
                allCommercialCtaData?.design_button_url == ""
                  ? "#"
                  : allCommercialCtaData?.design_button_url
              }
              className="common-btn"
            >
              <label>
                {allCommercialCtaData?.design_button_text}
                <Image
                  width={34}
                  height={16}
                  src="/images/arrow-right.svg"
                  alt=""
                />{" "}
              </label>
            </Link>
            <Link
              href={
                allCommercialCtaData?.contact_button_url == ""
                  ? "#"
                  : allCommercialCtaData?.contact_button_url
              }
              className="common-btn"
            >
              <label>
                {allCommercialCtaData?.contact_button_text}
                <Image
                  width={34}
                  height={16}
                  src="/images/arrow-right.svg"
                  alt=""
                />{" "}
              </label>
            </Link>
          </div>
        </div>
      </section>
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
