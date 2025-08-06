import Image from "next/image";
import cmistakestyles from "../commonMistake/comminmistake.module.css";
import { useEffect, useRef } from "react";

export default function CommonMistake({ mistakeData }) {
  const allPrecationContent = mistakeData?.data?.content;
  const featureContents = allPrecationContent?.process;
  let count = 0;
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
          // scrub: true,
        });
      });
    };

    loadGSAP();
    const allPrecationContent = mistakeData?.data?.content;
    const featureContents = allPrecationContent?.process;
    let count = 0;

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
        className={`main-container ${cmistakestyles.cmnmis_wrp}`}
      >
        <div className="container">
          <div className={cmistakestyles.whydecor_wrp}>
            <div
              ref={mainSectionRef}
              className={`${cmistakestyles.whydecorleft} sticky-section`}
            >
              <h2>{allPrecationContent?.title}</h2>

              <p>{allPrecationContent?.description}</p>

              <div></div>
            </div>
            <div className={cmistakestyles.whydecorrit}>
              <div className="sections-container">
                {featureContents.map((featureAccordian) => {
                  count++;
                  return (
                    <div
                      className={`section section${count}`}
                      key={`section_key_${count}`}
                    >
                      <div className={cmistakestyles.prodmwrper}>
                        <div className={cmistakestyles.prodimcont}>
                          <div className={cmistakestyles.brandin}>
                            <Image
                              src="/images/brandin_pic.svg"
                              alt="brandin_pic"
                              fill={true}
                            />
                          </div>
                          <Image
                            src={featureAccordian?.image?.image_url}
                            alt={featureAccordian?.image?.image_alt || "Image"}
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
