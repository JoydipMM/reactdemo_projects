import Image from "next/image";
import asheetsstyles from "../acpSheets/acpSheets.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function AcpSheets({ introductionData }) {
  const allIntoductionData = introductionData.data?.content;
  const featuresItems = allIntoductionData?.features;
  return (
    <>
      <section>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allIntoductionData?.preheading}</span>
            <AnimatedText text={allIntoductionData?.subheading} />
          </h2>

          <div className={asheetsstyles.sheetwrp}>
            {featuresItems &&
              featuresItems.map((featuresItem, index) => {
                return (
                  <div
                    className={asheetsstyles.sheetbox}
                    key={`feactureID-${index}`}
                  >
                    <div className={asheetsstyles.sheetimcont}>
                      <Image
                        fill={true}
                        src={featuresItem?.image?.image_url}
                        alt="featuresItemImage"
                      />
                    </div>
                    <h3>
                      <AnimatedText text={featuresItem?.heading} />
                    </h3>
                    <p>{featuresItem?.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
