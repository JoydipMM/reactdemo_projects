import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function InnerBannerfireWall({ bannerData }) {
  const allBannerData = bannerData.data?.content;
  const bannerStyle = {
    maxWidth: "100%"
  };
  return (
    <>
      <div className="container">
        <div className="innerbanner hoverarea">
          <Image fill={true} src={allBannerData?.image?.url} alt="firewall" />
          <div className="cpation-banner">
            <h2>
              <AnimatedText text={allBannerData?.heading} />
            </h2>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="star" />
          </div>
        </div>
      </div>
    </>
  );
}
