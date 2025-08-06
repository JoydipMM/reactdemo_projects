import AnimatedText from "@/components/Framemotion/framemotion";
import introducingstyles from "@/components/acpLouvers/introducing/introducing.module.css";
import Link from "next/link";
import Image from "next/image";
export default function FireSafety({ safetyData }) {
  const allSafetyData = safetyData.data?.content;

  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={`${introducingstyles.introwrp}`}>
            <div className={`${introducingstyles.leftintro} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="star" />
              </div>
              <Image
                fill={true}
                src={allSafetyData?.image?.url}
                alt="allSafetyData"
              />
            </div>

            <div className={introducingstyles.ritintro}>
              <h2>
                <AnimatedText text={allSafetyData?.heading} />
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: allSafetyData?.description }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
