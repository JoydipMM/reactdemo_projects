"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import designspacestyles from "@/components/Home/designSpace/designSpace.module.css";
import metalPanelsstyles from "@/components/Product/metalPanels/metalPanels.module.css";
import finishesstyles from "@/components/residentialSolutions/finishes/finishes.module.css";
import certificationstyles from "@/components/residentialSolutions/certification/certification.module.css";
import exportcertificationstyles from "@/components/Export/certification/exportcertification.module.css"

export default function Certification() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
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
      <section className={`${metalPanelsstyles.shade} ${certificationstyles.slidergallery} ${exportcertificationstyles.exportgallery} slidergallery`}>
        <div className="topadding_top">
          <div className="container">
            <h2 className="centertie">
              <span>certification badges</span>
              <AnimatedText text="Certifications that Back FireWall’s Claim" />
            </h2>

            <div className="premium_boxwrp">
              <Slider {...settings} className="commonSlider">
                <div className="premiumboxcont">
                  <Link href="#">
                    <div className="animate_frame">
                      <div className={`${designspacestyles.colorbox_imgcont} ${finishesstyles.colorbox_imgcont} ${certificationstyles.colorbox_imgcont}  ${exportcertificationstyles.colorbox_imgcont}`}>
                        <Image
                          src="/images/product/firewall/certificate-1.png"
                          alt="certificate"
                          fill="true"
                        />
                      </div>
                      <div className={`${designspacestyles.colorbox_title} ${certificationstyles.colorbox_title}`}>
                        LEED
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="premiumboxcont">
                  <Link href="#">
                    <div className="animate_frame">
                      <div className={`${designspacestyles.colorbox_imgcont} ${finishesstyles.colorbox_imgcont} ${certificationstyles.colorbox_imgcont}  ${exportcertificationstyles.colorbox_imgcont}`}>
                        <Image
                          src="/images/product/firewall/certificate-2.png"
                          alt="certificate"
                          fill="true"
                        />
                      </div>
                      <div className={`${designspacestyles.colorbox_title} ${certificationstyles.colorbox_title}`}>
                        GRIHA
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="premiumboxcont">
                  <Link href="#">
                    <div className="animate_frame">
                      <div className={`${designspacestyles.colorbox_imgcont} ${finishesstyles.colorbox_imgcont} ${certificationstyles.colorbox_imgcont}  ${exportcertificationstyles.colorbox_imgcont}`}>
                        <Image
                          src="/images/product/firewall/certificate-3.png"
                          alt="certificate"
                          fill="true"
                        />
                      </div>
                      <div className={`${designspacestyles.colorbox_title} ${certificationstyles.colorbox_title}`}>
                        BREEAM
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="premiumboxcont">
                  <Link href="#">
                    <div className="animate_frame">
                      <div className={`${designspacestyles.colorbox_imgcont} ${finishesstyles.colorbox_imgcont} ${certificationstyles.colorbox_imgcont}  ${exportcertificationstyles.colorbox_imgcont}`}>
                        <Image
                          src="/images/product/firewall/certificate-4.png"
                          alt="certificate"
                          fill="true"
                        />
                      </div>
                      <div className={`${designspacestyles.colorbox_title} ${certificationstyles.colorbox_title}`}>
                        Class A Fire Rating
                      </div>
                    </div>
                  </Link>
                </div>

              </Slider>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
