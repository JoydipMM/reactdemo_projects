import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function Innerbanner({ bannerData }) {
  const allBannerData = bannerData?.data?.content;
  // console.log("allBannerData", allBannerData);
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image fill={true} src={allBannerData?.image?.url} alt="banner" />
          <div className="cpation-banner" style={{ maxWidth: "1035px" }}>
            <h2>
              <AnimatedText text={allBannerData?.heading} />
            </h2>
            <p>{allBannerData?.subheading}</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="brand" />
          </div>
        </div>
      </div>
    </>
  );
}
