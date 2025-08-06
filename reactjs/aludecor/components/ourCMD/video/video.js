import Image from "next/image";
import explorestyles from "@/components/Bim/explore-vid/explore.module.css";
import { useState } from "react";
import AnimatedText from "@/components/Framemotion/framemotion";
import Link from "next/link";

export default function Video() {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [isOpenModal4, setIsOpenModal4] = useState(false);
  return (
    <>
      <section className={`${explorestyles.vid_expmpper} topadding_top`}>
        <div className="container">
          <h2 className="centertie">
            <span>Explore Our VIDEO ON BIM</span>
            <AnimatedText text="View All Engagements" />
          </h2>
          <div className={explorestyles.vid_explore_mper}>
            <div className={explorestyles.explorevidbox}>
              <div className={explorestyles.exploreimgcont}>
                <div
                  className={explorestyles.overlay_vidiconexp}
                  onClick={() => setIsOpenModal1(true)}
                >
                  <Image
                    src="/images/overlay_vidicon.svg"
                    alt=""
                    width={61}
                    height={61}
                  />
                </div>
                <Image src="/images/step1_vid.png" alt="" fill={true} />
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar vitae neque sed malesuada.
              </p>
              <Link class="common-btn" href="#"><label>learn More<Image alt="" loading="lazy" width="34" height="16" src="/images/arrow-right.svg" /></label></Link>
            </div>

            <div className={explorestyles.explorevidbox}>
              <div className={explorestyles.exploreimgcont}>
                <div
                  className={explorestyles.overlay_vidiconexp}
                  onClick={() => setIsOpenModal2(true)}
                >
                  <Image
                    src="/images/overlay_vidicon.svg"
                    alt=""
                    width={61}
                    height={61}
                  />
                </div>
                <Image src="/images/step2_vid.png" alt="" fill={true} />
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar vitae neque sed malesuada.
              </p>
              <Link class="common-btn" href="#"><label>learn More<Image alt="" loading="lazy" width="34" height="16" src="/images/arrow-right.svg" /></label></Link>
            </div>

            <div className={explorestyles.explorevidbox}>
              <div className={explorestyles.exploreimgcont}>
                <div
                  className={explorestyles.overlay_vidiconexp}
                  onClick={() => setIsOpenModal3(true)}
                >
                  <Image
                    src="/images/overlay_vidicon.svg"
                    alt=""
                    width={61}
                    height={61}
                  />
                </div>
                <Image src="/images/step3_vid.png" alt="" fill={true} />
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar vitae neque sed malesuada.
              </p>
              <Link class="common-btn" href="#"><label>learn More<Image alt="" loading="lazy" width="34" height="16" src="/images/arrow-right.svg" /></label></Link>
            </div>

            <div className={explorestyles.explorevidbox}>
              <div className={explorestyles.exploreimgcont}>
                <div
                  className={explorestyles.overlay_vidiconexp}
                  onClick={() => setIsOpenModal4(true)}
                >
                  <Image
                    src="/images/overlay_vidicon.svg"
                    alt=""
                    width={61}
                    height={61}
                  />
                </div>
                <Image src="/images/step4_vid.png" alt="" fill={true} />
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar vitae neque sed malesuada.
              </p>
              <Link class="common-btn" href="#"><label>learn More<Image alt="" loading="lazy" width="34" height="16" src="/images/arrow-right.svg" /></label></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ...........modal 1 start........... */}
      {isOpenModal1 && (
        <div className={explorestyles.modalwrper}>
          <div className={explorestyles.vidmodal_mwrp}>
            <button
              onClick={() => setIsOpenModal1(false)}
              className={explorestyles.close_popup}
            >
              Close
            </button>
            <div className={explorestyles.video_modalcont}>
              <iframe
                src="https://www.youtube.com/embed/q6bdXAYk52k&rel=0"
                height="300"
                width="100%"
                title="Aludecor Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {/* ...........modal 1 ends........... */}
      {/* ...........modal 2 starts........... */}
      {isOpenModal2 && (
        <div className={explorestyles.modalwrper}>
          <div className={explorestyles.vidmodal_mwrp}>
            <button
              onClick={() => setIsOpenModal2(false)}
              className={explorestyles.close_popup}
            >
              Close
            </button>
            <div className={explorestyles.video_modalcont}>
              <iframe
                src="https://www.youtube.com/embed/q6bdXAYk52k&rel=0"
                height="300"
                width="100%"
                title="Aludecor Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {/* ...........modal 2 ends........... */}

      {/* ...........modal 3 starts........... */}
      {isOpenModal3 && (
        <div className={explorestyles.modalwrper}>
          <div className={explorestyles.vidmodal_mwrp}>
            <button
              onClick={() => setIsOpenModal3(false)}
              className={explorestyles.close_popup}
            >
              Close
            </button>
            <div className={explorestyles.video_modalcont}>
              <iframe
                src="https://www.youtube.com/embed/q6bdXAYk52k&rel=0"
                height="300"
                width="100%"
                title="Aludecor Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {/* ...........modal 3 ends........... */}

      {/* ...........modal 4 starts........... */}
      {isOpenModal4 && (
        <div className={explorestyles.modalwrper}>
          <div className={explorestyles.vidmodal_mwrp}>
            <button
              onClick={() => setIsOpenModal4(false)}
              className={explorestyles.close_popup}
            >
              Close
            </button>
            <div className={explorestyles.video_modalcont}>
              <iframe
                src="https://www.youtube.com/embed/q6bdXAYk52k&rel=0"
                height="300"
                width="100%"
                title="Aludecor Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {/* ...........modal 4 ends........... */}
    </>
  );
}
