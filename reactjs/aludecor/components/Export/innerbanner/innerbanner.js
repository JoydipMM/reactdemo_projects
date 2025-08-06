import AnimatedText from "@/components/Framemotion/framemotion";
import Link from "next/link";
import Image from "next/image";
import innerbannerstyles from "../innerbanner/banner.module.css";

export default function Innerbanner() {
  const bannerStyle = {
    maxWidth: "77%",
  };
  return (
    <>
      <div className="container">
        <div className={`innerbanner ${innerbannerstyles.banneradjust}`}>
          <Image fill={true} src="/images/export/export-banner.jpg" alt="" />
          <div className="cpation-banner" style={bannerStyle}>
            <h2><AnimatedText text="India’s Leading ACP Sheet Manufacturer, Exporting Excellence Worldwide" /></h2>
            <p>Supplying premium aluminum composite panels across the globe with cutting-edge technology, fire safety, and unmatched aesthetics.</p>
            <div className={innerbannerstyles.btncontent}>
              <Link className="common-btn white" href="/#">
                <label>
                  Get a Quote
                  <Image
                    alt=""
                    width="34"
                    height="16"
                    src="/images/arrow-right.svg"
                  />
                </label>
              </Link>
              <Link className="common-btn purple" href="/#">
                <label>
                  Become a Distributor
                  <Image
                    alt=""
                    width="34"
                    height="16"
                    src="/images/arrow-right.svg"
                  />
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
