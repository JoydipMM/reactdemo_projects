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

export default function Whypartner({ partnerData }) {
  const allData = partnerData?.data?.content;
  const partnerDatas = allData?.items;
  //console.log(allData);
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
        <div className="commonpadding">
          <div className="container">
            <h2 className="titlecenter">
              <span>{allData?.pre_heading}</span>
              <AnimatedText text={allData?.heading} />
            </h2>
            <p>{allData?.sub_heading}</p>
            <div className="premium_boxwrp">
              <Slider {...settings} className="commonSlider">
                {partnerDatas?.map((partnerData, index) => (
                  <div
                    className="premiumboxcont"
                    key={`partnerDataId-${index}`}
                  >
                    <div className="animate_frame">
                      <div
                        className={`${designspacestyles.colorbox_imgcont} ${finishesstyles.colorbox_imgcont} ${whyPartnerstyles.partnerareaimg}`}
                      >
                        <Image
                          src={partnerData?.image?.image_url}
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div
                        className={`${designspacestyles.colorbox_title} ${finishesstyles.colorbox_title}`}
                      >
                        <h3>{partnerData?.name}</h3>
                        <p>{partnerData?.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
