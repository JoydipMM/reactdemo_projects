import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import guidestyles from "@/components/ProductHandlingGuide/guide/guide.module.css";
import gallerystyles from "../gallery/gallery.module.css";

export default function Gallery({ galleryData }) {
  const projectData = galleryData.data?.content;
  const projectsItems = projectData?.items;
  return (
    <>
      <section
        className={`${ourprojectsstyles.Expl_metalmpwr} ${gallerystyles.Expl_metalmpwr} topadding_bottom`}
      >
        <div className="container">
          <h2 className="centertie">
            <span>{projectData?.pre_heading}</span>
            <AnimatedText text={projectData.heading} />
          </h2>
          <div
            className={`${ourprojectsstyles.tabcont_explore} ${guidestyles.tabcont_explore} ${gallerystyles.tabcont_explore}`}
          >
            <Tabs selectedTabClassName={ourprojectsstyles.activeTab}>
              <TabList className={ourprojectsstyles.tabList}>
                {projectsItems?.map((projectsItem, index) => (
                  <Tab
                    className={ourprojectsstyles.tab}
                    key={`projectsItemTab-Id-${index}`} //  Ensures unique key
                  >
                    {projectsItem.title}
                  </Tab>
                ))}
              </TabList>
              {projectsItems?.map((projectsItem, index) => (
                <TabPanel key={`projectsItemID-${index}`}>
                  <div className={ourprojectsstyles.panel_conttab}>
                    <div className={ourprojectsstyles.prjbox_wrp}>
                      {projectsItem.images.map((project, index) => (
                        <div
                          className={ourprojectsstyles.prj_innerbox}
                          key={`projectsItemID-${index}`}
                        >
                          <div
                            className={ourprojectsstyles.prj_innerbox_overlay}
                          >
                            <div className={ourprojectsstyles.prj_overltitle}>
                              {project?.heading}
                            </div>
                            <div className={ourprojectsstyles.prj_overltxt}>
                              {project?.description}
                            </div>
                          </div>
                          <Image
                            src={project?.image?.image_url}
                            alt="gallery"
                            fill={true}
                          />
                          <div className="brands">
                            <Image
                              fill={true}
                              src="/images/brand-star.svg"
                              alt="brand"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`${ourprojectsstyles.prj_viewbtn} ${gallerystyles.prj_viewbtn}`}
                    >
                      <Link
                        href={
                          projectData?.our_gallery_section_button_url == ""
                            ? "#"
                            : projectData?.our_gallery_section_button_url
                        }
                        className="common-btn"
                      >
                        {" "}
                        <label>
                          {projectData?.button_text}
                          <Image
                            width={34}
                            height={16}
                            src="/images/arrow-right.svg"
                            alt="right"
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
