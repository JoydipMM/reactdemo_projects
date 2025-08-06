import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutstyles from "../about/about.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";

const slides = [
  { id: 1, image: "/images/product/solid_aluminium/about/about1.jpg" },
  { id: 2, image: "/images/product/solid_aluminium/about/about2.jpg" },
  { id: 3, image: "/images/product/solid_aluminium/about/about3.jpg" },
  { id: 4, image: "/images/product/solid_aluminium/about/about4.jpg" }
];

export default function About({ aboutData }) {
  const allAboutData = aboutData.data?.content;
  const allAboutImages = allAboutData?.images;
  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(mainSlider.current);
    setNav2(thumbSlider.current);
  }, []);

  const mainSettings = {
    asNavFor: nav2,
    arrows: false,
    fade: true
  };

  const thumbSettings = {
    asNavFor: nav1,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    loop: false
  };

  return (
    <section>
      <div className="container">
        <div className={aboutstyles.aboutwrp}>
          <div className={aboutstyles.aboutleft}>
            <div className={aboutstyles.aboutslider}>
              <div className={aboutstyles.main_slider}>
                <Slider {...mainSettings} ref={mainSlider}>
                  {allAboutImages.map((allAboutImage, index) => (
                    <div key={index}>
                      <Image
                        src={allAboutImage?.image?.image_url}
                        alt={`Main ${index}`}
                        fill={true}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={aboutstyles.thumbnail_slider}>
                <Slider {...thumbSettings} ref={thumbSlider}>
                  {allAboutImages.map((allAboutImage, index) => (
                    <div key={index}>
                      <div className={aboutstyles.thumbnailbox}>
                        <Image
                          src={allAboutImage?.image?.image_url}
                          alt={`Thumb ${index}`}
                          width={218}
                          height={218}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className={aboutstyles.aboutright}>
            <h2>
              <AnimatedText text={allAboutData?.heading} />
            </h2>
            <p dangerouslySetInnerHTML={{ __html: allAboutData?.content }}></p>
          </div>
        </div>
      </div>
    </section>
  );
}
