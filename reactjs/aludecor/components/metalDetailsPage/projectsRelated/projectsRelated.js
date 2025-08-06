import AnimatedText from "@/components/Framemotion/framemotion";
import prjectsrelstyles from "../projectsRelated/projectsRelated.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
export default function ProjectsRelated({ projectData }) {
  const allProjectData = projectData?.data?.content;
  const allSelectedProject = allProjectData?.projects;

  //console.log("projectData", projectData);

  const prjrelated = {
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
            <span>{allProjectData?.pre_heading}</span>
            <AnimatedText text={allProjectData?.heading} />
          </h2>
          <div className={prjectsrelstyles.prjrel_slider}>
            <Slider {...prjrelated} className="commonSlider">
              {allSelectedProject &&
                allSelectedProject.map((pdata, index) => {
                  return (
                    <div
                      className={prjectsrelstyles.prj_innerbox}
                      key={`project-${index}`}
                    >
                      <div className={prjectsrelstyles.prj_innerbox_overlay}>
                        <div className={prjectsrelstyles.prj_overltitle}>
                          {pdata?.title}
                        </div>
                        <div className={prjectsrelstyles.prj_overltxt}>
                          {pdata?.excerpt}
                        </div>
                        <Link href="#">
                          <Image
                            src="/images/pause-circle.svg"
                            alt="Link"
                            width={50}
                            height={50}
                          />
                        </Link>
                      </div>
                      <Image
                        src={pdata?.thumbnail_url}
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
