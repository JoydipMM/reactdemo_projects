
import Link from "next/link";
import dowldbrocstyles from "@/components/zincSolidPanels/download/download.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function BuildGreener() {
  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <div className={dowldbrocstyles.readywrk}>
            <div className={dowldbrocstyles.readyleft}>
              <h2 style={{ maxWidth: '819px' }}>
                <AnimatedText text="Let’s Build a Greener Tomorrow, One Panel at a Time" />
              </h2>
              <div style={{ width: "100%" }}>
              
              <div className={`banner_btncont`}>
          <Link href="#" className="common-btn purple">
            <label>Speak with a Consultant<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
          </Link>
          <Link href="#" className="common-btn ">
            <label>View Shade Range<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
          </Link>
          <Link href="#" className="common-btn ">
            <label>Download Technical Sheet<Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label>
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