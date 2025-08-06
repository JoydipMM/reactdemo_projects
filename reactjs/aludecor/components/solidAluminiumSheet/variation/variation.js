import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import variaationstyles from "../variation/variation.module.css";

export default function Variation({ acceptanceData }) {
  const containerRef = useRef(null);
  const mainSectionRef = useRef(null);
  const acceptanceDataContent = acceptanceData?.data?.content;
  const acceptanceItems = acceptanceDataContent?.items;
  const featureAccordians = acceptanceDataContent?.variation;
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
  return (
    <>
      <section ref={containerRef} className="main-container">
        <div className="container">
          <div className={variaationstyles.whydecor_wrp}>
            <div
              ref={mainSectionRef}
              className={`${variaationstyles.whydecorleft} sticky-section`}
            >
              <h2>
                <AnimatedText text={acceptanceDataContent?.heading} />
              </h2>

              <p>{acceptanceDataContent?.content}</p>
              <div className={`commontable-wrapper ${variaationstyles.tablevariant}`}>
                <table className="commontable">
                  <tbody>
                    {acceptanceItems &&
                      acceptanceItems.map((acceptanceItem, index) => {
                        return (
                          <tr key={`acceptanceItem-${index}`}>
                            <td>
                              <strong>{acceptanceItem?.label}</strong>
                            </td>
                            <td>{acceptanceItem?.value}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              <div></div>
            </div>
            <div className={variaationstyles.whydecorrit}>
              <div className="sections-container">
                {featureAccordians.map((featureAccordian) => {
                  count++;
                  return (
                    <div
                      className={`section section${count}`}
                      key={`section_key_${count}`}
                    >
                      <div className={variaationstyles.prodmwrper}>
                        <div className={variaationstyles.prodimcont}>
                          <div className={variaationstyles.brandin}>
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
