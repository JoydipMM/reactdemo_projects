import Image from "next/image";

export default function Innerbanner({ bannerData }) {
  //console.log("bannerData", bannerData);
  const allBannerData = bannerData.data?.content;
  //const popularsearchesItems = popularData.data?.content?.search_items;
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image
            fill={true}
            src="/images/fabricator/banner.jpg"
            alt="contact-banner"
          />
          <div className="cpation-banner">
            <h2>Fabricator</h2>
            <p>Your Guide to ACP Fabrication: Techniques, Safety, and More" (Bold and prominent).</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="brand-star" />
          </div>
        </div>
      </div>
    </>
  );
}
