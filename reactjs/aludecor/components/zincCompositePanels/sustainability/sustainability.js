import AnimatedText from "@/components/Framemotion/framemotion";
import whychstyles from "@/components/copperCompositePanels/whyChoose/whyChoose.module.css";
import sustainabilitystyles from "@/components/zincCompositePanels/sustainability/sustainability.module.css";
import Image from "next/image";

export default function Sustainability({ sustainabilityData }) {
  const allSustainabilityData = sustainabilityData?.data?.content;
  const sustainabilityFeatures = allSustainabilityData?.sustainability;
  return (
    <>
      <section
        className={`commonpadding ${whychstyles.choosemwrp} ${sustainabilitystyles.choosemwrp}`}
      >
        <div className="container">
          <h2 className={`centertie`}>
            <AnimatedText text={allSustainabilityData?.heading} />
          </h2>
          <div className={whychstyles.amplyfywrp}>
            {sustainabilityFeatures &&
              sustainabilityFeatures.map((sustainabilityFeature, index) => {
                return (
                  <div
                    className={whychstyles.amplyfywrpbox}
                    key={`sustainabilityFeatureId-${index}`}
                  >
                    <Image
                      width={57}
                      height={57}
                      src={sustainabilityFeature?.icon?.url}
                      alt="sustainabilityFeature"
                    />
                    <h3>{sustainabilityFeature?.title}</h3>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
