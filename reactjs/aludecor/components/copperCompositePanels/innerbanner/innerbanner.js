import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import innerbanneracpstyles from "@/components/acpSignage/innerbanner/innerbanner.module.css";

export default function InnerBanner({ bannerData }) {
  const allBannerData = bannerData?.data?.content;
  const allButtons = allBannerData?.buttons || [];
  //console.log("allBannerData", allBannerData);
  const bannerStyle = {
    maxWidth: "100%"
  };
  return (
    <>
      <div className="container">
        <div
          className={`innerbanner hoverarea ${innerbanneracpstyles.acpbannercont}`}
        >
          <Image
            fill={true}
            src={allBannerData?.image?.url}
            alt="Zinc Solid Banner"
          />
          <div
            className="cpation-banner"
            style={{ maxWidth: "1204px", bottom: "9%" }}
          >
            <h2>
              <AnimatedText text={allBannerData?.heading} />
            </h2>
            <p>{allBannerData?.subheading}</p>
            <div className={`banner_btncont`}>
              {allButtons &&
                allButtons.map((allButton, index) => {
                  return (
                    <Link
                      href={allButton.url == "" ? "#" : allButton.url}
                      className={`common-btn ${allButton.id == 1 ? "purple" : "white"} `}
                      key={`bannerID-${index}`}
                    >
                      <label>
                        {allButton.name}
                        <Image
                          width={34}
                          height={16}
                          src="/images/arrow-right.svg"
                          alt="arrow-right"
                        />
                      </label>
                    </Link>
                  );
                })}
              {/* 
              <Link href="#" className="common-btn white">
                <label>
                  Download Brochure
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt=""
                  />
                </label>
              </Link>
              <Link href="#" className="common-btn white">
                <label>
                  View Shades
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt=""
                  />
                </label>
              </Link> */}
            </div>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="brand" />
          </div>
        </div>
      </div>
    </>
  );
}
