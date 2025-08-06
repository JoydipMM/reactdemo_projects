import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import techniqstyles from "@/components/fabricationGuide/techniques/techniques.module.css";

import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
export default function Techniques({ fabricationData }) {
  const allFabData = fabricationData.data?.content;
  const fabValuesDatas = allFabData?.values;
  return (
    <>
      <section>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allFabData?.pre_heading}</span>
            <AnimatedText text={allFabData?.heading} />
          </h2>
          <div className="tabcont_explore">
            <Tabs selectedTabClassName="activeTab">
              <TabList className="tabList">
                {fabValuesDatas?.map((fabValuesData, index) => (
                  <Tab
                    className="tab"
                    key={`fabValuesDataTabID-${index}`} //  Ensures unique key
                  >
                    {fabValuesData.tab_name}
                  </Tab>
                ))}
              </TabList>
              {fabValuesDatas?.map((fabValuesData, index) => (
                <TabPanel key={`fabValuesDataTabPanelID-${index}`}>
                  <div className="panel_conttab">
                    <div className={techniqstyles.sowwrp}>
                      <div className={techniqstyles.sowleft}>
                        <Image
                          fill={true}
                          src={fabValuesData?.image?.image_url}
                          alt="Saw Cutting"
                        />
                      </div>
                      <div className={techniqstyles.sowrit}>
                        <h3>{fabValuesData?.tab_name}</h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: fabValuesData?.description
                          }}
                        ></div>
                      </div>
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
