import AnimatedText from "@/components/Framemotion/framemotion";
import introductyles from "@/components/zincSolidPanels/introducing/introducing.module.css";
import Image from "next/image";
export default function Concluding({ concludingData }) {
  const allConcludingData = concludingData?.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allConcludingData?.heading} />
          </h2>

          <div
            className={introductyles.textwrp}
            dangerouslySetInnerHTML={{ __html: allConcludingData?.description }}
          ></div>
        </div>
      </section>
    </>
  );
}
