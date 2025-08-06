import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import bansldalmstyles from "../innerbanner/innerbanner.module.css";

export default function InnerBannerAluminium({ bimBannerData }) {
  const allBannerData = bimBannerData.data?.content;
  const bannerStyle = {
    maxWidth: "100%"
  };
  return (
    <>
      <div className="container">
        <div
          className={`innerbanner hoverarea ${bansldalmstyles.banersolidalum}`}
        >
          <Image
            fill={true}
            src={allBannerData?.image?.url}
            alt="Solid Aluminium Banner"
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
