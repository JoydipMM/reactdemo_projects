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

export default function Finishes({ designData }) {
  const allDesignData = designData?.data?.content;
  const slidesImages = allDesignData?.items;
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
      <section className={`${metalPanelsstyles.shade} slidergallery`}>
        <div className="topadding_bottom">
          <div className="container">
            <h2 className="titlecenter">
              <span>{allDesignData?.pre_heading}</span>
              <AnimatedText text={allDesignData?.heading} />
            </h2>

            <div className="premium_boxwrp">
              <Slider {...settings} className="commonSlider">
                {slidesImages &&
                  slidesImages.map((slidesImage, index) => {
                    return (
                      <div
                        className="premiumboxcont"
                        key={`slideImage-${index}`}
                      >
                        <div className="animate_frame">
                          <div
                            className={`${designspacestyles.colorbox_imgcont} ${finishesstyles.colorbox_imgcont}`}
                          >
                            <Image
                              src={slidesImage?.image?.image_url}
                              alt="Color Shade Green"
                              fill="true"
                            />
                          </div>
                          <div
                            className={`${designspacestyles.colorbox_title} ${finishesstyles.colorbox_title}`}
                          >
                            <h3>{slidesImage?.title}</h3>
                            <p>{slidesImage?.description}</p>
                            <Link href="#" className="common-btn">
                              <label>
                                Request Custom Color Matching
                                <Image
                                  width={34}
                                  height={16}
                                  src="/images/arrow-right.svg"
                                  alt=""
                                />{" "}
                              </label>
                            </Link> 
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
              {/* <Link href="#" className="common-btn">
              <label>View All <Image width={34}  height={16} src="/images/arrow-right.svg"  alt=""/> </label>
            </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
