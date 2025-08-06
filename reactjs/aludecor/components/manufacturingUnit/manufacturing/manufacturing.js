"use client";
import { useEffect, useRef, useState } from "react";
import premiumsolutionsstyles from "@/components/Home/premiumSolutions/premiumSolutions.module.css";
import Image from "next/image";
import Link from "next/link";
import manufacturing from "../manufacturing/manufacturing.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function ExploreManufacturing({ exManufacturingData }) {
  const exManData = exManufacturingData.data?.content;
  const exmanuItems = exManData?.items;

  const frameAnimateRef = useRef(null);
const [hasAnimated, setHasAnimated] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (frameAnimateRef.current) {
    observer.observe(frameAnimateRef.current);
  }

  return () => {
    if (frameAnimateRef.current) {
      observer.unobserve(frameAnimateRef.current);
    }
  };
}, []);

  return (
    <>
      <section
        className={`${premiumsolutionsstyles.premiumwrp} ${manufacturing.premiumwrp} topadding_bottom`}
      >
        <div className="container">
          <h2>
            <span>{exManData?.pre_heading}</span>
            <AnimatedText text={exManData?.heading} />
          </h2>

          <div className={premiumsolutionsstyles.premium_boxwrp}  ref={frameAnimateRef}>
            {exmanuItems?.map((exmanuItem, index) => (
              <div
               
                className={`${premiumsolutionsstyles.premiumboxcont} ${premiumsolutionsstyles.border_l} ${premiumsolutionsstyles.boxgap}`}
                key={`exmanuItemId-${index}`}
              >
                <div className={`${premiumsolutionsstyles.animate_frame} ${
            hasAnimated ? premiumsolutionsstyles.frame_height : ""
          }`}>
                  <div className={premiumsolutionsstyles.brandin}>
                    <Image
                      src="/images/brandin_pic.svg"
                      alt="Brandin Solutions"
                      fill={true}
                    />
                  </div>
                  <Image
                    src={exmanuItem?.image?.image_url}
                    alt="manufacturing"
                    fill={true}
                  />
                </div>
                <div className={premiumsolutionsstyles.premiumbox_textcont}>
                  <div className={premiumsolutionsstyles.boxpremium_left}>
                    <h3>{exmanuItem?.title}</h3>
                    <p>{exmanuItem?.description}</p>
                  </div>
                  <Link
                    href={
                      exmanuItem?.button_link == ""
                        ? "#"
                        : exmanuItem?.button_link
                    }
                    className="common-btn"
                  >
                    {" "}
                    <label>
                      {" "}
                      Join Now{" "}
                      <Image
                        width={34}
                        height={16}
                        src="/images/arrow-right.svg"
                        alt="right"
                      />
                    </label>
                  </Link>
                </div>
              </div>
            ))}
            {/* <div
              ref={frameAnimateRef}
              className={`${premiumsolutionsstyles.premiumboxcont} ${premiumsolutionsstyles.boxgap}`}
            >
              <div
                className={`${premiumsolutionsstyles.animate_frame} ${frameHeight}`}
              >
                <div className={premiumsolutionsstyles.brandin}>
                  <Image
                    src="/images/brandin_pic.svg"
                    alt="Brandin Solutions"
                    fill={true}
                  />
                </div>
                <Image
                  src="/images/manufacturingunit/manufacturing-2.png"
                  alt="manufacturing"
                  fill={true}
                />
              </div>
              <div className={premiumsolutionsstyles.premiumbox_textcont}>
                <div className={premiumsolutionsstyles.boxpremium_left}>
                  <h3>Specifiers</h3>
                  <p>
                    We have a wide selection of colours and design surfaces for
                    you to choose from. Our experienced team is available to
                    assist with all your needs. Rest assured, we can deliver
                    samples straight to your address.
                  </p>
                </div>
                <Link href="#" className="common-btn">
                  {" "}
                  <label>
                    {" "}
                    Join Now{" "}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt=""
                    />
                  </label>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
