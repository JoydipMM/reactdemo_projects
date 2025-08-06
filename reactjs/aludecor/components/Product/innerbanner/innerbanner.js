import Image from "next/image";

export default function Innerbanner({ bannerProduct }) {
  const bannerStyle = {
    maxWidth: "77%"
  };
  const slides = bannerProduct?.data?.content;
  const slidesImages = slides?.image;
  // console.log("bannerProduct", bannerProduct);
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image fill={true} src={slidesImages?.url} alt="slidesImages" />
          <div className="cpation-banner" style={bannerStyle}>
            <h2>{slides?.heading}</h2>
            <p>{slides?.subheading}</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="brand-star" />
          </div>
        </div>
      </div>
    </>
  );
}
