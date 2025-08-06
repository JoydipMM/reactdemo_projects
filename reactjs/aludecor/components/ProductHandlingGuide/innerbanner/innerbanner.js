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
          <Image fill={true} src="/images/support/phg-banner.jpg" alt="" />
          <div className="cpation-banner" style={bannerStyle}>
          <h2><AnimatedText text="Product Handling Guide"/></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id massa vestibulum, facilisis est vitae, placerat tortor.</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
