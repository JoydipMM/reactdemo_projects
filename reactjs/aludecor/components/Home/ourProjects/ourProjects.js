import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function OurProjects({ projectDataVal }) {
  const projectData = projectDataVal.data?.content;
  const projectsCats = projectDataVal.data?.content?.projects_cat;

  return (
    <>
      <section className={`${ourprojectsstyles.Expl_metalmpwr} topadding_top`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{projectData?.preheading}</span>
            <AnimatedText text={projectData.heading} />
          </h2>
          <div className={ourprojectsstyles.tabcont_explore}>
            <Tabs selectedTabClassName={ourprojectsstyles.activeTab}>
              {/*  Add key to each Tab */}
              <TabList className={ourprojectsstyles.tabList}>
                {projectsCats?.map((projectCat) => (
                  <Tab
                    className={ourprojectsstyles.tab}
                    key={projectCat.category_id} //  Ensures unique key
                  >
                    {projectCat.category_name}
                  </Tab>
                ))}
              </TabList>

              {/* Add key to each TabPanel */}
              {projectsCats?.map((projectCat, index) => (
                <TabPanel key={projectCat.category_id}>
                  <div className={ourprojectsstyles.panel_conttab}>
                    <div className={ourprojectsstyles.prjbox_wrp}>
                      {/* Ensure key is present for each project */}
                      {projectCat.projects.map((project, index) => (
                        <div
                          key={project.image_id || `projectcat-${index}`} //  Fixing unique key issue
                          className={ourprojectsstyles.prj_innerbox}
                        >
                          <div
                            className={ourprojectsstyles.prj_innerbox_overlay}
                          >
                            <div className={ourprojectsstyles.prj_overltitle}>
                              {project?.title}
                            </div>
                            <div className={ourprojectsstyles.prj_overltxt}>
                              {project?.excerpt}
                            </div>
                            <Link
                              href={`/solutions/solutionsdetails?project_slug=${project?.slug}`}
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
                            src={project?.image_url}
                            alt="Projects"
                            fill={true}
                          />
                        </div>
                      ))}
                    </div>
                    <div className={ourprojectsstyles.prj_viewbtn}>
                      <Link
                        href="solutions/projectsgallery"
                        className="common-btn"
                      >
                        <label>
                          View All
                          <Image
                            width={34}
                            height={16}
                            src="/images/arrow-right.svg"
                            alt="arrow-right"
                          />
                        </label>
                      </Link>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
