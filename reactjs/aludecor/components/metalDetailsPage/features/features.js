import Image from "next/image";
import featuresstyles from "../features/features.module.css";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Features({ productFeaturesData }) {
  // console.log("productFeaturesData", productFeaturesData);
  const allProductSeries = productFeaturesData?.data?.content;
  const allFeatures = allProductSeries?.features;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={featuresstyles.featurewrp}>
            <div className={featuresstyles.featureleft}>
              <Image
                src={allProductSeries?.image?.url}
                alt="Metal Details"
                fill={true}
              />
            </div>
            <div className={featuresstyles.featureright}>
              <h2>
                <AnimatedText text={allProductSeries?.title} />
              </h2>
              <p>{allProductSeries?.description}</p>
              <h3>
                <AnimatedText text={allProductSeries?.feature_title} />
              </h3>
              <div className={featuresstyles.featureicone}>
                {allFeatures &&
                  allFeatures.map((allFeature, index) => {
                    return (
                      <div
                        className={featuresstyles.feat_iconbox}
                        key={`feature-${index}`}
                      >
                        <div className={featuresstyles.feat_iconimgbox}>
                          <Image
                            src={allFeature?.image?.image_url}
                            alt="featureImage"
                            fill={true}
                          />
                        </div>
                        <p>{allFeature?.title}</p>
                      </div>
                    );
                  })}
              </div>
              <div className={featuresstyles.linkbox}>
                <Link href="#" className="common-btn">
                  <label>
                    Request a quote
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt=""
                    />
                  </label>
                </Link>

                <Link href="#" className="common-btn">
                  <label>
                    Download E-catalogue
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt=""
                    />
                  </label>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
