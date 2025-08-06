import Image from "next/image";
export default function Innerbanner({ systemBannerData }) {
  const systemBannerContent = systemBannerData.data.content;
  const bannerpara = {
    maxWidth: "711px"
  };
  return (
    <>
      <div className="container">
        <div className="topadding_top">
          <div className="innerbanner">
            <Image
              fill={true}
              src="/images/system/systembanner.jpg"
              alt="systembanner"
            />
            <div className="cpation-banner">
              <h2>{systemBannerContent?.heading}</h2>
              <p style={bannerpara}>{systemBannerContent?.subheading}</p>
            </div>
            <div className="brands">
              <Image fill={true} src="/images/brand-star.svg" alt="star" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
