import Link from "next/link";
import dowldbrocstyles from "@/components/zincSolidPanels/download/download.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
import { getDownloadHandler, handleDownload } from "@/helper/downloadHelper";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import React from "react";

export default function BuildingEvolve({ ctaSectionData, session = null }) {
  const allCtaSectionData = ctaSectionData?.data?.content;
  const allButtons = allCtaSectionData?.buttons || [];
  //console.log("allButtons", allButtons);
  const router = useRouter();
  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <div className={dowldbrocstyles.readywrk}>
            <div className={dowldbrocstyles.readyleft}>
              <h2 style={{ maxWidth: "819px" }}>
                <AnimatedText text={allCtaSectionData?.heading} />
              </h2>
              <div style={{ width: "100%" }}>
                <div className={`banner_btncont`}>
                  {allButtons &&
                    allButtons.map((allButton, index) => {
                      return (
                        <React.Fragment key={`ctaID-${index}`}>
                          {allButton.id == 3 ? (
                            session ? (
                              <a
                                href={allButton.url == "" ? "#" : allButton.url}
                                className="common-btn"
                                download
                                onClick={async (e) => {
                                  e.preventDefault(); // Always prevent default first

                                  if (!allButton.url) return;

                                  const { shouldDownload, error } =
                                    await getDownloadHandler(
                                      allButton,
                                      session
                                    );

                                  if (shouldDownload) {
                                    // Trigger download
                                    const link = document.createElement("a");
                                    link.href = allButton.url;
                                    link.target = "_blank";
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                    toast.success("Download started!");
                                  }
                                }}
                              >
                                <label>
                                  {allButton.title}
                                  <Image
                                    width={34}
                                    height={16}
                                    src="/images/arrow-right.svg"
                                    alt=""
                                  />
                                </label>
                              </a>
                            ) : (
                              <button
                                className="common-btn"
                                onClick={() => handleDownload(router.asPath)}
                              >
                                <label>
                                  {allButton.title}
                                  <Image
                                    width={34}
                                    height={16}
                                    src="/images/arrow-right.svg"
                                    alt=""
                                  />
                                </label>
                              </button>
                            )
                          ) : (
                            <Link
                              href={allButton.url == "" ? "#" : allButton.url}
                              className={`common-btn ${index == 0 ? "purple" : ""} `}
                              key={`bannerID-${index}`}
                            >
                              <label>
                                {allButton.title}
                                <Image
                                  width={34}
                                  height={16}
                                  src="/images/arrow-right.svg"
                                  alt="arrow-right"
                                />
                              </label>
                            </Link>
                          )}
                        </React.Fragment>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className={`${dowldbrocstyles.readyrit} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="brand" />
              </div>
              <div className="readtframe">
                <Image
                  fill={true}
                  src={allCtaSectionData?.image?.url}
                  alt="frame"
                />
              </div>
              <Image fill={true} src="/images/readywork.jpg" alt="readywork" />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
