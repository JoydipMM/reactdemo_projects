import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function InnerBannerBim({ bimBannerData }) {
  const allInnerBannerData = bimBannerData.data?.content;
  const bannerStyle = {
    maxWidth: "77%"
  };
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image
            fill={true}
            src={allInnerBannerData?.image?.url}
            alt="bannerImage"
          />
          <div className="cpation-banner forbimbanner" style={bannerStyle}>
            <h2>
              <AnimatedText text={allInnerBannerData?.heading} />
            </h2>
            <div className="twocolumtxt">
              <p>{allInnerBannerData?.first_description}</p>
              <p>{allInnerBannerData?.second_description}</p>
            </div>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="brand-star" />
          </div>
        </div>
      </div>
    </>
  );
}
