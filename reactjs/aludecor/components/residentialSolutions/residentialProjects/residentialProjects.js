import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import residentialProjectsstyles from "@/components/residentialSolutions/residentialProjects/residentialProjects.module.css";

export default function Residentialprojects({ industriesData }) {
  const allIndustrialData = industriesData?.data?.content;
  const projects = allIndustrialData?.projects;
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
        breakpoint: 1200,
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
        className={`${ourprojectsstyles.Expl_metalmpwr} ${residentialProjectsstyles.Expl_metalmpwr} topadding_top`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <span>{allIndustrialData?.pre_heading}</span>
            <AnimatedText text={allIndustrialData?.heading} />
          </h2>
          <div className={ourprojectsstyles.prjbox_wrp1}>
            <Slider {...settings} className="commonSlider">
              {projects &&
                projects.map((project, index) => {
                  return (
                    <div
                      className={ourprojectsstyles.prj_innerbox}
                      key={`project-${index}`}
                    >
                      <div className={ourprojectsstyles.prj_innerbox_overlay}>
                        <div className={ourprojectsstyles.prj_overltitle}>
                          {project?.title}
                        </div>
                        <div className={ourprojectsstyles.prj_overltxt}>
                          {project?.excerpt}
                        </div>
                        <Link href={project?.link == "" ? "#" : project?.link}>
                          <Image
                            src="/images/pause-circle.svg"
                            alt="Link"
                            width={50}
                            height={50}
                          />
                        </Link>
                      </div>
                      <Image
                        src={project?.thumbnail_url}
                        alt="Projects"
                        fill={true}
                      />
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
