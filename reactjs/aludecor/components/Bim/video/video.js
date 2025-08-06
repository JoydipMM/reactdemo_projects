import { useState, useRef } from "react";
import videostyles from "@/components/Bim/video/video.module.css";
import Image from "next/image";

export default function Video({ buildingInformationData }) {
  const allBuildingVideoData = buildingInformationData.data?.content;
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
      <section>
        <div className="container">
          <div className={videostyles.videocont}>
            {!isPlaying && (
              <div className={videostyles.overlay_vidicon} onClick={handlePlay}>
                <Image
                  fill={true}
                  src="/images/overlay_vidicon.svg"
                  alt="overlay_vidicon"
                />
              </div>
            )}
            {!isPlaying ? (
              <Image
                src={allBuildingVideoData?.image?.url}
                fill={true}
                alt="video"
                className="cursor-pointer"
                onClick={handlePlay}
              />
            ) : (
              <video
                ref={videoRef}
                src={allBuildingVideoData?.video_url}
                className={videostyles.videoPlayer}
                onEnded={handleVideoEnd}
                autoPlay
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
