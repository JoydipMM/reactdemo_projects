import Image from "next/image";
import Link from "next/link";
import innerBannerstyles from "@/components/residentialSolutions/innerbanner/innerbanner.module.css";

export default function Innerbanner({ innerBannerData }) {
  //console.log("innerBannerData", innerBannerData);
  const allInnerBannerData = innerBannerData.data?.content;
  const bannerStyle = {
    bottom: "12%",
    maxWidth: "80%"
  };
  return (
    <>
      <div className="container">
        <div className={`${innerBannerstyles.innerbanner} innerbanner`}>
          <Image
            fill={true}
            src={allInnerBannerData?.image?.url}
            alt="bannerImage"
          />
          <div className="cpation-banner" style={bannerStyle}>
            <h2>{allInnerBannerData?.heading}</h2>
            <p>{allInnerBannerData?.subheading}</p>
            <div className="btnwrp">
              <Link
                href={
                  allInnerBannerData?.consultation_buttont_url == ""
                    ? "#"
                    : allInnerBannerData?.consultation_buttont_url
                }
                className="common-btn white"
              >
                <label>
                  {allInnerBannerData?.consultation_buttont_text}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                  />
                </label>
              </Link>
              <Link
                href={
                  allInnerBannerData?.portfolio_button_url == ""
                    ? "#"
                    : allInnerBannerData?.portfolio_button_url
                }
                className="common-btn purple"
              >
                <label>
                  {allInnerBannerData?.portfolio_button_text}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                  />
                </label>
              </Link>
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
