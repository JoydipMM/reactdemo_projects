import AnimatedText from "@/components/Framemotion/framemotion";
import qualitystyles from "@/components/acpSignage/quality/quality.module.css";
export default function Quality({ qualityData }) {
  const allQualityData = qualityData?.data?.content;
  const qItems = allQualityData?.qualities;
  return (
    <>
      <section className={`topadding_top`}>
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allQualityData?.heading} />
          </h2>
          <div className={qualitystyles.qualityboxwrp}>
            {qItems &&
              qItems.map((qItem, index) => {
                return (
                  <div
                    className={qualitystyles.qualitybox}
                    key={`qItemsID-${index}`}
                    dangerouslySetInnerHTML={{ __html: qItem?.content }}
                  ></div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
