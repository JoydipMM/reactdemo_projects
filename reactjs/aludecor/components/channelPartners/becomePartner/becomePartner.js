"use client";

import { useEffect, useRef } from "react";
import whyaludecorstyles from "@/components/Home/whyAludecor/whyAludecor.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function BecomePartner({ stepsData }) {
  const allData = stepsData?.data?.content;
  const allPillarDatas = allData?.steps;
  const containerRef = useRef(null);
  const mainSectionRef = useRef(null);
  let count = 0;
  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.default;

      gsap.registerPlugin(ScrollTrigger);

      console.log("✅ GSAP & ScrollTrigger Loaded");

      let sections = gsap.utils.toArray(".section");
      let mm = gsap.matchMedia();
      // Sticky main section
      mm.add("(min-width: 992px)", () => {
        ScrollTrigger.create({
          trigger: ".sticky-section",
          start: "top bottom"
          // end: "top -110%",
          // pin: true,
          // pinSpacing: false,
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

  return (
    <>
      <section ref={containerRef} className="main-container">
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text="How to Become an Aludecor Channel Partner?" />
          </h2>

          <div
            className={whyaludecorstyles.whydecor_wrp}
            style={{ alignItems: "center" }}
          >
            <div
              ref={mainSectionRef}
              className={`${whyaludecorstyles.whydecorleft} sticky-section`}
            >
              <h2 style={{ maxWidth: "624px" }}>{allData?.heading}</h2>
              <p>{allData?.subheading}</p>
              <div></div>
            </div>
            <div className={whyaludecorstyles.whydecorrit}>
              <div className="sections-container">
                {allPillarDatas.map((allPillarData) => {
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
                              alt=""
                              fill={true}
                            />{" "}
                          </div>
                          <Image
                            src={allPillarData?.image?.url}
                            alt=""
                            fill={true}
                          />
                        </div>
                        <h4>{allPillarData?.title}</h4>
                        <p>{allPillarData?.description}</p>
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
