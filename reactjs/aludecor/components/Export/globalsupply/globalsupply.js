import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import precationstyles from "@/components/fabricationGuide/Precaution/precaution.module.css";

export default function Precaution({ supplyData }) {
  let count = 0;
  const allData = supplyData?.data?.content;
  const allSupplyDatas = allData?.items;
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
      <section
        ref={containerRef}
        className={`main-container ${precationstyles.cmnmis_wrp}`}
      >
        <div className="container">
          <div className={precationstyles.whydecor_wrp}>
            <div
              ref={mainSectionRef}
              className={`${precationstyles.whydecorleft} sticky-section`}
            >
              <h2>
                <AnimatedText text={allData?.heading} />
              </h2>

              <p>{allData?.description}</p>

              <div></div>
            </div>
            <div className={precationstyles.whydecorrit}>
              <div className="sections-container">
                {allSupplyDatas &&
                  allSupplyDatas.map((allSupplyData, index) => {
                    count++;
                    return (
                      <div
                        className={`section section${count}`}
                        key={`section_datakey_${count}`}
                      >
                        <div className={precationstyles.prodmwrper}>
                          <div className={precationstyles.prodimcont}>
                            <div className={precationstyles.brandin}>
                              <Image
                                src="/images/brandin_pic.svg"
                                alt=""
                                fill={true}
                              />{" "}
                            </div>
                            <Image
                              src={allSupplyData?.image?.url}
                              alt=""
                              fill={true}
                            />
                          </div>
                          <h4>{allSupplyData?.heading}</h4>
                          <p>{allSupplyData?.description}</p>
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
