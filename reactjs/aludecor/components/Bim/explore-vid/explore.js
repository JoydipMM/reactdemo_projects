import Image from "next/image";
import explorestyles from "@/components/Bim/explore-vid/explore.module.css";
import { useState } from "react";
import AnimatedText from "@/components/Framemotion/framemotion";
import Link from "next/link";

export default function ExploreType({ videoData, page = null }) {
  const allVideoData = videoData?.data?.content;
  const videoDatas = allVideoData?.items;
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
  return (
    <>
      <section className={explorestyles.vid_expmpper}>
        <div className="container">
          <h2 className="centertie">
            <span>{allVideoData?.pre_heading}</span>
            <AnimatedText text={allVideoData?.heading} />
          </h2>
          <div className={explorestyles.vid_explore_mper}>
            {videoDatas &&
              videoDatas.map((videoData, index) => {
                return (
                  <div
                    className={explorestyles.explorevidbox}
                    key={`videoData-${index + 1}`}
                  >
                    <div className={explorestyles.exploreimgcont}>
                      <div
                        className={explorestyles.overlay_vidiconexp}
                        onClick={() => {
                          videoData?.video_url == ""
                            ? ""
                            : openModal(index + 1, videoData?.video_url);
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
                        src={videoData?.image?.image_url}
                        alt="videoImage"
                        fill={true}
                      />
                    </div>
                    {page == "cmd" ? "" : <h3>{videoData?.title}</h3>}
                    <p>{videoData?.description}</p>
                    {page == "cmd" ? (
                      <Link
                        class="common-btn"
                        href={
                          videoData?.button_url == ""
                            ? "#"
                            : videoData?.button_url
                        }
                      >
                        <label>
                          learn More
                          <Image
                            alt=""
                            loading="lazy"
                            width="34"
                            height="16"
                            src="/images/arrow-right.svg"
                          />
                        </label>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
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
