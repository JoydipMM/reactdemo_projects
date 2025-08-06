import Image from "next/image";

export default function Innerbanner({ rivetsBannerData }) {
  const slides = rivetsBannerData?.data?.content;

  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image
            fill={true}
            src={slides?.image?.url}
            alt={slides?.image?.alt}
          />
          <div className="cpation-banner">
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
