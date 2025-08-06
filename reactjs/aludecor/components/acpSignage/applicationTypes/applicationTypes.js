import Image from "next/image";

import AnimatedText from "@/components/Framemotion/framemotion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import appaltypesstyles from "@/components/acpSignage/applicationTypes/applicationTypes.module.css";
export default function ApplicationTypes({ applicationData }) {
  const allApplicationData = applicationData.data?.content;
  const applicationDatas = allApplicationData?.items;
  const applicationtypes = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
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
      <section
        className={`${appaltypesstyles.application_wrpmain} commonpadding`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allApplicationData?.heading} />
            <span>{allApplicationData?.sub_heading}</span>
          </h2>
          <div className={appaltypesstyles.applicationsldwrp}>
            <Slider {...applicationtypes} className="commonSlider">
              {applicationDatas?.map((applicationData, index) => (
                <div
                  className={appaltypesstyles.applitypesbox}
                  key={`applicationDataID-${index}`}
                >
                  <div className={appaltypesstyles.applicoverlay}>
                    <h3>{applicationData?.title}</h3>
                  </div>
                  <Image
                    src={applicationData?.image?.image_url}
                    alt="Outdoor Sign Boards"
                    fill={true}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
