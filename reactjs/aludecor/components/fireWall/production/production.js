"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import industrystyles from "@/components/Export/industry/industry.module.css";
import productionstyles from "../production/production.module.css";

export default function Production({ projectsData }) {
  const allProjectData = projectsData.data?.content;
  const projectsDatas = allProjectData?.projects;
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
        className={`slidergallery topadding_bottom ${industrystyles.slidergallery} ${productionstyles.slidergallery}`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allProjectData?.heading} />
          </h2>

          <div className={`premium_boxwrp ${industrystyles.premium_boxwrp}`}>
            <Slider {...settings} className="commonSlider">
              {projectsDatas?.map((projectsData, index) => (
                <div className="premiumboxcont" key={`projectsDataID-${index}`}>
                  <div
                    className={`animate_frame ${industrystyles.frembox} ${ourprojectsstyles.frembox}`}
                  >
                    <div className={ourprojectsstyles.prj_innerbox_overlay}>
                      <div className={ourprojectsstyles.prj_overltitle}>
                        {projectsData?.title}
                      </div>
                      <div className={ourprojectsstyles.prj_overltxt}>
                        {projectsData?.excerpt}
                      </div>
                      <Link
                        href={
                          projectsData?.link == "" ? "#" : projectsData?.link
                        }
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
                      src={projectsData?.thumbnail_url}
                      alt="industry"
                      fill={true}
                    />
                    <div className="brands">
                      <Image
                        fill={true}
                        src="/images/brand-star.svg"
                        alt="star"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
