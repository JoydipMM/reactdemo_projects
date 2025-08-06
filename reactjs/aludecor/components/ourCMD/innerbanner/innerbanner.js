import AnimatedText from "@/components/Framemotion/framemotion";
import Link from "next/link";
import Image from "next/image";


export default function Innerbanner() {
  const bannerStyle = {
    maxWidth: "100%",
  };
  return (
    <>
      <div className="container">
        <div className={`innerbanner`}>
          <Image fill={true} src="/images/ourcmd/ourcmd-banner.jpg" alt="" />
          <div className="cpation-banner" style={{maxWidth:'1032px'}}>
            <h2><AnimatedText text="Meet Our Visionary Leader: Mr. Ashok Kumar Bhaiya" /></h2>
            <p>Chairman and Managing Director of Aludecor Lamination Private Limited</p>       
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
