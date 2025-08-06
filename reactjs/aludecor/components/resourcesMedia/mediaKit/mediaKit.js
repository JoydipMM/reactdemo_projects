import explorestyles from "../../Bim/explore-vid/explore.module.css";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import producttpestyles from "../../Bim/product-type/producttpe.module.css"; // Import CSS file
import mediastyles from "../mediaKit/mediaKit.module.css";
import { Dropdown } from "./mediaDropdown";
import { toast, ToastContainer } from "react-toastify";

// Reusable Dropdown Component

export default function MediaKit({ mediaFilterData }) {
  const allData = mediaFilterData?.data?.content;
  const mediaDatas = allData?.media_category;
  const [selectedSubcategories, setSelectedSubcategories] = useState({});
  const [apiData, setApiData] = useState(null);
  const [downloadData, setDownloadData] = useState(null);
  const [currentModal, setCurrentModal] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const openModal = (id, video) => {
    console.log("id", id);
    console.log("video", video);
    setCurrentModal(id);
    setVideoUrl(video);
  };

  const closeModal = () => {
    setCurrentModal(null);
    setVideoUrl("");
  };
  const handleSubcategorySelect = (parentId, subcategory) => {
    setSelectedSubcategories((prev) => ({
      ...prev,
      [parentId]: subcategory
    }));

    sendSelectionToAPI(subcategory.slug);
  };

  const sendSelectionToAPI = async (data) => {
    const toastId = toast.loading("Loading data...");
    try {
      const payload = {
        media_cat: [data]
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_IMAGE_URL}media/filter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      if (!response.ok) throw new Error("Something went wrong!");

      const result = await response.json();
      console.log("API success:", result);
      setApiData(result);
      setDownloadData(result.data.content);
      // Optionally show a toast or update state
    } catch (err) {
      toast.error(`Download failed: ${err.message || "Network error"}`);
      // Show error toast or message
    } finally {
      toast.dismiss(toastId);
    }
  };

  const handleParentClick = (category) => {
    if (!category.subcategories) {
      sendSelectionToAPI(category.slug);
    }
  };

  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div
            className={`${producttpestyles.tabwrer} ${mediastyles.mediamwrper}`}
          >
            {/* Tabs Navigation */}
            <div
              className={`${producttpestyles.tabList} ${mediastyles.tab_drpdwn}`}
            >
              {/* Multiple Dropdowns */}
              {mediaDatas.map((category) =>
                category.subcategories ? (
                  <Dropdown
                    key={category.id}
                    options={category.subcategories}
                    selected={selectedSubcategories[category.id]}
                    setSelected={(sub) =>
                      handleSubcategorySelect(category.id, sub)
                    }
                  />
                ) : (
                  <span
                    key={category.id}
                    className="menu-item"
                    onClick={() => handleParentClick(category)}
                  >
                    {category.name}
                  </span>
                )
              )}
            </div>

            {/* Dynamic Tab Content */}
            {/* <div className={producttpestyles.tabContent}>{getContent()}</div> */}
            <div className={producttpestyles.tabContent}>
              <div className="kitwrper">
                <div
                  className={`${explorestyles.vid_explore_mper} ${mediastyles.contboxvid}`}
                >
                  {downloadData?.length > 0 ? (
                    downloadData?.map((mediaData, index) => {
                      console.log("downloadData", downloadData);
                      return (
                        <div
                          className={explorestyles.explorevidbox}
                          key={`videoData-${index + 1}`}
                        >
                          <div className={explorestyles.exploreimgcont}>
                            <div
                              className={explorestyles.overlay_vidiconexp}
                              onClick={() => {
                                mediaData?.video == ""
                                  ? ""
                                  : openModal(index + 1, mediaData?.video);
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
                              src={mediaData?.image?.url}
                              alt=""
                              fill={true}
                            />
                          </div>
                          <h3>{mediaData?.name}</h3>
                          <p>{mediaData?.description}</p>
                          <Link
                            href={`/resources/mediadetails?slug=${mediaData?.slug}`}
                            className="common-btn"
                          >
                            <label>
                              View details
                              <Image
                                width={34}
                                height={16}
                                src="/images/arrow-right.svg"
                                alt=""
                              />
                            </label>
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div>Please Select Type of Media </div>
                  )}
                </div>
              </div>

              <div
                className={`${mediastyles.vid_viewbtn} ${producttpestyles.loadbox}`}
              >
                <Link href="#" className="common-btn">
                  <label>
                    {" "}
                    load more{" "}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt=""
                    />{" "}
                  </label>
                </Link>
              </div>
            </div>
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
      {/* ...........modal 4 ends........... */}
    </>
  );
}
