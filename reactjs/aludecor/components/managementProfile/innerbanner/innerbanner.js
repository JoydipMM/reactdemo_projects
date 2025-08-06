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
            src="/images/mprofile/banner.jpg"
            alt="contact-banner"
          />
          <div className="cpation-banner" style={{ width: '80%', maxWidth: '100%' }}>
            <h2>Aludecor Manufacturing: Excellence in Every Layer.</h2>
            <p>Connecting society, economy, and environment through innovation and responsible growth.</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="brand-star" />
          </div>
        </div>
      </div>
    </>
  );
}
