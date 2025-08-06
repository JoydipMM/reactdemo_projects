import Image from "next/image";
import explorestyles from "@/components/Bim/explore-vid/explore.module.css";
import { useState } from "react";

export default function ExploreTypevideo({ allVideoDatas }) {
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
      <section
        className={explorestyles.vid_expmpper}
        style={{ marginTop: "50px" }}
      >
        <div className={explorestyles.vid_explore_mper}>
          {allVideoDatas &&
            allVideoDatas.map((allVideoData, index) => {
              return (
                <div
                  className={explorestyles.explorevidbox}
                  key={`videoData-${index + 1}`}
                >
                  <div className={explorestyles.exploreimgcont}>
                    <div
                      className={explorestyles.overlay_vidiconexp}
                      onClick={() => {
                        allVideoData?.video_link == ""
                          ? ""
                          : openModal(index + 1, allVideoData?.video_link);
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
                      src={allVideoData?.video_thumbnail?.url}
                      alt=""
                      fill={true}
                    />
                  </div>
                  <h3>{allVideoData?.title}</h3>
                  <p>{allVideoData?.description}</p>
                </div>
              );
            })}
        </div>
      </section>

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
