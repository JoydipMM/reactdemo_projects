import Image from "next/image";
import featuresstyles from "@/components/metalDetailsPage/features/features.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function CorePhilosophy({ introductionData }) {
  const allData = introductionData?.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={featuresstyles.featurewrp}>
            <div className={`${featuresstyles.featureleft} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="" />
              </div>
              <Image
                src={allData?.image?.url}
                alt="Design with Living Metal"
                fill={true}
              />
            </div>
            <div className={featuresstyles.featureright}>
              <h2>
                <AnimatedText text={allData?.heading} />
              </h2>
              <div dangerouslySetInnerHTML={{ __html: allData?.content }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
