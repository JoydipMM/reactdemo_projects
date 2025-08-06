import AnimatedText from "@/components/Framemotion/framemotion";
import choosesignstyles from "@/components/acpSignage/whyChoose/whyChoose.module.css";
import Image from "next/image";
export default function WhyChoose({ whyData }) {
  const allWhyData = whyData.data?.content;
  const whyFeatures = allWhyData?.features;
  return (
    <>
      <section className={`${choosesignstyles.adv_zinc_mwrper} commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allWhyData?.heading} />
          </h2>
          <div className={choosesignstyles.adv_iconwrpmain}>
            {whyFeatures?.map((whyFeature, index) => (
              <div
                className={choosesignstyles.adv_iconwrp}
                key={`whyFeatureID-${index}`}
              >
                <Image
                  width={52}
                  height={52}
                  src={whyFeature?.image?.image_url}
                  alt="Aesthetic Versatility"
                />
                <h3>{whyFeature?.title}</h3>
                <p className={choosesignstyles.txtsubtitle}>
                  {whyFeature?.sub_title}
                </p>
                <p>{whyFeature?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
