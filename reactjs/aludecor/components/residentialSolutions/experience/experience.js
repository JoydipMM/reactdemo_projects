import Image from "next/image";
import Link from "next/link";
import buildingRequirementsstyles from "@/components/residentialSolutions/buildingRequirements/buildingRequirements.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Experience({ featureData }) {
  const allData = featureData?.data?.content;
  const allPillarDatas = allData?.items[1];
  return (
    <>
      <div className="container">
        <div className="topadding_bottom">
          <div className="sswraper">
            <div className="sstextpart">
              <h2>
                <AnimatedText text={allPillarDatas?.title} />
              </h2>
              <div
                className={`${buildingRequirementsstyles.listingarea}`}
                dangerouslySetInnerHTML={{
                  __html: allPillarDatas?.description
                }}
              ></div>
            </div>
            <div className="ssimagepart">
              <div className="animate_frame hoverarea">
                <div className="brands">
                  <Image fill={true} src="/images/brand-star.svg" alt="star" />
                </div>
                <Image
                  src={allPillarDatas?.image?.image_url}
                  alt="Animated"
                  fill={true}
                  className="ssimage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
