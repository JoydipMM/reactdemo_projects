import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import precationstyles from "@/components/fabricationGuide/Precaution/precaution.module.css";

export default function Pointstokeep({ pointsData }) {
  const allPointDatas = pointsData?.data?.content;
  const pointItems = allPointDatas?.items;
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
                <AnimatedText text={allPointDatas?.heading} />
              </h2>

              <p>{allPointDatas?.description}</p>
            </div>
            <div className={precationstyles.whydecorrit}>
              <div className="sections-container">
                {pointItems &&
                  pointItems.map((pointItem) => {
                    count++;
                    return (
                      <div className={`section section${count}`}>
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
                              src={pointItem?.image?.image_url}
                              alt="image_url"
                              fill={true}
                            />
                          </div>
                          <h4>{pointItem?.description}</h4>
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
