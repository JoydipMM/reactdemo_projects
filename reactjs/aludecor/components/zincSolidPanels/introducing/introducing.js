import AnimatedText from "@/components/Framemotion/framemotion";
import introductyles from "@/components/zincSolidPanels/introducing/introducing.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Introducing({ introducingData }) {
  const allIntroducingData = introducingData?.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={`${introductyles.introwrp}`}>
            <div className={`${introductyles.leftintro} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="star" />
              </div>
              <Image
                fill={true}
                src={allIntroducingData?.image?.url}
                alt="sideImage"
              />
            </div>

            <div className={introductyles.ritintro}>
              <h2>
                <AnimatedText text={allIntroducingData?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: allIntroducingData?.description_side
                }}
              ></p>
            </div>
          </div>
          <div className={introductyles.textwrp}>
            <p
              dangerouslySetInnerHTML={{
                __html: allIntroducingData?.description_bottom
              }}
            ></p>
          </div>
        </div>
      </section>
    </>
  );
}
