import Link from "next/link";
import dowldbrocstyles from "@/components/zincSolidPanels/download/download.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function CreateBold() {
  return (
    <>
      <section>
        <div className="container">
          <div className={dowldbrocstyles.readywrk}>
            <div className={dowldbrocstyles.readyleft}>
              <h2 style={{ maxWidth: '819px' }}>
                <AnimatedText text="Create bold brand experiences with high-performance ACP signage solutions." />
              </h2>
              <div style={{ width: "100%" }}>
              
              <div className={`banner_btncont`}>
          <Link href="#" className="common-btn purple">
            <label>Contact a Specialist<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
          </Link>
          <Link href="#" className="common-btn ">
            <label>Download SignEx Catalog<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
          </Link>
          <Link href="#" className="common-btn ">
            <label>Get Samples<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
          </Link>
          
          </div>
              </div>
             
            </div>
            <div className={`${dowldbrocstyles.readyrit} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="" />
              </div>
              <div className="readtframe">
                <Image fill={true} src="/images/readywork-frame.svg" alt="" />
              </div>
              <Image fill={true} src="/images/readywork.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
