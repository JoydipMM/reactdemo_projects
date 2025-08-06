"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import AnimatedText from "@/components/Framemotion/framemotion";
import videostyles from "../../Bim/video/video.module.css";
import explorestyles from "@/components/Bim/explore-vid/explore.module.css";
import effortsstyles from "../efforts/efforts.module.css";

export default function Efforts({ effortsData }) {
  const allData = effortsData?.data?.content;
  const allEffortsDatas = allData?.highlights;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [currentModal, setCurrentModal] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

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
      <section className="topadding_top">
        <div className="container">
          <div className={`${effortsstyles.efforts_content}`}>
            <div className={`${effortsstyles.left}`}>
              <h2>
                <AnimatedText text={allData?.heading} />
              </h2>
              <p>{allData?.description}</p>

              <h3>
                <AnimatedText text="CSR highlights" />
              </h3>
              <div className={`${effortsstyles.video_list}`}>
                {allEffortsDatas?.map((allEffortsData, index) => (
                  <div className="video-box" key={`allEffortsDataID-${index}`}>
                    <div
                      className={`${explorestyles.exploreimgcont} ${effortsstyles.exploreimgcont}`}
                    >
                      <div
                        className={`${explorestyles.overlay_vidiconexp} ${effortsstyles.overlay_vidiconexp}`}
                        onClick={() => {
                          allEffortsData?.video == ""
                            ? ""
                            : openModal(index + 1, allEffortsData?.video);
                        }}
                      >
                        <Image
                          src="/images/overlay_vidicon.svg"
                          alt="overlay_vidicon"
                          width={61}
                          height={61}
                        />
                      </div>
                      <Image
                        src={allEffortsData?.video_thumb?.url}
                        alt="video_thumb"
                        fill={true}
                      />
                    </div>
                    <p>{allEffortsData?.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${effortsstyles.right}`}>
              <div className={videostyles.videocont}>
                {!isPlaying && (
                  <div
                    className={videostyles.overlay_vidicon}
                    onClick={handlePlay}
                  >
                    <Image
                      fill={true}
                      src="/images/overlay_vidicon.svg"
                      alt=""
                    />
                  </div>
                )}
                {!isPlaying ? (
                  <Image
                    src={allData?.featured_video_thumb?.url}
                    fill={true}
                    alt="featured_video_thumb"
                    className="cursor-pointer"
                    onClick={handlePlay}
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={allData?.featured_video}
                    className={videostyles.videoPlayer}
                    onEnded={handleVideoEnd}
                    autoPlay
                  />
                )}
              </div>
            </div>
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
