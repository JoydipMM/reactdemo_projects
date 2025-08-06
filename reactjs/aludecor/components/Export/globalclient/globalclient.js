import AnimatedText from "@/components/Framemotion/framemotion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import readystyles from "@/components/Projectsgallery/ready-work/ready.module.css";
import globalclientstyles from "../globalclient/globalclient.module.css";
import React, { useState, useEffect, useRef } from "react";

import videostyles from "../../Bim/video/video.module.css";

export default function GlobalClient({ globalData }) {
  const allData = globalData?.data?.content;
  const allClientDatas = allData?.clients;
  const client = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
      <section className={`slidergallery ${globalclientstyles.client_slide}`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allData?.pre_heading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>
          <div className={globalclientstyles.maint_slider}>
            <Slider {...client} className="commonSlider">
              {allClientDatas &&
                allClientDatas.map((allClientData, index) => {
                  return (
                    <div
                      className={`${readystyles.readywrk} ${globalclientstyles.client_content}`}
                      key={`allClientDataID-${index}`}
                    >
                      <div
                        className={`${readystyles.readyleft} ${globalclientstyles.left}`}
                      >
                        <h2>
                          <AnimatedText text={allClientData?.title} />
                        </h2>
                        <p>{allClientData?.description}</p>
                      </div>
                      <div
                        className={`${readystyles.readyrit} ${globalclientstyles.right}`}
                      >
                        <div className="readtframe">
                          <Image
                            fill={true}
                            src="/images/readywork-frame.svg"
                            alt=""
                          />
                        </div>
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
                              src={allClientData?.image?.url}
                              fill={true}
                              alt="image"
                              className="cursor-pointer"
                              onClick={handlePlay}
                            />
                          ) : (
                            <video
                              ref={videoRef}
                              src={allClientData?.video_url}
                              className={videostyles.videoPlayer}
                              onEnded={handleVideoEnd}
                              autoPlay
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
