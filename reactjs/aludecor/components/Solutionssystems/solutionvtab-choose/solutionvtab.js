"use client";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import solutionvtabstyles from "../solutionvtab-choose/solutionvtab.module.css"; // Import CSS module
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Solutionvtab({ systemKeypointData }) {
  const systemData = systemKeypointData.data?.content;
  const systemPoints = systemData?.points;
  return (
    <section>
      <div className="container">
        <div className={`${solutionvtabstyles.solutionvtabwrp}`}>
          <Tabs selectedTabClassName={solutionvtabstyles.activeTab}>
            <div className={solutionvtabstyles.tabsContainer}>
              {/* Sidebar - Tab List */}
              <TabList className={solutionvtabstyles.tabList}>
                {systemPoints?.map((systemPoint, index) => (
                  <Tab
                    className={solutionvtabstyles.tab}
                    key={`tabPoint-${index}`}
                  >
                    {systemPoint.point_name}
                  </Tab>
                ))}
              </TabList>

              {/* Right Side - Content Panels */}
              <div className={solutionvtabstyles.tabContent}>
                {systemPoints?.map((systemPoint, index) => (
                  <TabPanel key={`panelPoint-${index}`}>
                    <div>
                      <div className={solutionvtabstyles.topcontreas}>
                        {systemPoint?.point_info}
                      </div>
                      {systemPoint?.point_image.url ? (
                        <div className={solutionvtabstyles.boxsolutionvtab}>
                          <Image
                            src={systemPoint?.point_image.url}
                            alt={systemPoint?.point_image.alt}
                            width={866}
                            height={555}
                          />
                        </div>
                      ) : (
                        ""
                      )}
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
