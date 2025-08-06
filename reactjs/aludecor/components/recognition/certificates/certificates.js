import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import certificatesstyles from "@/components/recognition/certificates/certificates.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
//import { useRouter } from "next/navigation";
import { handleDownload } from "@/helper/downloadHelper";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

export default function Certificates({ downloadData, session = null }) {
  const router = useRouter();
  const allData = downloadData?.data?.content;
  const downloadDatas = allData?.downloads;
  // console.log("downloadData", downloadData);

  return (
    <>
      <section
        className={`${ourprojectsstyles.Expl_metalmpwr} topadding_bottom`}
      >
        <div className="container">
          <div
            className={`${ourprojectsstyles.tabcont_explore} ${certificatesstyles.tabcont_explore}`}
          >
            <Tabs selectedTabClassName={ourprojectsstyles.activeTab}>
              <TabList
                className={`${ourprojectsstyles.tabList} ${certificatesstyles.tabList}`}
              >
                {downloadDatas?.map((downloadData) => (
                  <Tab
                    className={ourprojectsstyles.tab}
                    key={`certificateID-${downloadData.id}`} //  Ensures unique key
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
                              <Link
                                key={`downloadID-${index}`}
                                href={
                                  dwnTab.file_link == ""
                                    ? "#"
                                    : dwnTab.file_link
                                }
                                download
                                target="_blank" // Opens in new tab
                                rel="noopener noreferrer" // Security best practice
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
                              </Link>
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
                    {/* <div
                      className={`${ourprojectsstyles.prj_viewbtn} ${certificatesstyles.prj_viewbtn}`}
                    >
                      <Link href="#" className="common-btn">
                        <label>
                          View More{" "}
                          <Image
                            width={34}
                            height={16}
                            src="/images/arrow-right.svg"
                            alt=""
                          />
                        </label>
                      </Link>
                    </div> */}
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
