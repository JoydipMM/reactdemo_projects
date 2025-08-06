"use client";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import reasonstyles from "../reasonChoose/reason.module.css"; // Import CSS module
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Reason({ chooseData }) {
  const reasonsData = chooseData.data?.content;
  const reasonsCats = chooseData.data?.content?.reasons;
  //console.log(reasonsCats);

  return (
    <section>
      <div className="container">
        <div className={`${reasonstyles.reasonwrp} `}>
          <h2>
            <span>{reasonsData?.preheading}</span>
            <AnimatedText text={reasonsData?.heading} />
          </h2>
          <Tabs selectedTabClassName={reasonstyles.activeTab}>
            <div className={reasonstyles.tabsContainer}>
              {/* Sidebar - Tab List */}
              <TabList className={reasonstyles.tabList}>
                {reasonsCats?.map((reasonsCat, index) => (
                  <Tab className={reasonstyles.tab} key={`reason-${index}`}>
                    {reasonsCat.reason_name}
                  </Tab>
                ))}
              </TabList>

              {/* Right Side - Content Panels */}
              <div className={reasonstyles.tabContent}>
                {reasonsCats?.map((reasonsCat, index) => (
                  <TabPanel key={`right-content-panel-${index}`}>
                    <div>
                      <div className={reasonstyles.topcontreas}>
                        {reasonsCat?.reason_info}
                      </div>
                      {reasonsCat?.highlights?.map((highlight, index) => (
                        <div
                          className={reasonstyles.boxreason}
                          key={highlight.icon_id}
                        >
                          <Image
                            src={highlight.icon_url}
                            alt="highlight-Image"
                            width={38}
                            height={38}
                          />
                          <div className={reasonstyles.boxtxtcont}>
                            <h3>{highlight.heading}</h3>
                            <p>{highlight.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
