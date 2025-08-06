import AnimatedText from "@/components/Framemotion/framemotion";
import maintenancestyles from "../maintenance/maintenance.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
export default function Maintenance({ exploreData }) {
  const allExploreData = exploreData.data?.content;
  const exploreGuideDatas = allExploreData?.items;
  const aftercare = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
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
      <section className="slidergallery topadding_top">
        <div className="container">
          <h2 className="titlecenter">
            <span>{allExploreData?.pre_heading}</span>
            <AnimatedText text={allExploreData?.heading} />
          </h2>
          <div className={maintenancestyles.maint_slider}>
            <Slider {...aftercare} className="commonSlider">
              {exploreGuideDatas?.map((installGuideData, index) => (
                <div
                  className={maintenancestyles.maintmainbox}
                  key={`installGuideDataID-${index}`}
                >
                  <div
                    className={`${maintenancestyles.maint_innerbox} hoverarea`}
                  >
                    <div className="brands">
                      <Image
                        fill={true}
                        src="/images/brand-star.svg"
                        alt="star"
                      />
                    </div>

                    <Image
                      src={installGuideData?.image?.image_url}
                      alt="Projects"
                      fill={true}
                    />
                  </div>
                  <h3>{installGuideData?.title}</h3>
                  <p>{installGuideData?.description}</p>
                  <Link
                    href={
                      installGuideData?.button_link == ""
                        ? "#"
                        : installGuideData?.button_link
                    }
                    className="common-btn"
                  >
                    <label>
                      Read more
                      <Image
                        width={34}
                        height={16}
                        src="/images/arrow-right.svg"
                        alt="arrow-right"
                      />
                    </label>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
