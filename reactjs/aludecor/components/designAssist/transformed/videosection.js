import testmonialscptyles from "@/components/channelPartners/testimonials/testimnials.module.css";
import { useState } from "react";
import Image from "next/image";
export default function VideoSection({ videoData }) {
  const allVideoData = videoData?.data?.content;
  const videoDatas = allVideoData?.testimonials;
  console.log("videoDatas", videoDatas);
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
      <section>
        <div className="container">
          <div className={testmonialscptyles.vid_explore_mper}>
            {videoDatas &&
              videoDatas.map((videoData, index) => {
                return (
                  <div
                    className={testmonialscptyles.explorevidbox}
                    key={`videoData-${index + 1}`}
                  >
                    <div className={testmonialscptyles.exploreimgcont}>
                      <div
                        className={testmonialscptyles.overlay_vidiconexp}
                        onClick={() => {
                          videoData?.video == ""
                            ? ""
                            : openModal(index + 1, videoData?.video);
                        }}
                      >
                        <Image
                          src="/images/overlay_vidicon.svg"
                          alt="review_data"
                          width={61}
                          height={61}
                        />
                      </div>
                      <Image
                        src={videoData?.thumbnail?.url || videoData?.thumbnail}
                        alt="step1_vid"
                        fill={true}
                      />
                    </div>

                    <p>{videoData?.review_data || videoData?.review}</p>
                    <div className={testmonialscptyles.testim_wrpbox}>
                      <Image
                        src="/images/testimonial_icon.svg"
                        alt="testimonial_icon"
                        width={60}
                        height={60}
                      />
                      <div className={testmonialscptyles.testim_wrpbox_desc}>
                        <p>– {videoData?.client_name || videoData?.name} </p>
                        <p>{videoData?.company || videoData?.designation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {currentModal && (
        <div className={testmonialscptyles.modalwrper}>
          <div className={testmonialscptyles.vidmodal_mwrp}>
            <button
              onClick={closeModal}
              className={testmonialscptyles.close_popup}
            >
              Close
            </button>
            <div className={testmonialscptyles.video_modalcont}>
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
