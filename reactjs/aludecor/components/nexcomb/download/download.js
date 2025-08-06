import Link from "next/link";
import dowldbrocstyles from "@/components/zincSolidPanels/download/download.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
import { getDownloadHandler, handleDownload } from "@/helper/downloadHelper";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
export default function Download({ brochureData, session = null }) {
  const allBrochurData = brochureData?.data?.content;
  const router = useRouter();
  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <div className={dowldbrocstyles.readywrk}>
            <div className={dowldbrocstyles.readyleft}>
              <h2>
                <AnimatedText text={allBrochurData?.heading} />
              </h2>
              <div style={{ width: "100%" }}>
                <p>{allBrochurData?.subheading}</p>
              </div>

              {session ? (
                <a
                  className="common-btn"
                  href={allBrochurData.button_link}
                  download
                  onClick={async (e) => {
                    e.preventDefault(); // Always prevent default first

                    if (!allBrochurData.button_link) return;

                    const { shouldDownload, error } = await getDownloadHandler(
                      allBrochurData,
                      session
                    );

                    if (shouldDownload) {
                      // Trigger download
                      const link = document.createElement("a");
                      link.href = allBrochurData.button_link;
                      link.target = "_blank";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      toast.success("Download started!");
                    }
                  }}
                >
                  <label>
                    {allBrochurData.button_name}
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
                    {allBrochurData.button_name}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt=""
                    />
                  </label>
                </button>
              )}
            </div>
            <div className={`${dowldbrocstyles.readyrit} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="brand" />
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
                src={allBrochurData?.image?.url}
                alt="allBrochurData"
              />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
