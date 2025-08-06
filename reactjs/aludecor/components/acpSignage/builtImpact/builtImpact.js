import AnimatedText from "@/components/Framemotion/framemotion";
import builtstyles from "@/components/acpSignage/builtImpact/builtImpact.module.css";

export default function BuiltImpact({ signexData }) {
  const allSignexData = signexData.data?.content;
  const signexDatas = allSignexData?.content;
  return (
    <>
      <section>
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allSignexData?.heading} />
            <span>{allSignexData?.sub_heading}</span>
          </h2>
          <div className={builtstyles.builtwrp}>
            {signexDatas?.map((signexData, index) => (
              <div
                className={builtstyles.builtbox}
                key={`signexDataID-${index}`}
                dangerouslySetInnerHTML={{ __html: signexData?.content }}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
