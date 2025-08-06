import AnimatedText from "@/components/Framemotion/framemotion";
import introducingstyles from "@/components/acpLouvers/introducing/introducing.module.css";
import Link from "next/link";
import Image from "next/image";
export default function IntroducingLouvers({ introductionData }) {
  const allIntroductionData = introductionData?.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={`${introducingstyles.introwrp}`}>
            <div className={`${introducingstyles.leftintro} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="brand" />
              </div>
              <Image
                fill={true}
                src={allIntroductionData?.image?.url}
                alt="acplouvers"
              />
            </div>

            <div className={introducingstyles.ritintro}>
              <h2>
                <AnimatedText text={allIntroductionData?.heading} />
              </h2>
              <p>{allIntroductionData?.sub_heading}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
