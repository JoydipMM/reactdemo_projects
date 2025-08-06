"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import industrystyles from "../industry/industry.module.css";

export default function IndustryApplication({ industryData }) {
  const allData = industryData?.data?.content;
  const allPillarDatas = allData?.projects;
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
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
        className={`slidergallery topadding_bottom ${industrystyles.slidergallery}`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <span>{allData?.pre_heading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>

          <div className={`premium_boxwrp ${industrystyles.premium_boxwrp}`}>
            <Slider {...settings} className="commonSlider">
              {allPillarDatas &&
                allPillarDatas.map((allPillarData, index) => {
                  return (
                    <div className="premiumboxcont" key={`projectId-${index}`}>
                      <div
                        className={`animate_frame ${ourprojectsstyles.frembox} ${industrystyles.frembox}`}
                      >
                        <div className={ourprojectsstyles.prj_innerbox_overlay}>
                          <div className={ourprojectsstyles.prj_overltitle}>
                            {allPillarData?.title}
                          </div>
                          <div className={ourprojectsstyles.prj_overltxt}>
                            {allPillarData?.excerpt}
                          </div>
                          <Link
                            href={`/solutions/solutionsdetails?project_slug=${allPillarData?.slug}`}
                          >
                            <Image
                              src="/images/pause-circle.svg"
                              alt="Link"
                              width={50}
                              height={50}
                            />
                          </Link>
                        </div>
                        <Image
                          src={allPillarData?.thumbnail_url}
                          alt="industry"
                          fill={true}
                        />
                        <div className="brands">
                          <Image
                            fill={true}
                            src="/images/brand-star.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
