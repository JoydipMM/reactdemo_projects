import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function Innerbanner({ bannerSolution }) {
  const slides = bannerSolution?.data?.content;
  const slidesImages = slides?.image;
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image fill={true} src={slidesImages?.url} alt={slidesImages?.alt} />
          <div className="cpation-banner">
            <h2>
              <AnimatedText text={slides?.heading} />
            </h2>
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
