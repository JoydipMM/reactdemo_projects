import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function Innerbanner({ bannerData }) {
  const allBannerData = bannerData.data?.content;
  const bannertitleStyle = {
    maxWidth: "554px"
  };
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image
            fill={true}
            src={allBannerData?.image?.url}
            alt="filter-banner"
          />
          <div className="cpation-banner">
            <h2>
              <AnimatedText text={allBannerData?.heading} />
            </h2>
            <p style={bannertitleStyle}>{allBannerData?.subheading}</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="brand-star" />
          </div>
        </div>
      </div>
    </>
  );
}
