import AnimatedText from "@/components/Framemotion/framemotion";
import introducingstyles from "@/components/acpLouvers/introducing/introducing.module.css";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import videostyles from "../../Bim/video/video.module.css";
import performancestyles from "../performance/performance.module.css";

export default function Performance({ performanceData }) {
  const allPerformanceData = performanceData.data?.content;
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
      <section
        className={`${performancestyles.performance_content} commonpadding`}
      >
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allPerformanceData?.heading} />
          </h2>
          <div className={`${introducingstyles.introwrp}`}>
            <div className={`${introducingstyles.leftintro} hoverarea`}>
              <div className={videostyles.videocont}>
                {!isPlaying && (
                  <div
                    className={videostyles.overlay_vidicon}
                    onClick={handlePlay}
                  >
                    <Image
                      fill={true}
                      src="/images/overlay_vidicon.svg"
                      alt="overlay_vidicon"
                    />
                  </div>
                )}
                {!isPlaying ? (
                  <Image
                    src={allPerformanceData?.video_thumb?.url}
                    fill={true}
                    alt="performanceData"
                    className="cursor-pointer"
                    onClick={handlePlay}
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={allPerformanceData?.video_link}
                    className={videostyles.videoPlayer}
                    onEnded={handleVideoEnd}
                    autoPlay
                  />
                )}
              </div>
            </div>

            <div className={introducingstyles.ritintro}>
              <div
                dangerouslySetInnerHTML={{
                  __html: allPerformanceData?.description
                }}
              ></div>

              <div className={performancestyles.btn_row}>
                <Link
                  href={
                    allPerformanceData?.button_1?.link == ""
                      ? "#"
                      : allPerformanceData?.button_1?.link
                  }
                  className="common-btn"
                >
                  <label>
                    {allPerformanceData?.button_1?.name}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt="right"
                    />
                  </label>
                </Link>

                <Link
                  href={
                    allPerformanceData?.button_2?.link == ""
                      ? "#"
                      : allPerformanceData?.button_2?.link
                  }
                  className="common-btn"
                >
                  <label>
                    {allPerformanceData?.button_2?.name}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt="right"
                    />
                  </label>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
