import AnimatedText from "@/components/Framemotion/framemotion";
import ourimpactstyle from "../ourImpact/ourimpact.module.css";
export default function OurImpact({ impactData }) {
  const allData = impactData?.data?.content;
  const allImpactDatas = allData?.highlights;
  return (
    <>
      <section className={`${ourimpactstyle.impact_content} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allData?.heading} />
          </h2>

          <div className="impact-row">
            {allImpactDatas &&
              allImpactDatas.map((allImpactData, index) => {
                return (
                  <div className="impact-box" key={`allImpactDataID-${index}`}>
                    <div className="item-title">{allImpactData?.title}</div>
                    <div className="count-number">{allImpactData?.count}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
