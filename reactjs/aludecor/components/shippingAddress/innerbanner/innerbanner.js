import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function Innerbanner() {
  const bannerStyle = {
    maxWidth: "77%"
  };
  return (
    <>
      <div className="container">
        <div className="innerbanner">
          <Image
            fill={true}
            src="/images/shippingaddress/shippingaddress-banner.jpg"
            alt=""
          />
          <div className="cpation-banner" style={bannerStyle}>
            <h2>
              <AnimatedText text="Product Shipping Order" />
            </h2>
            {/* <p>
              When it comes to ACP sheet price, Aludecor offers the best value
              for your investment.
            </p> */}
          </div>
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
