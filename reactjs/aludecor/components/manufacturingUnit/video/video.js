"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import explorestyles from "@/components/Bim/explore-vid/explore.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import videostyles from "../video/video.module.css";

export default function VideoExplore({ exploreBimData }) {
  const allBuildingVideoData = exploreBimData.data?.content;
  const videoDatas = allBuildingVideoData?.items;
  const [isPlaying, setIsPlaying] = useState(false);
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

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section
        className={`slidergallery topadding_top ${videostyles.slidergallery}`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <span>{allBuildingVideoData?.pre_heading}</span>
            <AnimatedText text={allBuildingVideoData?.heading} />
          </h2>

          <div className={`premium_boxwrp ${videostyles.premium_boxwrp}`}>
            <Slider {...settings} className="commonSlider">
              {videoDatas &&
                videoDatas.map((videoData, index) => {
                  return (
                    <div className="box-content" key={`videoData-${index + 1}`}>
                      <div
                        className="pic"
                        onClick={() => {
                          videoData?.video_url == ""
                            ? ""
                            : openModal(index + 1, videoData?.video_url);
                        }}
                      >
                        <Image
                          src={videoData?.image?.image_url}
                          alt="video"
                          fill={true}
                        />
                        <div className="brands">
                          <Image
                            alt="star"
                            fill={true}
                            src="/images/brand-star.svg"
                          />
                        </div>
                      </div>
                      <p>{videoData?.description}</p>
                    </div>
                  );
                })}
            </Slider>
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
