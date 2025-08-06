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
import exportcertificationstyles from "../certification/exportcertification.module.css";
import CertificateModal from "@/components/copperCompositePanels/certificationSafety/certificate-model";
import { useState } from "react";

export default function Certification({ certificateData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const allCertificateData = certificateData?.data?.content;
  const certificates = allCertificateData?.certificate;
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
  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };
  return (
    <>
      <section
        className={`${metalPanelsstyles.shade} ${certificationstyles.slidergallery} ${exportcertificationstyles.exportgallery} slidergallery`}
      >
        <div className="topadding_top">
          <div className="container">
            <h2 className="centertie">
              <span>{allCertificateData?.pre_heading}</span>
              <AnimatedText text={allCertificateData?.heading} />
            </h2>

            <div className="premium_boxwrp">
              <Slider {...settings} className="commonSlider">
                {certificates &&
                  certificates.map((certificate, index) => {
                    return (
                      <div
                        className="premiumboxcont"
                        key={`certificates-${index}`}
                      >
                        {/* <Link href="#"> */}
                        <div className="animate_frame">
                          <div
                            className={`${designspacestyles.colorbox_imgcont} ${finishesstyles.colorbox_imgcont} ${certificationstyles.colorbox_imgcont} ${exportcertificationstyles.colorbox_imgcont}`}
                          >
                            <button
                              onClick={() =>
                                handleCertificateClick(certificate)
                              }
                            >
                              <Image
                                src={certificate?.image?.url}
                                alt="certificate"
                                fill="true"
                              />
                            </button>
                          </div>
                          <div
                            className={`${designspacestyles.colorbox_title} ${certificationstyles.colorbox_title}`}
                          >
                            {certificate?.title}
                          </div>
                        </div>
                        {/* </Link> */}
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
        <CertificateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageUrl={selectedCertificate?.image?.url}
        />
      </section>
    </>
  );
}
