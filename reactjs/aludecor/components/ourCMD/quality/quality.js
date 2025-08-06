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
import qualitystyles from "../quality/quality.module.css";

export default function Quality({ qualityData }) {
  const allQualityData = qualityData?.data?.content;
  const qualityItems = allQualityData?.items;
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

  return (
    <>
      <section
        className={`${metalPanelsstyles.shade} ${qualitystyles.slidergallery} slidergallery`}
      >
        <div className="topadding_bottom">
          <div className="container">
            <h2 className="titlecenter">
              <span>{allQualityData?.pre_heading}</span>
              <AnimatedText text={allQualityData?.heading} />
            </h2>

            <div className="premium_boxwrp">
              <Slider {...settings} className="commonSlider">
                {qualityItems &&
                  qualityItems.map((qualityItem, index) => {
                    return (
                      <div
                        className="premiumboxcont"
                        key={`qualityItemId-${index}`}
                      >
                        {/* <Link href="#"> */}
                        <div className="animate_frame">
                          <div
                            className={`${designspacestyles.colorbox_imgcont} ${finishesstyles.colorbox_imgcont}`}
                          >
                            <Image
                              src={qualityItem?.image?.image_url}
                              alt="Color Shade Green"
                              fill="true"
                            />
                            <div className="brands">
                              <Image
                                fill={true}
                                src="/images/brand-star.svg"
                                alt="brand"
                              />
                            </div>
                          </div>
                          <div
                            className={`${designspacestyles.colorbox_title} ${finishesstyles.colorbox_title} ${qualitystyles.colorbox_title} `}
                          >
                            <h3>{qualityItem?.title}</h3>
                            <p>{qualityItem?.content}</p>
                          </div>
                        </div>
                        {/* </Link> */}
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
