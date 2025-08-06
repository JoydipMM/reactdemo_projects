"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Relevantprojects({ relProjectData }) {
  const allRelatedProjectData = relProjectData.data?.content;
  const relevantprojects = allRelatedProjectData?.relevent_projects;
  console.log("relevantprojects", relevantprojects);
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
      <section className="slidergallery topadding_top">
        <div className="container">
          <h2 className="titlecenter">
            <span>{allRelatedProjectData?.preheading}</span>
            <AnimatedText text={allRelatedProjectData?.heading} />
          </h2>

          <div className="premium_boxwrp">
            <Slider {...settings} className="commonSlider">
              {relevantprojects &&
                relevantprojects.map((relevantproject, index) => {
                  return (
                    <div
                      className="premiumboxcont"
                      key={`relevantproject-${index}`}
                    >
                      <div
                        className={`animate_frame ${ourprojectsstyles.frembox}`}
                      >
                        <div className={ourprojectsstyles.prj_innerbox_overlay}>
                          <div className={ourprojectsstyles.prj_overltitle}>
                            {relevantproject?.title}
                          </div>
                          <div className={ourprojectsstyles.prj_overltxt}>
                            {relevantproject?.excerpt}
                          </div>
                          <Link
                            href={`solutionsdetails?project_slug=${relevantproject?.slug}`}
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
                          src={relevantproject?.image?.url}
                          alt="Animated"
                          fill={true}
                        />
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
