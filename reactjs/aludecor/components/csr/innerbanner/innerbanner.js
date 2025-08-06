import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";


export default function InnerBannerCSR() {
  const bannerStyle = {
    maxWidth: "100%",
  };
  return (
    <>
      <div className="container">
        <div className="innerbanner hoverarea">
          <Image fill={true} src="/images/product/csr/csr-banner.jpg" alt="CSR" />
          <div className="cpation-banner">
            <h2><AnimatedText text="Aludecor Cares" /></h2>
            <p>Aludecor’s sustainability initiatives in action</p>
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
