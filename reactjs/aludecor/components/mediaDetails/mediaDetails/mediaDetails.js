import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import producttpestyles from "../../Bim/product-type/producttpe.module.css"; // Import CSS file
import mediastyles from "../../resourcesMedia/mediaKit/mediaKit.module.css";
import mediadetstyles from "../mediaDetails/mediaDetails.module.css";
import videostyles from "../../Bim/video/video.module.css";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

// Reusable Dropdown Component

export default function MediaDetails() {
  const router = useRouter();
  const { query } = router;
  const mediaSlug = query.slug ?? "";
  const [isPlaying, setIsPlaying] = useState(false);
  const [allData, setAllData] = useState(null);
  const [downloadData, setDownloadData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const toastId = toast.loading("Loading ...");

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_IMAGE_URL}media/media-details?media_slug=${mediaSlug}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        console.log(data);
        setDownloadData(data);
        setAllData(data.data.content);
        setIsLoading(false);
      } catch (error) {
        toast.error(
          `Failed Fetching Data: ${error.message || "Network error"}`
        );
      } finally {
        setIsLoading(false);
        toast.dismiss(toastId);
      }
    };
    fetchData();
  }, []);

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
      <section className="commonpadding">
        <div className="container">
          <div
            className={`${producttpestyles.tabwrer} ${mediastyles.mediamwrper}`}
          >
            {/* Dynamic Tab Content */}
            {/* <div className={producttpestyles.tabContent}>{getContent()}</div> */}
            <div className={producttpestyles.tabContent}>
              <div className={producttpestyles.detailswrp}>
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
                      src={
                        allData && allData?.video_thumbnail?.url == ""
                          ? "#"
                          : allData?.video_thumbnail?.url
                      }
                      fill={true}
                      alt=""
                      className="cursor-pointer"
                      onClick={handlePlay}
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      src={allData?.video}
                      className={videostyles.videoPlayer}
                      onEnded={handleVideoEnd}
                      autoPlay
                    />
                  )}
                </div>
                <div
                  className={mediadetstyles.conttextwrp}
                  dangerouslySetInnerHTML={{ __html: allData?.content }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
