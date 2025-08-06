import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import certificatesstyles from "@/components/recognition/certificates/certificates.module.css";
import { toast } from "react-toastify";
import Image from "next/image";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { ToastContainer } from "react-toastify";
import { getDownloadHandler, handleDownload } from "@/helper/downloadHelper";
import { useRouter } from "next/router";

export default function Whatyouneed({ downloadData, session = null }) {
  const router = useRouter();
  //console.log("session", session);
  const allData = downloadData?.data?.content;
  const downloadDatas = allData?.downloads;

  return (
    <>
      <section
        className={`${ourprojectsstyles.Expl_metalmpwr} topadding_bottom`}
      >
        <div className="container">
          <div
            className={`${ourprojectsstyles.tabcont_explore} ${certificatesstyles.tabcont_explore}`}
          >
            <h2>
              <span>{allData?.preheading}</span>
              {allData?.heading}
            </h2>
            <Tabs selectedTabClassName={ourprojectsstyles.activeTab}>
              <TabList
                className={`${ourprojectsstyles.tabList} ${certificatesstyles.tabList}`}
              >
                {downloadDatas?.map((downloadData) => (
                  <Tab
                    className={ourprojectsstyles.tab}
                    key={`downID-${downloadData.id}`} //  Ensures unique key
                  >
                    {downloadData.tab_title}
                  </Tab>
                ))}
              </TabList>
              {downloadDatas?.map((downloadData, index) => (
                <TabPanel key={`downID-${downloadData.id}`}>
                  <div className={ourprojectsstyles.panel_conttab}>
                    <div className={ourprojectsstyles.prjbox_wrp}>
                      {downloadData.tab_content.map((dwnTab, index) => (
                        <div
                          className={`${ourprojectsstyles.prj_innerbox} ${certificatesstyles.prj_innerbox}`}
                          key={`dwnTab-${index}`}
                        >
                          <div
                            className={`${ourprojectsstyles.prj_innerbox_overlay} ${certificatesstyles.prj_innerbox_overlay}`}
                          >
                            <div className={ourprojectsstyles.prj_overltitle}>
                              {dwnTab?.heading}
                            </div>
                            <div className={ourprojectsstyles.prj_overltxt}>
                              {dwnTab?.excerpt}
                            </div>
                            {session ? (
                              <a
                                href={dwnTab.file_link}
                                download
                                onClick={async (e) => {
                                  e.preventDefault(); // Always prevent default first

                                  if (!dwnTab.file_link) return;

                                  const { shouldDownload, error } =
                                    await getDownloadHandler(dwnTab, session);

                                  if (shouldDownload) {
                                    // Trigger download
                                    const link = document.createElement("a");
                                    link.href = dwnTab.file_link;
                                    link.target = "_blank";
                                    link.download = dwnTab.name || "download";
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
                                  <Image
                                    src="/images/pause-circle.svg"
                                    alt="Link"
                                    width={50}
                                    height={50}
                                  />
                                </label>
                              </a>
                            ) : (
                              <button
                                onClick={() => handleDownload(router.asPath)}
                              >
                                <label
                                  style={{
                                    cursor: "pointer",
                                    transition: "transform 0.2s ease "
                                  }}
                                >
                                  <Image
                                    src="/images/pause-circle.svg"
                                    alt="Link"
                                    width={50}
                                    height={50}
                                  />
                                </label>
                              </button>
                            )}
                            {/* <Link href="#">
                              <Image
                                src="/images/pause-circle.svg"
                                alt="Link"
                                width={50}
                                height={50}
                              />
                            </Link> */}
                          </div>
                          <Image
                            src="/images/pdf.svg"
                            alt="certificates"
                            fill={true}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
