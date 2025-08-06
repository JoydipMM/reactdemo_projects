import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";

export default function InnerBannerZinc() {
  const bannerStyle = {
    maxWidth: "1020px",
    bottom: "12%",
  };
  return (
    <>
      <div className="container">
        <div className="innerbanner hoverarea">
          <Image fill={true} src="/images/product/zincsolid_banner.png" alt="Zinc Solid Banner" />
          <div className="cpation-banner" style={bannerStyle}>
          <h2><AnimatedText text="Sustainable Elegance in Architecture with Zinc Composite Panels"/></h2>
          <p>Redefining design with Zinc Cladding – Durable, Self-healing, and  Timeless.</p>

          <div className="btnwrp">
          <Link className="common-btn purple" href="/#"> 
                <label> Explore Shades
                  <Image  width="34" height="16" src="/images/arrow-right.svg"  alt=""/>
                </label>
              </Link>
              <Link className="common-btn white" href="/#"> 
                <label> Download Brochure
                  <Image  width="34" height="16" src="/images/arrow-right.svg"  alt=""/>
                </label>
              </Link>
              <Link className="common-btn white" href="/#"> 
                <label> Contact Us
                  <Image  width="34" height="16" src="/images/arrow-right.svg"  alt=""/>
                </label>
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
