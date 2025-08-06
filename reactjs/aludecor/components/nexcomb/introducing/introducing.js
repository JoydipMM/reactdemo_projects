import AnimatedText from "@/components/Framemotion/framemotion";
import introductyles from "@/components/zincSolidPanels/introducing/introducing.module.css";
import Image from "next/image";
export default function Introducing({ informationData }) {
  const allInfoData = informationData?.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={`${introductyles.introwrp}`}>
            <div className={`${introductyles.leftintro} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="brand" />
              </div>
              <Image
                fill={true}
                src={allInfoData?.image?.url}
                alt="allInfoData"
              />
            </div>

            <div className={introductyles.ritintro}>
              <h2>
                <AnimatedText text={allInfoData?.heading} />
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: allInfoData?.right_description
                }}
              ></div>
            </div>
          </div>
          <div className={introductyles.textwrp}>
            <div
              dangerouslySetInnerHTML={{
                __html: allInfoData?.bottom_description
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
