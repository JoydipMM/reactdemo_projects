import Image from "next/image";
import featuresstyles from "@/components/metalDetailsPage/features/features.module.css";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Visualize({ strugglingData }) {
  const allStglData = strugglingData?.data?.content;
  const StglKeyDatas = allStglData?.key_problems;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={featuresstyles.featurewrp}>
            <div className={`${featuresstyles.featureleft} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="brand" />
              </div>
              <Image
                src={allStglData?.image?.url}
                alt="Struggling to Visualize"
                fill={true}
              />
            </div>
            <div className={featuresstyles.featureright}>
              <h2>
                <AnimatedText text={allStglData?.heading} />
              </h2>
              <p>{allStglData?.description}</p>
              <h3>
                <AnimatedText text="Key Problems" />
              </h3>
              <div className={featuresstyles.featureicone}>
                {StglKeyDatas &&
                  StglKeyDatas.map((StglKeyData, index) => {
                    return (
                      <div
                        className={featuresstyles.feat_iconbox}
                        key={`StglKeyDataID-${index}`}
                      >
                        <div className={featuresstyles.feat_iconimgbox}>
                          <Image
                            src={StglKeyData?.icon?.url}
                            alt="Difficulty in Imagining"
                            fill={true}
                          />
                        </div>
                        <p>{StglKeyData?.heading}</p>
                      </div>
                    );
                  })}
              </div>

              <h3>
                <AnimatedText text="Solution" />
              </h3>
              <p>{allStglData?.solution_desc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
