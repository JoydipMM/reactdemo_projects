import Link from "next/link";
import dowldbrocstyles from "@/components/zincSolidPanels/download/download.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function WhatsNew({ whyNewData }) {
  const allWhatNewData = whyNewData.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={dowldbrocstyles.readywrk}>
            <div className={dowldbrocstyles.readyleft}>
              <h2 style={{ maxWidth: "819px" }}>
                <AnimatedText text={allWhatNewData?.heading} />
              </h2>
              <div style={{ width: "100%" }}>
                <p style={{ maxWidth: "819px" }}>
                  {allWhatNewData?.description}
                </p>
              </div>
              <Link
                href={
                  allWhatNewData?.button_link == ""
                    ? "#"
                    : allWhatNewData?.button_link
                }
                className="common-btn"
              >
                <label>
                  read more
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow"
                  />
                </label>
              </Link>
            </div>
            <div className={`${dowldbrocstyles.readyrit} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="star" />
              </div>
              <div className="readtframe">
                <Image
                  fill={true}
                  src="/images/readywork-frame.svg"
                  alt="readywork"
                />
              </div>
              <Image fill={true} src={allWhatNewData?.image?.url} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
