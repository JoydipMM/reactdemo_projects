"use client";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import reasonstyles from "@/components/Home/reasonChoose/reason.module.css"; // Import CSS module
import Image from "next/image";
import qualitystyles from "../qualityassurance/quality.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function QualityAssurance({ qualityData }) {
  const reasonsData = qualityData.data?.content;
  const reasonsCats = reasonsData?.qualites;

  return (
    <section>
      <div className="container">
        <div className={`${reasonstyles.reasonwrp} `}>
          <h2>
            {" "}
            <AnimatedText text={reasonsData?.title} />
          </h2>
          <Tabs selectedTabClassName={reasonstyles.activeTab}>
            <div
              className={`${reasonstyles.tabsContainer} ${qualitystyles.tabsContainer}`}
            >
              {/* Sidebar - Tab List */}
              <TabList
                className={`${reasonstyles.tabList} ${qualitystyles.tabList}`}
              >
                {reasonsCats?.map((reasonsCat, index) => (
                  <Tab className={reasonstyles.tab} key={`reason-${index}`}>
                    {reasonsCat.title}
                  </Tab>
                ))}
              </TabList>

              {/* Right Side - Content Panels */}
              <div className={reasonstyles.tabContent}>
                {reasonsCats?.map((reasonsCat, index) => (
                  <TabPanel key={`highlightId-${index}`}>
                    <div>
                      {reasonsCat?.values.map((reason, index) => (
                        <div
                          className={reasonstyles.boxreason}
                          key={`reasonId-${index}`}
                        >
                          <Image
                            src={reason?.image?.image_url}
                            alt="image_url"
                            width={38}
                            height={38}
                          />
                          <div className={reasonstyles.boxtxtcont}>
                            <h3>{reason?.text}</h3>
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
