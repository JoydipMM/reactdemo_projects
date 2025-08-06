"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Projectgallery() {
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

  return (
    <>
      <section className="slidergallery commonpadding">
        <div className="container">
          <h2 className="centertie">
            <span>ALUDECOR PROJECTS</span>
            <AnimatedText text=" Rainscreen Cladding Projects"/>
          </h2>
          <div className="premium_boxwrp">
            <Slider {...settings} className="commonSlider">
              <div className="premiumboxcont">
                <div className="animate_frame">
                  <div className="brands">
                    <Image fill={true} src="/images/brand-star.svg" alt="" />
                  </div>
                  <Image
                    src="/images/system/rainscreen1.jpg"
                    alt="Animated"
                    fill={true}
                  />
                </div>
              </div>

              <div className="premiumboxcont">
                <div className="animate_frame">
                  <div className="brands">
                    <Image fill={true} src="/images/brand-star.svg" alt="" />
                  </div>
                  <Image
                    src="/images/system/rainscreen2.jpg"
                    alt="Animated"
                    fill={true}
                  />
                </div>
              </div>

              <div className="premiumboxcont">
                <div className="animate_frame">
                  <div className="brands">
                    <Image fill={true} src="/images/brand-star.svg" alt="" />
                  </div>
                  <Image
                    src="/images/system/rainscreen3.jpg"
                    alt="Animated"
                    fill={true}
                  />
                </div>
              </div>

              <div className="premiumboxcont">
                <div className="animate_frame">
                  <div className="brands">
                    <Image fill={true} src="/images/brand-star.svg" alt="" />
                  </div>
                  <Image
                    src="/images/system/rainscreen4.jpg"
                    alt="Animated"
                    fill={true}
                  />
                </div>
              </div>

              <div className="premiumboxcont">
                <div className="animate_frame">
                  <div className="brands">
                    <Image fill={true} src="/images/brand-star.svg" alt="" />
                  </div>
                  <Image
                    src="/images/system/rainscreen2.jpg"
                    alt="Animated"
                    fill={true}
                  />
                </div>
              </div>
            </Slider>
            <Link href="#" className="common-btn">
              {" "}
              <label>
                {" "}
                View All
                <Image
                  width={34}
                  height={16}
                  src="/images/arrow-right.svg"
                  alt=""
                />
              </label>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
