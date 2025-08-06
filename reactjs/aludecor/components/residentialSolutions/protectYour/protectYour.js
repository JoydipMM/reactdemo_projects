"use client";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function Protectyour({ featureData }) {
  const allData = featureData?.data?.content;
  const allPillarDatas = allData?.items[0];
  console.log("allPillarDatas", allPillarDatas);
  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <div className="sswraper">
            <div className="ssimagepart hoverarea">
              <Image
                fill={true}
                src={allPillarDatas?.image?.image_url}
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
                <AnimatedText text={allPillarDatas?.title} />
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: allPillarDatas?.description
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
