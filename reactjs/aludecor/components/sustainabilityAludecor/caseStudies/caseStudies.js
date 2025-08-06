import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import residentialProjectsstyles from "@/components/residentialSolutions/residentialProjects/residentialProjects.module.css";
import realprjstyles from "@/components/acpSignage/realProjects/realProjects.module.css";
export default function CaseStudies({ caseData }) {
  const allData = caseData?.data?.content;
  const caseDatas = allData?.projects;
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
        className={`${ourprojectsstyles.Expl_metalmpwr} ${residentialProjectsstyles.Expl_metalmpwr} commonpadding ${realprjstyles.realprjtmwrp}`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allData?.heading} />
          </h2>
          <div className={ourprojectsstyles.prjbox_wrp1}>
            <Slider {...settings} className="commonSlider">
              {caseDatas &&
                caseDatas?.map((caseData, index) => (
                  <div
                    className={ourprojectsstyles.prj_innerbox}
                    key={`caseData-${index}`}
                  >
                    <div className={ourprojectsstyles.prj_innerbox_overlay}>
                      <div className={ourprojectsstyles.prj_overltitle}>
                        {caseData?.title}
                      </div>
                      <div className={ourprojectsstyles.prj_overltxt}>
                        {caseData?.excerpt}
                      </div>
                      <Link
                        href={
                          caseData?.slug == ""
                            ? "#"
                            : `/solutions/solutionsdetails?project_slug=${caseData?.slug}`
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
                      src={caseData?.thumbnail_url}
                      alt="Projects"
                      fill={true}
                    />
                  </div>
                ))}
            </Slider>
          </div>
          <div style={{ position: "relative" }}>
            <div className={realprjstyles.btnwrpreal}>
              <Link
                href={allData?.button_url == "" ? "#" : allData?.button_url}
                className="common-btn"
              >
                <label>
                  Explore Our Green Projects
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt=""
                  />
                </label>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
