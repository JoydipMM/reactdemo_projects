import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leadersstyles from "../leaders/leaders.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import Link from "next/link";

export default function Leaders({ leaderData }) {
  const allLeaderContent = leaderData?.data?.content;
  //console.log(allLeaderContent);
  const topImageBanner = allLeaderContent?.leaders_logo?.top_logos;
  const lowerBanner = allLeaderContent?.leaders_logo?.bottom_logos;
  const images1 = topImageBanner;
  const images2 = lowerBanner;
  //console.log(lowerBanner);
  const sliderSettingsLTR = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    rtl: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderSettingsRTL = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className={`${leadersstyles.leaders_container} topadding_top `}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allLeaderContent.preheading}</span>
            <AnimatedText text={allLeaderContent.heading} />
          </h2>
          <Slider {...sliderSettingsLTR}>
            {images1.map((img) => (
              <div key={img.id} className="logo-pic">
                <Link href={img.url == "" ? "#" : img.url}>
                  <Image
                    src={img?.image?.image_url}
                    alt="img"
                    width={260}
                    height={200}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <Slider {...sliderSettingsRTL} className="mt-4">
            {images2.map((img) => (
              <div key={img.id} className="logo-pic">
                <Link href={img.url == "" ? "#" : img.url}>
                  <Image
                    src={img?.image?.image_url}
                    alt={img.alt}
                    width={260}
                    height={200}
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
