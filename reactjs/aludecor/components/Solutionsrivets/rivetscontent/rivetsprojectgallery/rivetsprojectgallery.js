"use client";
import Image from "next/image";
import Link from "next/link";
import rivetsprojectgallerystyles from "../rivetsprojectgallery/rivetsprojectgallery.module.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Rivetsprojectgallery({ galleryData }) {
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };
  const revitGalleryContentData = galleryData?.data?.content;
  const galleryAllData = revitGalleryContentData?.gallery;
  return (
    <>
      <section
        className={`${rivetsprojectgallerystyles.rivettypesslider} slidergallery topadding_bottom`}
      >
        <div
          className={`${rivetsprojectgallerystyles.rivettypesslidercontent} container`}
        >
          <h2 className="centertie">
            <span>{revitGalleryContentData?.preheading}</span>
            <AnimatedText text={revitGalleryContentData?.heading} />
          </h2>

          <div className="premium_boxwrp">
            <Slider
              {...settings}
              className={`${rivetsprojectgallerystyles.rivettypescommonslider} commonSlider`}
            >
              {galleryAllData.map((galleryData) => (
                <div
                  className="premiumboxcont"
                  key={`rivetgallery-${galleryData.id}`}
                >
                  <div className="animate_frame hoverarea">
                    <div className="brands">
                      <Image fill={true} src="/images/brand-star.svg" alt="" />
                    </div>
                    <Image
                      src={galleryData?.image_url}
                      alt="Animated"
                      fill={true}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
