import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import variaationstyles from "@/components/solidAluminiumSheet/variation/variation.module.css";
import advantagesstyles from "@/components/acpLouvers/advantages/advantages.module.css";

export default function Advantages({ advantagesData }) {
  const allAdvantageData = advantagesData?.data?.content;
  const advantages = allAdvantageData?.advantages;
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
          <div
            className={`${variaationstyles.whydecor_wrp} ${advantagesstyles.advantage_container}`}
          >
            <div
              ref={mainSectionRef}
              className={`${variaationstyles.whydecorleft} sticky-section`}
            >
              <h2>
                <AnimatedText text={allAdvantageData?.heading} />
              </h2>

              <p>{allAdvantageData?.description}</p>
            </div>
            <div className={variaationstyles.whydecorrit}>
              <div className="sections-container">
                {advantages &&
                  advantages.map((advantage, index) => {
                    count++;
                    return (
                      <div
                        className={`section section${count}`}
                        key={`advantages-${count}`}
                      >
                        <div className={variaationstyles.prodmwrper}>
                          <div
                            className={`${variaationstyles.prodimcont} ${advantagesstyles.prodimcont}`}
                          >
                            <div className={variaationstyles.brandin}>
                              <Image
                                src="/images/brandin_pic.svg"
                                alt="brandin_pic"
                                fill={true}
                              />
                            </div>
                            <Image
                              src={advantage?.image?.image_url}
                              alt="advantages"
                              fill={true}
                            />
                          </div>
                          <p className="product-title">
                            {advantage?.pre_heading}
                          </p>
                          <h4>{`● ${advantage?.heading}`}</h4>

                          <p>{advantage?.description}</p>
                        </div>
                      </div>
                    );
                  })}

                {/* <div className="section section5">
                  <div className={variaationstyles.prodmwrper}>
                    <div className={`${variaationstyles.prodimcont} ${advantagesstyles.prodimcont}`}>
                      <div className={variaationstyles.brandin}>
                        <Image
                          src="/images/brandin_pic.svg"
                          alt=""
                          fill={true}
                        />
                      </div>
                      <Image src="/images/product/acp-louvers/acp-sheet.png" alt="" fill={true} />
                    </div>
                    <p className="product-title">Aludecor ACP Louvers</p>
                    <h4>● Aesthetically Pleasing Designs:</h4>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor ac orci congue congue.
                    </p>
                  </div>
                </div> */}

                {/* <div className="section section6">
                  <div className={variaationstyles.prodmwrper}>
                    <div className={`${variaationstyles.prodimcont} ${advantagesstyles.prodimcont}`}>
                      <div className={variaationstyles.brandin}>
                        <Image
                          src="/images/brandin_pic.svg"
                          alt=""
                          fill={true}
                        />
                      </div>
                      <Image src="/images/product/acp-louvers/acp-sheet.png" alt="" fill={true} />
                    </div>
                    <p className="product-title">Aludecor ACP Louvers</p>
                    <h4>● Improved Energy Efficiency:</h4>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor ac orci congue congue.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
