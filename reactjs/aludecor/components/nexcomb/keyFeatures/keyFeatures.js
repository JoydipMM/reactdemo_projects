import AnimatedText from "@/components/Framemotion/framemotion";
import whychstyles from "@/components/copperCompositePanels/whyChoose/whyChoose.module.css";
import qualitystyles from "@/components/acpSignage/quality/quality.module.css";

export default function KeyFeatures({ keyData }) {
  const allKeyData = keyData?.data?.content;
  return (
    <>
      <section className={`commonpadding ${whychstyles.choosemwrp}`}>
        <div className="container">
          <h2 className={`centertie`}>
            <AnimatedText text={allKeyData?.heading} />
          </h2>
          <h3 style={{ textAlign: "center" }}>{allKeyData?.subheading}</h3>
          <div className={qualitystyles.qualityboxwrp}>
            <div
              className={qualitystyles.qualitybox}
              dangerouslySetInnerHTML={{ __html: allKeyData?.left_description }}
            ></div>

            <div
              className={qualitystyles.qualitybox}
              dangerouslySetInnerHTML={{
                __html: allKeyData?.right_description
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
