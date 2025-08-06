"use client";
import premiumsolutionsstyles from "../premiumsolutions/premiumsolutions.module.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function PremiumSolutions({ carouselData }) {
  //console.log("carouselData", carouselData);
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const carouselSolData = carouselData?.data?.content;
  const carouselAllData = carouselSolData?.solutions;
  return (
    <>
      <section className={`${premiumsolutionsstyles.premiumwrp} commonpadding`}>
        <div className="container">
          <h2 className="centertie">
            <span>{carouselSolData?.preheading}</span>
            <AnimatedText text={carouselSolData?.heading} />
          </h2>

          <div className={premiumsolutionsstyles.premium_boxwrp}>
            <Slider {...settings} className="commonSlider">
              {carouselAllData.map((carouselEachData, index) => (
                <div
                  className={`${premiumsolutionsstyles.premiumboxcont}`}
                  key={carouselEachData.id || `carousel-${index}`}
                >
                  {/* <div className={premiumsolutionsstyles.premiumboximgcont}> */}
                  <div
                    className={`${premiumsolutionsstyles.animate_frame} hoverarea`}
                  >
                    <div className="brands">
                      <Image
                        fill={true}
                        src="/images/brand-star.svg"
                        alt="brand-star"
                      />
                    </div>
                    <Image
                      src={carouselEachData?.image?.url}
                      alt={carouselEachData?.image?.alt || "animated"}
                      fill={true}
                    />
                  </div>
                  <div className={premiumsolutionsstyles.premiumbox_textcont}>
                    <div className={premiumsolutionsstyles.boxpremium_left}>
                      <h3>
                        <AnimatedText text={carouselEachData?.title} />
                      </h3>
                      <p>{carouselEachData?.excerpt}</p>
                    </div>
                    <Link
                      href={carouselEachData?.view_more}
                      className="common-btn"
                    >
                      <label>
                        View More
                        <Image
                          width={34}
                          height={16}
                          src="/images/arrow-right.svg"
                          alt="arrow-righ"
                        />
                      </label>
                    </Link>
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
