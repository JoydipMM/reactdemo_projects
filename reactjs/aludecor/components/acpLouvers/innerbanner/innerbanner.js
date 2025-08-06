import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function InnerBannerACPLouvers({ bannerData }) {
  const slides = bannerData?.data?.content;
  // const bannerStyle = {
  //   maxWidth: "100%"
  // };
  return (
    <>
      <div className="container">
        <div className="innerbanner hoverarea">
          <Image fill={true} src={slides?.image?.url} alt="ACP Louvers" />
          <div className="cpation-banner">
            <h2>
              <AnimatedText text={slides?.heading} />
            </h2>
            <p>{slides?.subheading}</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="brand" />
          </div>
        </div>
      </div>
    </>
  );
}
