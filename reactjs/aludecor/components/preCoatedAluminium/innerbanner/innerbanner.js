import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import precoatstyles from "../innerbanner/innerbanner.module.css";

export default function InnerBannerPrecoat({ bannerData }) {
  const slides = bannerData?.data?.content;
  // const bannerStyle = {
  //   maxWidth: "40%"
  // };
  return (
    <>
      <div className="container">
        <div
          className={`innerbanner hoverarea ${precoatstyles.banersolidalum}`}
        >
          <Image fill={true} src={slides?.image?.url} alt="Pre-coat Banner" />
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
