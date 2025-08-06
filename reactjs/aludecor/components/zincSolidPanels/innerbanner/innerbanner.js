import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import bannersldstyles from "../innerbanner/innerbanner.module.css";

export default function InnerBannerZinc({ bannerData }) {
  const allBannerData = bannerData?.data?.content;
  console.log("allBannerData", allBannerData);
  const bannerStyle = {
    maxWidth: "100%"
  };
  return (
    <>
      <div className="container">
        <div className="innerbanner hoverarea">
          <Image
            fill={true}
            src={allBannerData?.image?.url}
            alt="Zinc Solid Banner"
          />
          <div className="cpation-banner">
            <h2>
              <AnimatedText text={allBannerData?.heading} />
            </h2>
            <p>{allBannerData?.subheading}</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="star" />
          </div>
        </div>
      </div>
    </>
  );
}
