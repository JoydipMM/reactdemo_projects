import Link from "next/link";
import dowldbrocstyles from "@/components/zincSolidPanels/download/download.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function Download({ downloadData }) {
  const allDownloadData = downloadData?.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={dowldbrocstyles.readywrk}>
            <div className={dowldbrocstyles.readyleft}>
              <h2>
                <AnimatedText text={allDownloadData?.heading} />
              </h2>
              <div style={{ width: "100%" }}>
                <p>{allDownloadData?.description}</p>
              </div>
              <Link
                href={
                  allDownloadData?.download_link == ""
                    ? "#"
                    : allDownloadData?.download_link
                }
                className="common-btn"
              >
                <label>
                  Download{" "}
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
              <Image
                fill={true}
                src={allDownloadData?.image?.url}
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
