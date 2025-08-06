import Image from "next/image";
import cmistakestyles from "@/components/cleaningAndMaintenance/commonMistake/comminmistake.module.css"
import { useEffect, useRef } from "react";

export default function CommonMistake() {
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
              start: "top bottom",
              // //end: "top -100%", // Adjust end condition
              // pin: true,
              // pinSpacing: false, // Prevents layout shift
              // scrub: true,
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
         <section ref={containerRef} className={`main-container ${cmistakestyles.cmnmis_wrp}`}>
        <div className="container">
          <div className={cmistakestyles.whydecor_wrp}>
            <div ref={mainSectionRef} className={`${cmistakestyles.whydecorleft} sticky-section`}>
              <h2>Common Mistakes to Avoid</h2>

              <p>Ensuring safety during ACP fabrication is crucial to protect yourself, maintain a hazard-free environment, and deliver high-quality results. Here are the key precautions to follow:</p>
           
              <div>
              </div>

            </div>
            <div className={cmistakestyles.whydecorrit}>
              <div className="sections-container">
                <div className="section section1">
                  <div className={cmistakestyles.prodmwrper}>
                    <div className={cmistakestyles.prodimcont}>
                      <div className={cmistakestyles.brandin}><Image src="/images/brandin_pic.svg" alt="" fill={true} /> </div>
                      <Image src="/images/commonmistake1.png" alt="" fill={true} />
                    </div>
                    <h4>1. Improper Handling</h4>
                    <p>. Always wear gloves, goggles, and masks to ensure safety during fabrication.</p>
                  </div>
                </div>
                <div className="section section2"> 
                <div className={cmistakestyles.prodmwrper}>
                    <div className={cmistakestyles.prodimcont}>
                      <div className={cmistakestyles.brandin}><Image src="/images/brandin_pic.svg" alt="" fill={true} /> </div>
                      <Image src="/images/commonmistake1.png" alt="" fill={true} />
                    </div>
                    <h4>1. Incorrect Tool Usage</h4>
                    <p>. Always wear gloves, goggles, and masks to ensure safety during fabrication.</p>
                  </div>
                </div>
                <div className="section section3">
                <div className={cmistakestyles.prodmwrper}>
                    <div className={cmistakestyles.prodimcont}>
                      <div className={cmistakestyles.brandin}><Image src="/images/brandin_pic.svg" alt="" fill={true} /> </div>
                      <Image src="/images/commonmistake1.png" alt="" fill={true} />
                    </div>
                    <h4>1. Neglecting Ventilation</h4>
                    <p>. Always wear gloves, goggles, and masks to ensure safety during fabrication.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>
      </section>
        </>
    );
}