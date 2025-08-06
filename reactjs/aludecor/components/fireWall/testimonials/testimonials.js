import clientstyles from "@/components/Home/client/client.module.css";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";
import videostyles from "../../Bim/video/video.module.css";
import testimonialsstyle from "../testimonials/testimonials.module.css";

export default function Testimonials({ testimonialData }) {
  const allTestimonyData = testimonialData.data?.content;
  const labTestimonyDatas = allTestimonyData?.testimonials;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <h2 className="centertie">
            <span>{allTestimonyData?.preheading}</span>
            <AnimatedText text={allTestimonyData?.heading} />
          </h2>

          <div className={testimonialsstyle.testimonials_content}>
            <div className="left">
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
                    src={allTestimonyData?.video_thumb?.url}
                    fill={true}
                    alt="video_thumb"
                    className="cursor-pointer"
                    onClick={handlePlay}
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={allTestimonyData?.video_file}
                    className={videostyles.videoPlayer}
                    onEnded={handleVideoEnd}
                    autoPlay
                  />
                )}
              </div>
            </div>
            <div className="right">
              {labTestimonyDatas?.map((labTestimonyData, index) => (
                <div
                  className={`${clientstyles.client_box} ${testimonialsstyle.client_box}`}
                  key={`labTestimonyDataID-${index}`}
                >
                  <div className={clientstyles.categry_box}>
                    {labTestimonyData?.category}
                  </div>
                  <div className={clientstyles.contentbox}>
                    {labTestimonyData?.review}
                  </div>

                  <div className={clientstyles.namebox}>
                    <Image
                      src="/images/clientprofile.svg"
                      alt="Clientprofile"
                      width={60}
                      height={60}
                    />
                    <div className={clientstyles.namebox_title}>
                      – {labTestimonyData.name}
                      <span>{labTestimonyData.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
