import AnimatedText from "@/components/Framemotion/framemotion";
import amplifystyles from "@/components/acpSignage/amplify/amplify.module.css";
import Image from "next/image";

export default function Amplify({ samplifyData }) {
  const allSamplifyData = samplifyData.data?.content;
  const amplifyDatas = allSamplifyData?.content;

  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <h2 className={`centertie`} style={{ maxWidth: "1378px" }}>
            <AnimatedText text={allSamplifyData?.heading} />
            <span>{allSamplifyData?.sub_heading}</span>
          </h2>
          <div className={amplifystyles.amplyfywrp}>
            {amplifyDatas?.map((amplifyData, index) => (
              <div
                className={amplifystyles.amplyfywrpbox}
                key={`amplifyDataID-${index}`}
              >
                <Image
                  width={57}
                  height={57}
                  src="/images/key_icon.svg"
                  alt="Enhance Brand Recognition"
                />
                <h4>{amplifyData?.title}</h4>
                <p>{amplifyData?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
