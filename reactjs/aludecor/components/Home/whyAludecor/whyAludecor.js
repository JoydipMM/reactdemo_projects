"use client";

import { useEffect, useRef } from "react";
import whyaludecorstyles from "../whyAludecor/whyAludecor.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function WhyAludecor({ whyData }) {
  const containerRef = useRef(null);
  const mainSectionRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.default;

      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".section");
      let mm = gsap.matchMedia();
      // Sticky main section
      mm.add("(min-width: 992px)", () => {
        ScrollTrigger.create({
          trigger: ".sticky-section",
          start: "top bottom"
          // end: "top -100%", // Adjust end condition
          // pin: true,
          // pinSpacing: false, // Prevents layout shift
          // scrub:true,
        });
      });
    };

    loadGSAP();

    return () => {
      import("gsap/ScrollTrigger").then((module) => {
        const ScrollTrigger = module.default;
        ScrollTrigger.getAll().forEach((st) => st.kill());
      });
    };
  }, []);

  const whyAludecorContent = whyData?.data?.content;
  const featureContents = whyData?.data?.content?.features;
  const featureAccordians = whyData?.data?.content?.accordion;
  let count = 0;
  return (
    <>
      <section ref={containerRef} className="main-container">
        <div className="container">
          <div className={whyaludecorstyles.whydecor_wrp}>
            <div
              ref={mainSectionRef}
              className={`${whyaludecorstyles.whydecorleft} sticky-section`}
            >
              <div className={whyaludecorstyles.shapeimg}>
                <Image
                  src="/images/brandin_picborder.a978a9b5.svg"
                  alt="whydecor_icon"
                  width={573}
                  height={573}
                />
              </div>
              <h2>
                <span>{whyAludecorContent?.preheading}</span>
                <AnimatedText text={whyAludecorContent?.heading} />
              </h2>
              <p className={whyaludecorstyles.transfrm_txt}>
                {whyAludecorContent?.subheading}
              </p>
              <p>{whyAludecorContent?.description}</p>

              <div className={whyaludecorstyles.introboxwrp}>
                {featureContents.map((featureContent, index) => (
                  <div
                    key={`feature_${index}`}
                    className={whyaludecorstyles.introbox_inner}
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <p>{featureContent?.information}</p>
                    <div className={whyaludecorstyles.introbox_iconcont}>
                      <Image
                        src={featureContent.image_url}
                        alt="whydecor_icon1"
                        width={33}
                        height={32}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={whyaludecorstyles.whydecorrit}>
              <div className="sections-container">
                {featureAccordians.map((featureAccordian) => {
                  count++;
                  return (
                    <div
                      className={`section section${count}`}
                      key={`section_key_${count}`}
                    >
                      <div className={whyaludecorstyles.prodmwrper}>
                        <div className={whyaludecorstyles.prodimcont}>
                          <div className={whyaludecorstyles.brandin}>
                            <Image
                              src="/images/brandin_pic.svg"
                              alt="brandin_pic"
                              fill={true}
                            />{" "}
                          </div>
                          <Image
                            src={featureAccordian?.image_url}
                            alt={featureAccordian?.image_alt || "Image"}
                            fill={true}
                          />
                        </div>
                        <h4>{featureAccordian?.heading}</h4>
                        <p>{featureAccordian?.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
