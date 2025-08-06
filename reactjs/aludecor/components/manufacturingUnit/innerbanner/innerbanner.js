import AnimatedText from "@/components/Framemotion/framemotion";
import Link from "next/link";
import Image from "next/image";


export default function Innerbanner() {
  const bannerStyle = {
    maxWidth: "77%",
  };
  return (
    <>
      <div className="container">
        <div className={`innerbanner`}>
          <Image fill={true} src="/images/manufacturingunit/manufacturingunit-banner.jpg" alt="" />
          <div className="cpation-banner" style={bannerStyle}>
            <h2><AnimatedText text="Aludecor Manufacturing: Excellence in Every Layer." /></h2>
            <p>Connecting society, economy, and environment through innovation and responsible growth.</p>          

          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
