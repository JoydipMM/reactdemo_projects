import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function Innerbanner() {
  const bannerStyle = {
    maxWidth: "77%",
  };
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image fill={true} src="/images/product/pdt-banner.jpg" alt="" />
          <div className="cpation-banner" style={bannerStyle}>
          <h2><AnimatedText text="ACP Fabrication Guide"/></h2>
          <p>Your Guide to ACP Fabrication: Techniques, Safety, and More  (Bold and prominent).</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
