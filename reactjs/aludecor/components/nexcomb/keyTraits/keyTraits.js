import AnimatedText from "@/components/Framemotion/framemotion";
import whychstyles from "@/components/copperCompositePanels/whyChoose/whyChoose.module.css";
import Image from "next/image";

export default function KeyTraits({ keyTraitsData }) {
  const allKeyData = keyTraitsData?.data?.content;
  const keyDatas = allKeyData?.key_traits;
  return (
    <>
      <section className={`commonpadding ${whychstyles.choosemwrp}`}>
        <div className="container">
          <h2 className={`centertie`}>
            <AnimatedText text={allKeyData?.heading} />
          </h2>
          <div className={whychstyles.amplyfywrp}>
            {keyDatas?.map((keyData, index) => (
              <div
                className={whychstyles.amplyfywrpbox}
                key={`keyDatasID-${index}`}
              >
                <Image
                  width={57}
                  height={57}
                  src={keyData?.icon?.url}
                  alt="Crafted"
                />
                <p>{keyData?.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
