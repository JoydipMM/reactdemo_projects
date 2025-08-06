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
          <div className="cpation-banner" style={{maxWidth:'1150px', bottom: '9%'}}>
          <h2><AnimatedText text="Where Vision Becomes Visible – Premium ACP Signage Solutions by Aludecor"/></h2>
          <p>Build powerful brand stories with durable, customizable, and printable ACP boards engineered for impact.</p>
          <div className={`banner_btncont`}>
          <Link href="#" className="common-btn purple">
            <label>Explore ACP Boards<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
          </Link>
          <Link href="#" className="common-btn white">
            <label>Get a Quote<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
          </Link>
          <Link href="#" className="common-btn white">
            <label>Download Brochure<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
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