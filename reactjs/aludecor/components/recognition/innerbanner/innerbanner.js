import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function Innerbanner() {

  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image fill={true} src="/images/resources/banner.jpg" alt="" />
          <div className="cpation-banner">
          <h2><AnimatedText text="Recognition"/></h2>
          <p>Aludecor provides a wealth of useful resources designed to help with technical detail, installation guidance, inspiration and much more.</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
