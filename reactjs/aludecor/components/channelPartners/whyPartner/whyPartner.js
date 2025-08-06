import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import whatMakesstyle from "@/components/fabricatorLanding/whatMakes/whatMakes.module.css";
import whypartnerstyles from "@/components/channelPartners/whyPartner/whyPartner.module.css";

export default function WhyPartner({ featuresData }) {
  const allData = featuresData?.data?.content;
  const allPillarDatas = allData?.features;
  return (
    <section>
      <div className="container">
        <div className={`topadding_top ${whypartnerstyles.whypartnerwrp}`}>
          <h2 className="centertie">
            <span>{allData?.preheading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>
          <div className={`${whatMakesstyle.sswraper} sswraper`}>
            <div className={`${whatMakesstyle.sstextpart} sstextpart`}>
              <div
                dangerouslySetInnerHTML={{ __html: allData?.description }}
              ></div>
              <h3>Key Features</h3>
              <div className={`${whatMakesstyle.choice}`}>
                <ul>
                  {allPillarDatas &&
                    allPillarDatas.map((allPillarData, index) => {
                      return (
                        <li key={`allfeaturesID-${index}`}>
                          <div className={`${whatMakesstyle.choicetxt}`}>
                            <h4>{allPillarData?.title}</h4>
                            <p>{allPillarData?.description}.</p>
                          </div>
                          <Image
                            width={50}
                            height={50}
                            src={allPillarData?.icon?.url}
                            alt="img"
                          />
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <div
              className={`${whatMakesstyle.ssimagepart} ssimagepart hoverarea`}
            >
              <div className="brands">
                <Image alt="brand" fill={true} src="/images/brand-star.svg" />
              </div>
              <Image
                width={841}
                height={925}
                src={allData?.image?.url}
                alt="Why partner"
                className="ssimage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
