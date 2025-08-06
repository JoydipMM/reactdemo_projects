import { useState, useRef } from "react";
import videostyles from "@/components/Bim/video/video.module.css";
import Image from "next/image";

export default function Video({ videoUrl = "" }) {
  const updatedVideoUrl = videoUrl;
  console.log("updatedVideoUrl", updatedVideoUrl);
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
                <Image fill={true} src="/images/overlay_vidicon.svg" alt="" />
              </div>
            )}
            {!isPlaying ? (
              <Image
                src="/images/fabricator/video-img.jpg"
                fill={true}
                alt=""
                className="cursor-pointer"
                onClick={handlePlay}
              />
            ) : (
              <video
                ref={videoRef}
                src={videoUrl == "" ? "#" : videoUrl}
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
