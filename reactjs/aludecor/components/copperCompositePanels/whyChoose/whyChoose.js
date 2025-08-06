import AnimatedText from "@/components/Framemotion/framemotion";
import whychstyles from "@/components/copperCompositePanels/whyChoose/whyChoose.module.css";
import Image from "next/image";

export default function WhyChoose({ whyChooseData }) {
  const allChooseData = whyChooseData?.data?.content;
  const allFeaturesData = allChooseData?.features;
  return (
    <>
      <section className={`commonpadding ${whychstyles.choosemwrp}`}>
        <div className="container">
          <h2 className={`centertie`} style={{ maxWidth: "1199px" }}>
            <AnimatedText text={allChooseData?.heading} />
            <span>{allChooseData?.content}</span>
          </h2>
          <div className={whychstyles.amplyfywrp}>
            {allFeaturesData &&
              allFeaturesData.map((allFeatureData, index) => {
                return (
                  <div
                    className={whychstyles.amplyfywrpbox}
                    key={`allFeatureDataID-${index}`}
                  >
                    <Image
                      width={57}
                      height={57}
                      src={allFeatureData?.image?.image_url}
                      alt="Naturally Antimicrobial"
                    />
                    <h3>{allFeatureData?.title}</h3>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
