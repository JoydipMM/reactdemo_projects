"use client";

import { useEffect, useRef } from "react";
import whyaludecorstyles from "@/components/Home/whyAludecor/whyAludecor.module.css";
import Image from "next/image";
import Registrationguidevideo from "../registrationGuidevideo/registrationGuidevideo";

export default function Getstarted({ stepsData }) {
  const allData = stepsData?.data?.content;
  const allStepsDatas = allData?.steps;
  const containerRef = useRef(null);
  const mainSectionRef = useRef(null);
  let count = 1;

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
          <div
            className={whyaludecorstyles.whydecor_wrp}
            style={{ alignItems: "center" }}
          >
            <div
              ref={mainSectionRef}
              className={`${whyaludecorstyles.whydecorleft} sticky-section`}
            >
              <h2>{allData?.heading}</h2>
              <p>{allData?.subheading}</p>
              <div></div>
            </div>
            <div className={whyaludecorstyles.whydecorrit}>
              <div className="sections-container">
                {allStepsDatas.map((allStepsData) => {
                  count++;
                  return (
                    <div className={`section section${count}`}>
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
                            src={allStepsData?.image?.url}
                            alt="featureAccordian"
                            fill={true}
                          />
                        </div>
                        <h4>{allStepsData?.title}</h4>
                        <ul style={{ marginLeft: "15px" }}>
                          <li>{allStepsData?.description}</li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Registrationguidevideo videoUrl={allData?.video_link} />
    </>
  );
}
