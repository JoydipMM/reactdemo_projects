import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Industriesarea({ industriesData }) {
  const allIndustrialData = industriesData?.data?.content;
  const projects = allIndustrialData?.projects;

  return (
    <>
      <section
        className={`${ourprojectsstyles.Expl_metalmpwr} topadding_bottom`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <span>{allIndustrialData?.pre_heading}</span>
            <AnimatedText text={allIndustrialData?.heading} />
          </h2>
          <div className={ourprojectsstyles.prjbox_wrp}>
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
          </div>
          <div className={ourprojectsstyles.prj_viewbtn} style={{ justifyContent: "center"}}>
            <Link href="#" className="common-btn">
              <label>
                View All{" "}
                <Image
                  width={34}
                  height={16}
                  src="/images/arrow-right.svg"
                  alt=""
                />{" "}
              </label>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
