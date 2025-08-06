import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import certificatesstyles from "@/components/recognition/certificates/certificates.module.css";
import technicalstyles from "@/components/zincCompositePanels/technical/technical.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Technical({ technicalData }) {
  const allTechnicalData = technicalData?.data?.content;
  const excellenceData = allTechnicalData?.excellence;
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <section
        className={`${ourprojectsstyles.Expl_metalmpwr} topadding_bottom`}
      >
        <div className="container">
          <div
            className={`${ourprojectsstyles.tabcont_explore} ${certificatesstyles.tabcont_explore}`}
          >
            <h2 className="titlecenter">
              <span>{allTechnicalData?.preheading}</span>
              <AnimatedText text={allTechnicalData?.heading} />
            </h2>
            <Tabs selectedTabClassName={ourprojectsstyles.activeTab}>
              <TabList
                className={`${ourprojectsstyles.tabList} ${certificatesstyles.tabList}`}
              >
                {excellenceData &&
                  excellenceData.map((excellenceDatas, index) => {
                    return (
                      <Tab
                        className={ourprojectsstyles.tab}
                        key={`excellenceDataTabId-${index}`}
                      >
                        {excellenceDatas?.tab_heading}
                      </Tab>
                    );
                  })}
              </TabList>
              {excellenceData &&
                excellenceData.map((excellenceDataPanel, index) => {
                  return (
                    <TabPanel key={`excellenceDataTabPanelId-${index}`}>
                      <div className={ourprojectsstyles.panel_conttab}>
                        <div
                          className={`${ourprojectsstyles.prjbox_wrp} ${technicalstyles.prjbox_wrp}`}
                        >
                          <div className="imgarea">
                            <Image
                              src={excellenceDataPanel?.image_1?.url}
                              alt="image_1"
                              width={500}
                              height={500}
                            />
                          </div>
                          <div className="imgarea">
                            <Image
                              src={excellenceDataPanel?.image_2?.url}
                              alt="image_2"
                              width={500}
                              height={500}
                            />
                          </div>
                          <div
                            className="txtarea"
                            dangerouslySetInnerHTML={{
                              __html: excellenceDataPanel?.tab_content
                            }}
                          >
                            {/* <span>
                              <label>Top Layer:</label> Zinc-Titanium Alloy{" "}
                            </span>
                            <span>
                              <label>Core:</label> LDPE or FR
                            </span>
                            <span>
                              <label>Bottom Layer:</label> Aluminium Sheet
                            </span> */}
                          </div>
                        </div>
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
