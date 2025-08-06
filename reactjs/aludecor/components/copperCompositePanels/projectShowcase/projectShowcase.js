import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";

import projectshowcasestyles from "@/components/residentialSolutions/projectShowcase/projectShowcase.module.css";

export default function ProjectShowcase({ projectShowcaseData }) {
  const allProjectShowcaseData = projectShowcaseData?.data?.content;
  const projectShowcases = allProjectShowcaseData?.projects;
  return (
    <>
      <section>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allProjectShowcaseData?.pre_heading}</span>
            <AnimatedText text={allProjectShowcaseData?.heading} />
          </h2>
          <div
            className={`${ourprojectsstyles.prjbox_wrp} ${projectshowcasestyles.prj_shocase}`}
          >
            {projectShowcases &&
              projectShowcases.map((projectShowcase, index) => {
                return (
                  <div
                    className={`${ourprojectsstyles.prj_innerbox} ${projectshowcasestyles.prj_innerbox}`}
                    key={`projectShowcase-${index}`}
                  >
                    <div
                      className={`${ourprojectsstyles.prj_innerbox_overlay} ${projectshowcasestyles.prj_innerbox_overlay}`}
                    >
                      <div className={ourprojectsstyles.prj_overltitle}>
                        {projectShowcase?.title}
                      </div>
                      <div
                        className={`${ourprojectsstyles.prj_overltxt} ${projectshowcasestyles.prj_overltxt}`}
                      >
                        {projectShowcase?.excerpt}
                      </div>
                      <Link
                        href={
                          projectShowcase?.link == ""
                            ? "#"
                            : projectShowcase?.link
                        }
                        className="common-btn purple"
                      >
                        <label>
                          View Details{" "}
                          <Image
                            width={34}
                            height={16}
                            src="/images/arrow-right.svg"
                            alt=""
                          />{" "}
                        </label>
                      </Link>
                    </div>
                    <Image
                      src={projectShowcase?.thumbnail_url}
                      alt="Projects"
                      fill={true}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
