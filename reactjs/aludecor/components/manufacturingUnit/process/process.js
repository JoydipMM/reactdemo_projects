"use client";

import { useEffect, useRef } from "react";
import whyaludecorstyles from "@/components/Home/whyAludecor/whyAludecor.module.css";
import Image from "next/image";
import processstyles from "../process/process.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Process({ manufacturingData }) {
  const allManufacturingData = manufacturingData?.data?.content;
  const allProcess = allManufacturingData?.process;
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
      let sections = gsap.utils.toArray(".section");
      let mm = gsap.matchMedia();
      // Sticky main section
      mm.add("(min-width: 992px)", () => {
        ScrollTrigger.create({
          trigger: ".sticky-section",
          start: "top bottom"
          // //end: "top -100%", // Adjust end condition
          // pin: true,
          // pinSpacing: false, // Prevents layout shift
          // scrub: true
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
          <div className={whyaludecorstyles.whydecor_wrp}>
            <div
              ref={mainSectionRef}
              className={`${whyaludecorstyles.whydecorleft} ${processstyles.whydecorleft} sticky-section`}
            >
              <div
                className={`${whyaludecorstyles.shapeimg} ${processstyles.shapeimg}`}
              >
                <Image
                  src="/images/brandin_picborder.a978a9b5.svg"
                  alt="whydecor_icon"
                  width={573}
                  height={573}
                />
              </div>
              <h2>
                <AnimatedText text={allManufacturingData?.title} />
              </h2>

              <p>{allManufacturingData?.description}</p>

              <div></div>
            </div>
            <div className={whyaludecorstyles.whydecorrit}>
              <div className="sections-container">
                {allProcess.map((allProcess) => {
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
                            />
                          </div>
                          <Image
                            src={allProcess?.image?.image_url}
                            alt="image"
                            fill={true}
                          />
                        </div>
                        <h4>{allProcess?.heading}</h4>
                        <p>{allProcess?.description}</p>
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
