import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import guidestyles from "@/components/ProductHandlingGuide/guide/guide.module.css";
import architecturalstyles from "../architectural/architectural.module.css";

export default function Guide({ architecturalData }) {
  const allData = architecturalData?.data?.content;
  const allItemsDatas = allData?.items;

  return (
    <>
      <section
        className={`${ourprojectsstyles.Expl_metalmpwr} ${architecturalstyles.Expl_metalmpwr} topadding_bottom`}
      >
        <div className="container">
          <h2 className="centertie">
            <span>{allData?.pre_heading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>
          <div
            className={`${ourprojectsstyles.tabcont_explore} ${guidestyles.tabcont_explore}`}
          >
            <Tabs selectedTabClassName={ourprojectsstyles.activeTab}>
              <TabList className={ourprojectsstyles.tabList}>
                {allItemsDatas &&
                  allItemsDatas.map((allItemsData, index) => {
                    return (
                      <Tab
                        className={ourprojectsstyles.tab}
                        key={`allItemsDataTabID- ${index}`}
                      >
                        {allItemsData?.title}
                      </Tab>
                    );
                  })}
              </TabList>
              {allItemsDatas &&
                allItemsDatas.map((allItemsData, index) => {
                  return (
                    <TabPanel key={`allItemsDataTabPanelID- ${index}`}>
                      <div
                        className={`${guidestyles.tabcontent} ${architecturalstyles.tabcontent}`}
                      >
                        <div
                          className={`${guidestyles.pic} ${architecturalstyles.pic}`}
                        >
                          <Image
                            src={allItemsData?.image?.url}
                            alt="image"
                            fill={true}
                          />
                        </div>
                        <div className={guidestyles.txt}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: allItemsData?.description
                            }}
                          ></div>
                          <Link
                            class="common-btn"
                            href={
                              allItemsData?.btn_url == ""
                                ? "#"
                                : allItemsData?.btn_url
                            }
                          >
                            <label>
                              Read more
                              <Image
                                alt="arrow-right"
                                loading="lazy"
                                width="34"
                                height="16"
                                src="/images/arrow-right.svg"
                              />
                            </label>
                          </Link>
                        </div>
                      </div>

                      <div
                        className={`${ourprojectsstyles.prj_viewbtn} ${architecturalstyles.prj_viewbtn}`}
                      >

                        <Link
                          href={
                            allData?.btn_link == "" ? "#" : allData?.btn_link
                          }
                          className="common-btn"
                        >
                          {" "}
                          <label>
                            {" "}
                            View All{" "}
                            <Image
                              width={34}
                              height={16}
                              src="/images/arrow-right.svg"
                              alt=""
                            />
                          </label>
                        </Link>
                      </div>
                    </TabPanel>
                  );
                })}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
