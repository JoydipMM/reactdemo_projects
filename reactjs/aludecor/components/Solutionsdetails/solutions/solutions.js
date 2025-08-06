"use client";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import reasonstyles from "../../Home/reasonChoose/reason.module.css";
import solutionsstyles from "../solutions/solutions.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Solutions({ tabHighlightData }) {
  const allTabHighlightData = tabHighlightData?.data?.content;
  const tabHighLight = allTabHighlightData?.highlights;
  return (
    <section>
      <div className="container">
        <div className="topadding_top">
          <div className={`${reasonstyles.reasonwrp}`}>
            <h2>
              <span>{allTabHighlightData?.preheading}</span>
              <AnimatedText text={allTabHighlightData?.heading} />
            </h2>
            <Tabs selectedTabClassName={reasonstyles.activeTab}>
              <div className={reasonstyles.tabsContainer}>
                {/* Sidebar - Tab List */}
                <TabList className={reasonstyles.tabList}>
                  {tabHighLight &&
                    tabHighLight.map((tablight, index) => {
                      return (
                        <Tab
                          className={reasonstyles.tab}
                          key={`tablight-${index}`}
                        >
                          {tablight?.heading}
                        </Tab>
                      );
                    })}
                </TabList>

                {/* Right Side - Content Panels */}
                <div className={reasonstyles.tabContent}>
                  {tabHighLight &&
                    tabHighLight.map((tablight, index) => {
                      return (
                        <TabPanel key={`tabPanelHighlight-${index}`}>
                          <div>
                            <div className={reasonstyles.topcontreas}>
                              {tablight?.description}
                            </div>
                            <div className={solutionsstyles.soluimg}>
                              <ul>
                                <li className="hoverarea">
                                  <Image
                                    fill={true}
                                    src={tablight?.image_1?.url}
                                    alt="img1"
                                  />
                                  <div className="brands">
                                    <Image
                                      fill={true}
                                      src="/images/brand-star.svg"
                                      alt="star"
                                    />
                                  </div>
                                </li>
                                <li className="hoverarea">
                                  <Image
                                    fill={true}
                                    src={tablight?.image_2?.url}
                                    alt="img2"
                                  />
                                  <div className="brands">
                                    <Image
                                      fill={true}
                                      src="/images/brand-star.svg"
                                      alt="star"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </TabPanel>
                      );
                    })}
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
