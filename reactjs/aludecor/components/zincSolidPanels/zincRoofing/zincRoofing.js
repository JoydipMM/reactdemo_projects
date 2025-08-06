import AnimatedText from "@/components/Framemotion/framemotion";
import introductyles from "../introducing/introducing.module.css";
import zincroofstyles from "../zincRoofing/zincRoofing.module.css";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ZincRoofing({ roofingData }) {
  const allRoofingData = roofingData?.data?.content;
  const roofingItems = allRoofingData?.images;
  const roofingsld = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={`${introductyles.introwrp}`}>
            <div className={`${introductyles.leftintro} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="" />
              </div>
              <div className={zincroofstyles.roofslide}>
                <Slider {...roofingsld}>
                  {roofingItems &&
                    roofingItems.map((roofingItem, index) => {
                      return (
                        <div
                          className={zincroofstyles.roofboxsld}
                          key={`roofingItem-${index}`}
                        >
                          <Image
                            fill={true}
                            src={roofingItem?.url}
                            alt="roof-img"
                          />
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>

            <div className={introductyles.ritintro}>
              <h2>
                <AnimatedText text={allRoofingData?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: allRoofingData?.description_side
                }}
              ></p>
            </div>
          </div>
          <div className={introductyles.textwrp}>
            <p
              dangerouslySetInnerHTML={{
                __html: allRoofingData?.description_bottom
              }}
            ></p>
          </div>
        </div>
      </section>
    </>
  );
}
