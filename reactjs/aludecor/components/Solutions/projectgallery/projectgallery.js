"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Projectgallery({ solGalleryData }) {
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
  const solGalleryContentData = solGalleryData?.data?.content;
  const galleryAllData = solGalleryContentData?.projects;
  return (
    <>
      <section className="slidergallery topadding_top">
        <div className="container">
          <h2 className="titlecenter">
            <span>{solGalleryContentData?.preheading}</span>
            <AnimatedText text={solGalleryContentData?.heading} />
          </h2>

          <div className="premium_boxwrp">
            <Slider {...settings} className="commonSlider">
              {galleryAllData.map((galleryData) => (
                <div
                  className="premiumboxcont"
                  key={`gallery-${galleryData.id}`}
                >
                  <Link href="/">
                    <div className="animate_frame hoverarea">
                      <div className="brands">
                        <Image
                          fill={true}
                          src="/images/brand-star.svg"
                          alt="brand-star"
                        />
                      </div>
                      <Image
                        src={galleryData?.image_link}
                        alt="Animated"
                        fill={true}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
            <Link href="/solutions/projectsgallery" className="common-btn">
              {" "}
              <label>
                {" "}
                View All
                <Image
                  width={34}
                  height={16}
                  src="/images/arrow-right.svg"
                  alt="arrow-right"
                />
              </label>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
