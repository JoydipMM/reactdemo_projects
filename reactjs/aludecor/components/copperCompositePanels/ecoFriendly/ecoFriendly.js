import AnimatedText from "@/components/Framemotion/framemotion";
import whychstyles from "@/components/copperCompositePanels/whyChoose/whyChoose.module.css";
import Image from "next/image";

export default function EcoFriendly({ ecoFriendlyData }) {
  const allEcoFriendlyData = ecoFriendlyData?.data?.content;
  const friendlyFeatures = allEcoFriendlyData?.features;
  return (
    <>
      <section className={`commonpadding ${whychstyles.choosemwrp}`}>
        <div className="container">
          <h2 className={`centertie`}>
            <AnimatedText text={allEcoFriendlyData?.heading} />
            <span>{allEcoFriendlyData?.content}</span>
          </h2>
          <div className={whychstyles.amplyfywrp}>
            {friendlyFeatures &&
              friendlyFeatures.map((friendlyFeature, index) => {
                return (
                  <div
                    className={whychstyles.amplyfywrpbox}
                    key={`friendlyFeatureID-${index}`}
                  >
                    <Image
                      width={57}
                      height={57}
                      src={friendlyFeature?.image?.image_url}
                      alt="Naturally Antimicrobial"
                    />
                    <h3>
                      {friendlyFeature?.eco_friendly_section_features_title}
                    </h3>
                  </div>
                );
              })}
          </div>

          {/* .............quote section starts............. */}
          <div className={`quotebordercont`}>
            <h3>{allEcoFriendlyData?.quote}</h3>
          </div>
          {/* .............quote section starts............. */}
        </div>
      </section>
    </>
  );
}
