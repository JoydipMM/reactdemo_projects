import { useState, useRef } from "react";
import videostyles from "@/components/Bim/video/video.module.css";
import revideostyles from "@/components/resources/video/video.module.css";
import Image from "next/image";

export default function Video({ allImpact }) {
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
          <div
            className={`${videostyles.videocont} ${revideostyles.videocont}`}
          >
            {!isPlaying && (
              <div
                className={`${videostyles.overlay_vidicon} ${revideostyles.overlay_vidicon}`}
                onClick={handlePlay}
              >
                <Image fill={true} src="/images/play.png" alt="play" />
              </div>
            )}
            {!isPlaying ? (
              <Image
                src={allImpact?.image_url}
                fill={true}
                alt="impactImage"
                className="cursor-pointer"
                onClick={handlePlay}
              />
            ) : (
              <video
                ref={videoRef}
                src={allImpact?.video_url}
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
