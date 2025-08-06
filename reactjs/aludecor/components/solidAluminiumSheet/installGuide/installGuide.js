import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import instalgtyles from "../installGuide/installGuide.module.css";

import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
export default function InstallGuide({ installationData }) {
  const allInstallationData = installationData.data?.content;
  const allItems = allInstallationData?.items;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <h2 className="titlecenter">
            <span>{allInstallationData?.pre_heading}</span>
            <AnimatedText text={allInstallationData?.heading} />
          </h2>
          <div className={`tabcont_explore  ${instalgtyles.tectab}`}>
            <Tabs selectedTabClassName="activeTab">
              <TabList className={`tabList ${instalgtyles.solidsheetlist}`}>
                {allItems &&
                  allItems.map((allItem, index) => {
                    return (
                      <Tab className="tab" key={`allItemTabs-${index}`}>
                        {allItem?.tab_heading}
                      </Tab>
                    );
                  })}
              </TabList>
              {allItems &&
                allItems.map((allItem, index) => {
                  return (
                    <TabPanel key={`allItemTabPanel-${index}`}>
                      <div className="panel_conttab">
                        <div className={instalgtyles.alumwrp}>
                          <div className={instalgtyles.alumleft}>
                            <Image
                              fill={true}
                              src={allItem?.image?.image_url}
                              alt="Solid Aluminium Sheets"
                            />
                          </div>
                          <div className={instalgtyles.alumrit}>
                            <h3>{allItem?.heading}</h3>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: allItem?.content
                              }}
                            ></div>
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
