import AnimatedText from "@/components/Framemotion/framemotion";
import digitalagestyles from "@/components/acpSignage/digitalAge/digitalAge.module.css";
export default function DigitalAge({ descriptionData }) {
  const allDescData = descriptionData.data?.content;
  return (
    <>
      <section className={`commonpadding`}>
        <div className={`container`}>
          <h2 className="titlecenter">
            <AnimatedText text={allDescData?.title} />
            <span style={{ fontWeight: "400" }}>{allDescData?.sub_title}</span>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: allDescData?.content }}></div>

          <div className={`quotebordercont`}>
            <h3>{allDescData?.quote}</h3>
          </div>
        </div>
      </section>
    </>
  );
}
