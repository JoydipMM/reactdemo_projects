"use client";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import pretecdatastyles from "@/components/preCoatedAluminium/technicalData/technicalData.module.css"; // Import CSS module
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function TechnicalData({ technicalData }) {
  const allTechnicalData = technicalData?.data?.content;
  const bimIndustryDatas = allTechnicalData?.industries;
  return (
    <section className={`${pretecdatastyles.tdatawrp} topadding_top`}>
      <div className="container">
        <h2 className="centertie">
          <AnimatedText text={allTechnicalData?.heading} />
        </h2>
        <div className={`${pretecdatastyles.tdatacont}`}>
          <h3>Name of Testings</h3>
          <Tabs selectedTabClassName={pretecdatastyles.activeTab}>
            <div className={pretecdatastyles.tabsContainer}>
              {/* Sidebar - Tab List */}
              <TabList className={pretecdatastyles.tabList}>
                {bimIndustryDatas &&
                  bimIndustryDatas.map((bimIndustryData, index) => {
                    return (
                      <Tab
                        className={pretecdatastyles.tab}
                        key={`bimIndustrydata-${index}`}
                      >
                        {bimIndustryData?.title}
                      </Tab>
                    );
                  })}
              </TabList>

              {/* Right Side - Content Panels */}
              <div className={pretecdatastyles.tabContent}>
                {bimIndustryDatas &&
                  bimIndustryDatas.map((bimIndustryData, index) => {
                    const bimEquipmentDatas = bimIndustryData?.content;
                    return (
                      <TabPanel key={`bimIndustryData-${index}`}>
                        <div>
                          <div className={pretecdatastyles.databoxwrp}>
                            {bimEquipmentDatas &&
                              bimEquipmentDatas.map(
                                (bimEquipmentData, index) => {
                                  return (
                                    <div
                                      className={pretecdatastyles.databoxcont}
                                      key={`bimEquipmentDataInner-${index}`}
                                    >
                                      <h3>
                                        {
                                          bimEquipmentData?.technical_data_sec_testings_content_title
                                        }
                                      </h3>
                                      <p>
                                        {
                                          bimEquipmentData?.technical_data_sec_testings_content_sub_title
                                        }
                                      </p>
                                    </div>
                                  );
                                }
                              )}
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
    </section>
  );
}
