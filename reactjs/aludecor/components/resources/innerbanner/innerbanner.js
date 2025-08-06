import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function Innerbanner({ bannerData }) {
  const slides = bannerData?.data?.content;
  const slidesImages = slides?.image;
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image fill={true} src={slidesImages?.url} alt="slidesImages" />
          <div className="cpation-banner">
            <h2>
              <AnimatedText text={slides?.heading} />
            </h2>
            <p>{slides?.subheading}</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
