"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Residentialbuildings({ residentialData }) {


  const carouselSolData = residentialData?.data?.content || {};
  const carouselAllData = carouselSolData?.features || []; // Provide a fallback empty array
  //console.log("carouselAllData", carouselAllData);
  return (
    <section className={` commonpadding`}>
      <div className="container">
        <h2 className="centertie">
          <span>{carouselSolData?.pre_heading}</span>
          <AnimatedText text={carouselSolData?.heading} />
        </h2>

        {/* <div className={premiumsolutionsstyles.premium_boxwrp}>
          <Slider {...settings} className="commonSlider">
            {carouselAllData &&
              carouselAllData.map((carouselData, index) => {
                return (
                  <div
                    className={`${premiumsolutionsstyles.premiumboxcont}`}
                    key={`carousel-${index}`}
                  >
                    <div
                      className={`${premiumsolutionsstyles.animate_frame} hoverarea`}
                    >
                      <div className="brands">
                        <Image
                          fill={true}
                          src="/images/brand-star.svg"
                          alt=""
                        />
                      </div>
                      <Image
                        src={carouselData?.image?.image_url}
                        alt="Animated"
                        fill={true}
                      />
                    </div>
                    <div className={premiumsolutionsstyles.premiumbox_textcont}>
                      <div className={premiumsolutionsstyles.boxpremium_left}>
                        <h3>
                          <AnimatedText text={carouselData?.title} />
                        </h3>
                        <p>{carouselData?.description}</p>
                      </div>
                      <Link href="#" className="common-btn">
                        <label>
                          {carouselData?.btn_text}
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
                );
              })}
          </Slider>
        </div> */}

        <div className="sswraper">
          
          <div className="sstextpart">
            <h2>
              <AnimatedText text="Morbi auctor purus velit, et aliquet odio congue ut." />
            </h2>
            <p>
              Quisque auctor ac orci congue congue. Integer efficitur ipsum eget ante maximus rutrum. Phasellus in ex sagittis, volutpat dolor sit amet, venenatis magna. Morbi et nunc lobortis, mattis diam ut, venenatis urna.</p>

            <p>Mauris nisi arcu, posuere ut nisi quis, placerat consectetur lorem. Donec ultrices pulvinar elit, et eleifend velit faucibus et. Aenean tristique, risus fringilla placerat tincidunt, ipsum leo rhoncus nisi, vel commodo eros justo ac mauris. Morbi blandit laoreet imperdiet.
          </p>
        </div>
        <div className="ssimagepart hoverarea">
            <Image
              fill={true}
              src="/images/solutions/res-5.jpg"
              alt=""
              className="ssimage"
            />
            <div className="brands">
              <Image
                fill={true}
                src="/images/brand-star.svg"
                alt="brand-star"
              />
            </div>
          </div>
      </div>
    </div>
    </section >
  );
}
