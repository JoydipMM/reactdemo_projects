"use client";
import premiumsolutionsstyles from "@/components/Home/premiumSolutions/premiumSolutions.module.css";
import Image from "next/image";
import Link from "next/link";
import downloadstyles from "@/components/Fabricator/download/download.module.css";
import { getDownloadHandler, handleDownload } from "@/helper/downloadHelper";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

export default function Download({ lastSectionData, session = null }) {
  const router = useRouter();
  const allData = lastSectionData?.data?.content;
  const lastSectionDatas = allData?.items;
  return (
    <>
      <section className={`${premiumsolutionsstyles.premiumwrp} commonpadding`}>
        <div className="container">
          <div className={premiumsolutionsstyles.premium_boxwrp}>
            {lastSectionDatas?.map((lastSectionData, index) => (
              <div
                className={
                  index == 0
                    ? `${premiumsolutionsstyles.premiumboxcont} ${premiumsolutionsstyles.border_l}`
                    : `${premiumsolutionsstyles.premiumboxcont}`
                }
                key={`lastSectionDataID-${index}`}
              >
                {/* <div className={premiumsolutionsstyles.premiumboximgcont}> */}
                <div
                  className={`${premiumsolutionsstyles.animate_frame} ${downloadstyles.imgarea}`}
                >
                  <div className={premiumsolutionsstyles.brandin}>
                    <Image
                      src="/images/brandin_pic.svg"
                      alt="Brandin Solutions"
                      fill={true}
                    />
                  </div>
                  <Image
                    src={lastSectionData?.image?.image_url}
                    alt="Animated"
                    fill={true}
                  />
                </div>
                <div className={premiumsolutionsstyles.premiumbox_textcont}>
                  <div className={premiumsolutionsstyles.boxpremium_left}>
                    <h3>{lastSectionData?.name}</h3>
                    <p>{lastSectionData?.content}</p>
                  </div>
                  {session ? (
                    <a
                      className="common-btn"
                      href={lastSectionData.btn_url}
                      download
                      onClick={async (e) => {
                        e.preventDefault(); // Always prevent default first

                        if (!lastSectionData.btn_url) return;

                        const { shouldDownload, error } =
                          await getDownloadHandler(lastSectionData, session);

                        if (shouldDownload) {
                          // Trigger download
                          const link = document.createElement("a");
                          link.href = lastSectionData.btn_url;
                          link.target = "_blank";
                          link.download =
                            lastSectionData.btn_text || "download";
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                          toast.success("Download started!");
                        }
                      }}
                    >
                      <label
                        style={{
                          cursor: "pointer",
                          transition: "transform 0.2s ease "
                        }}
                      >
                        {lastSectionData.btn_text}
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
                      onClick={() => handleDownload(router.asPath)}
                      className="common-btn"
                    >
                      <label
                        style={{
                          cursor: "pointer",
                          transition: "transform 0.2s ease "
                        }}
                      >
                        {lastSectionData.btn_text}
                        <Image
                          width={34}
                          height={16}
                          src="/images/arrow-right.svg"
                          alt=""
                        />
                      </label>
                    </button>
                  )}

                  {/* <Link href="#" className="common-btn">
                    {" "}
                    <label>
                      {" "}
                      {lastSectionData?.btn_text}
                      <Image
                        width={34}
                        height={16}
                        src="/images/arrow-right.svg"
                        alt=""
                      />
                    </label>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
