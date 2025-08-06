import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import innerbanneracpstyles from "@/components/acpSignage/innerbanner/innerbanner.module.css";

export default function InnerBanner() {
  const bannerStyle = {
    maxWidth: "100%",
  };
  return (
    <>
      <div className="container">
        <div className={`innerbanner hoverarea ${innerbanneracpstyles.acpbannercont}`}>
          <Image fill={true} src="/images/product/signagebanner.png" alt="Zinc Solid Banner" />
          <div className="cpation-banner" style={{maxWidth:'1204px', bottom: '9%'}}>
          <h2 style={{maxWidth:'810px'}}><AnimatedText text="Building Responsibly. Living Sustainably."/></h2>
          <p style={{maxWidth:'810px'}}>We are reimagining the future of façade solutions with recyclable materials, low-energy  production, and long-lasting performance.</p>
          <div className={`banner_btncont`}>
          <Link href="#" className="common-btn purple">
            <label>Explore Green Materials<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
          </Link>
          <Link href="#" className="common-btn white">
            <label>Download Sustainability Report<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
          </Link>
          <Link href="#" className="common-btn white">
            <label>Talk to Our Sustainability Expert<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
          </Link>
          
          </div>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
