import AnimatedText from "@/components/Framemotion/framemotion";
import introductyles from "@/components/zincSolidPanels/introducing/introducing.module.css";
import Image from "next/image";
export default function Nexcore({ nexcoreData }) {
  const allNextCoreData = nexcoreData?.data?.content;
  return (
    <>
      <section>
        <div className="container">
          <div className={`${introductyles.introwrp}`}>
            <div className={`${introductyles.leftintro} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="" />
              </div>
              <Image
                fill={true}
                src={allNextCoreData?.image?.url}
                alt="Honeycomb-core"
              />
            </div>

            <div className={introductyles.ritintro}>
              <h2>
                <AnimatedText text={allNextCoreData?.heading} />
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: allNextCoreData?.description
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
