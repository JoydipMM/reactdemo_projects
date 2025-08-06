import AnimatedText from "@/components/Framemotion/framemotion";
import introductyles from "../introducing/introducing.module.css";
import Link from "next/link";
import Image from "next/image";
export default function ZincCladding({ exteriorData }) {
  const allExteriorData = exteriorData?.data?.content;

  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div
            className={`${introductyles.introwrp} ${introductyles.introrev}`}
          >
            <div className={`${introductyles.leftintro} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="star" />
              </div>
              <Image
                fill={true}
                src={allExteriorData?.images?.url}
                alt="star"
              />
            </div>

            <div
              className={`${introductyles.ritintro} ${introductyles.zinc_textw}`}
            >
              <h2>
                <AnimatedText text={allExteriorData?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: allExteriorData?.description
                }}
              ></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
