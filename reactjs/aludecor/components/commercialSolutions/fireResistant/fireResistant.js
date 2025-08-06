"use client";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function Fireresistant({ featuresData }) {
  const allData = featuresData?.data?.content;
  const showFeatureDatas = allData?.items;
  return (
    <>
      <section className="container">
        <>
          {showFeatureDatas.map((showFeatureData, index) => (
            <div
              key={`showFeatureDataId-${index}`}
              className="topadding_bottom"
            >
              <div className="sswraper">
                {/* Alternate the order of image and text parts based on index */}
                {index % 2 === 0 ? (
                  <>
                    <div className="ssimagepart hoverarea">
                      <Image
                        fill={true}
                        src={showFeatureData?.image?.image_url}
                        alt="image"
                        className="ssimage"
                      />
                      <div className="brands">
                        <Image
                          fill={true}
                          src="/images/brand-star.svg"
                          alt="brand-star"
                        />
                      </div>
                    </div>
                    <div className="sstextpart">
                      <h2>
                        <AnimatedText text={showFeatureData?.title} />
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: showFeatureData?.description
                        }}
                      ></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="sstextpart">
                      <h2>
                        <AnimatedText text={showFeatureData.title} />
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: showFeatureData?.description
                        }}
                      ></div>
                    </div>
                    <div className="ssimagepart hoverarea">
                      <Image
                        fill={true}
                        src={showFeatureData?.image?.image_url}
                        alt="image"
                        className="ssimage"
                      />
                      <div className="brands">
                        <Image
                          fill={true}
                          src="/images/brand-star.svg"
                          alt="brand-star"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      </section>
    </>
  );
}
