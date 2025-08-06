import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";


export default function InnerBanner() {
  const bannerStyle = {
    maxWidth: "100%",
  };
  return (
    <>
      <div className="container">
        <div className="innerbanner hoverarea">
          <Image fill={true} src="/images/product/nexcomb/nexcombbanner.jpg" alt="Nexcomb" />
          <div className="cpation-banner">
          <h2><AnimatedText text="Nexcomb"/></h2>
          <p>The revolutionary Aluminium Honeycomb Panels from the house of Aludecor</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
