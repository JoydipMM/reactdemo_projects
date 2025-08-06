// import Image from "next/image";
// import buildingRequirementsstyles from "@/components/residentialSolutions/buildingRequirements/buildingRequirements.module.css";
// import AnimatedText from "@/components/Framemotion/framemotion";

// export default function Buildingrequirements({ complianceData, featureData }) {
//   const allComplianceData = complianceData?.data?.content;
//   const slidesImages = allComplianceData?.features;
//   const allFeatureData = featureData?.data?.content?.items;
//   return (
//     <>
//       <div className="container">
//          <div className="sswraper">
//           <div className="sstextpart">
//             <h2>
//               <AnimatedText text={allComplianceData?.pre_heading} />
//             </h2>
//             <p>{allComplianceData?.heading}</p>
//           </div>
//           <div className={`${buildingRequirementsstyles.buildrgt} ssimagepart`}>
//             <div
//               className={`${buildingRequirementsstyles.animate_frame} hoverarea`}
//             >
//               <div className="brands">
//                 <Image fill={true} src="/images/brand-star.svg" alt="" />
//               </div>
//               <Image
//                 src={allComplianceData?.image?.url}
//                 alt="Animated"
//                 fill={true}
//                 className="ssimage"
//               />
//             </div>
//             <ul>
//               {slidesImages &&
//                 slidesImages.map((slidesImage, index) => {
//                   return (
//                     <li key={`slide-image-${index}`}>
//                       {" "}
//                       <Image
//                         src={slidesImage?.image?.image_url}
//                         alt=""
//                         width={36}
//                         height={36}
//                       />{" "}
//                       {slidesImage?.title}
//                     </li>
//                   );
//                 })}
//             </ul>
//           </div>
//         </div>

//          {allFeatureData &&
//           allFeatureData.map((featureData, index) => {
//             return (
//               <div
//                 className={`sswraper ${index % 2 == 1 ? "flipimg" : ""}`}
//                 key={`allFeatureData-${index}`}
//               >
//                 <div className="sstextpart">
//                   <h2>
//                     <AnimatedText text={featureData?.title} />
//                   </h2>
//                   <ul
//                     className={`${buildingRequirementsstyles.listingarea}`}
//                     dangerouslySetInnerHTML={{
//                       __html: featureData?.description
//                     }}
//                   ></ul>
//                 </div>
//                 <div className="ssimagepart">
//                   <div className="animate_frame hoverarea">
//                     <div className="brands">
//                       <Image
//                         fill={true}
//                         src="/images/brand-star.svg"
//                         alt="brand-star"
//                       />
//                     </div>
//                     <Image
//                       src={featureData?.image?.image_url}
//                       alt="Animated"
//                       fill={true}
//                       className="ssimage"
//                     />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// }

import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import variaationstyles from "@/components/solidAluminiumSheet/variation/variation.module.css";
import buildingRequirementsstyles from "@/components/residentialSolutions/buildingRequirements/buildingRequirements.module.css";

export default function Buildingrequirements({ complianceData, featureData }) {
  const allComplianceData = complianceData?.data?.content;
  const slidesImages = allComplianceData?.features;
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
      <section ref={containerRef} className="">
        <div className="container">
          <div className={`${variaationstyles.whydecor_wrp} `}>
            <div
              ref={mainSectionRef}
              className={`${variaationstyles.whydecorleft} sticky-section`}
            >
              <h2>
                <AnimatedText text={allComplianceData?.pre_heading} />
              </h2>

              <p>{allComplianceData?.heading}</p>
            </div>
            <div className={variaationstyles.whydecorrit}>
              <div className="sections-container">
                {slidesImages.map((slidesImages) => {
                  count++;
                  return (
                    <div
                      className={`section section${count}`}
                      key={`section_key_${count}`}
                    >
                      <div
                        className={`${variaationstyles.prodmwrper} ${buildingRequirementsstyles.prodmwrper}`}
                      >
                        <div
                          className={`${variaationstyles.prodimcont} ${buildingRequirementsstyles.prodimcont}`}
                        >
                          <div className={variaationstyles.brandin}>
                            <Image
                              src="/images/brandin_pic.svg"
                              alt=""
                              fill={true}
                            />
                          </div>
                          <Image
                            src={slidesImages?.image?.url}
                            alt="slidesImages"
                            fill={true}
                          />
                        </div>
                        <h4>
                          <Image
                            width={36}
                            height={36}
                            src={slidesImages?.icon?.url}
                            alt="icon"
                          />
                          {slidesImages?.title}
                        </h4>

                        <p>{slidesImages?.description}</p>
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
