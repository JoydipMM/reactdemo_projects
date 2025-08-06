import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function Innerbanner() {
  const bannerStyle = {
    bottom: "12%",
    maxWidth: "1140px"
  };
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image fill={true} src="/images/madeinindia/banner.jpg" alt="" />
          <div className="cpation-banner" style={bannerStyle}>
          <h2><AnimatedText text="Aludecor: Pioneering India's ACP Manufacturing Excellence"/></h2>
          <p>Innovating with indigenous resources to build a stronger nation.</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
