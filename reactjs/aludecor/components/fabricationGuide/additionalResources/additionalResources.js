import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import addistyles from "../additionalResources/additionalResources.module.css";
import explorestyles from "@/components/Bim/explore-vid/explore.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { handleDownload } from "@/helper/downloadHelper";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
export default function AdditionalResources({ resourcesData, session = null }) {
  // console.log(session);
  const router = useRouter();
  const allResourceData = resourcesData.data?.content;
  const resImagesDatas = allResourceData?.images;
  const resVideosDatas = allResourceData?.videos;

  const [currentModal, setCurrentModal] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const openModal = (id, video) => {
    // console.log("id", id);
    // console.log("video", video);
    setCurrentModal(id);
    setVideoUrl(video);
  };

  const closeModal = () => {
    setCurrentModal(null);
    setVideoUrl("");
  };

  return (
    <>
      <section className={addistyles.addi_mwrpercont}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allResourceData?.pre_heading}</span>
            <AnimatedText text={allResourceData?.heading} />
          </h2>
          <div className="tabcont_explore">
            <Tabs selectedTabClassName="activeTab">
              <TabList className="tabList">
                <Tab className="tab">Technical Manuals</Tab>
                <Tab>Video Tutorials</Tab>
              </TabList>
              <TabPanel>
                <div className="panel_conttab">
                  <div className={addistyles.addibox_wrp}>
                    {resImagesDatas?.map((resImagesData, index) => (
                      <div
                        className={addistyles.addi_innerbox}
                        key={`resImagesDatasID-${index}`}
                      >
                        <div
                          className={addistyles.addi_innerbox_overlay}
                          style={{ textAlign: "center" }}
                        >
                          <div className={addistyles.addi_overltitle}>
                            {resImagesData?.title}
                          </div>
                          <div className={addistyles.addi_overltxt}>
                            {resImagesData?.description}
                          </div>
                          {session ? (
                            <Link
                              key={`downloadID-${index}`}
                              href={
                                resImagesData.url == ""
                                  ? "#"
                                  : resImagesData.url
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
                        </div>
                        <Image
                          src={resImagesData?.image?.image_url}
                          fill={true}
                        />
                      </div>
                    ))}
                  </div>
                  <div className={addistyles.addi_viewbtn}>
                    {/* <Link href="#" className="common-btn">
                      <label>
                        View All
                        <Image
                          width={34}
                          height={16}
                          src="/images/arrow-right.svg"
                          alt="arrow-right"
                        />
                      </label>
                    </Link> */}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="panel_conttab">
                  <div className={addistyles.addibox_wrp}>
                    {resVideosDatas?.map((resVideosData, index) => (
                      <div
                        className={explorestyles.explorevidbox}
                        key={`videoData-${index + 1}`}
                      >
                        <div className={explorestyles.exploreimgcont}>
                          <div
                            className={explorestyles.overlay_vidiconexp}
                            onClick={() => {
                              resVideosData?.video_url == ""
                                ? ""
                                : openModal(
                                    index + 1,
                                    resVideosData?.video_url
                                  );
                            }}
                          >
                            <Image
                              src="/images/overlay_vidicon.svg"
                              alt=""
                              width={61}
                              height={61}
                            />
                          </div>
                          <Image
                            src={resVideosData?.image?.image_url}
                            alt="videoImage"
                            fill={true}
                          />
                        </div>
                        <h3>{resVideosData?.title}</h3>
                      </div>
                    ))}
                  </div>
                  <div className={addistyles.addi_viewbtn}></div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
      <ToastContainer />
      {currentModal && (
        <div className={explorestyles.modalwrper}>
          <div className={explorestyles.vidmodal_mwrp}>
            <button onClick={closeModal} className={explorestyles.close_popup}>
              Close
            </button>
            <div className={explorestyles.video_modalcont}>
              <iframe
                src={videoUrl}
                height="300"
                width="100%"
                title="Aludecor Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
