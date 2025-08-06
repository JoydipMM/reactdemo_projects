import Image from "next/image";
import { useRouter } from "next/router";

export default function Innerbanner({ bannerData }) {
  const router = useRouter();
  const { query } = router;
  //console.log("bannerData", bannerData);
  const allBannerData = bannerData.data?.content;
  //const popularsearchesItems = popularData.data?.content?.search_items;
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image
            fill={true}
            src={allBannerData?.image?.url}
            alt="contact-banner"
          />
          <div className="cpation-banner">
            <h2>
              {query.requestform === "1"
                ? "Request A Quote"
                : allBannerData?.heading}
            </h2>
            <p>{allBannerData?.subheading}</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="brand-star" />
          </div>
        </div>
      </div>
    </>
  );
}
