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
import whyPartnerstyles from "@/components/Fabricator/whyPartner/whyPartner.module.css";

export default function Sustainable({ sustainableData }) {
  const allSustainableData = sustainableData?.data?.content;
  const sustainableDatas = allSustainableData?.sustainable;
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
              <span>{allSustainableData?.preheading}</span>
              <AnimatedText text={allSustainableData?.heading} />
            </h2>
            <div className="premium_boxwrp">
              <Slider {...settings} className="commonSlider">
                {sustainableDatas &&
                  sustainableDatas.map((sustainableData, index) => {
                    return (
                      <div
                        className="premiumboxcont"
                        key={`sustainableDataID-${index}`}
                      >
                        <div className="animate_frame">
                          <div
                            className={`${designspacestyles.colorbox_imgcont} ${finishesstyles.colorbox_imgcont} ${whyPartnerstyles.partnerareaimg}`}
                          >
                            <Image
                              src={sustainableData?.image?.url}
                              alt="Color Shade Green"
                              fill="true"
                            />
                          </div>
                          <div
                            className={`${designspacestyles.colorbox_title} ${finishesstyles.colorbox_title}`}
                          >
                            <h3>{sustainableData?.title}</h3>
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
