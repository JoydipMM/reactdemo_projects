import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import featurescstyles from "@/components/copperCompositePanels/features/features.module.css";
import suatainbilityaldstyles from "@/components/sustainabilityAludecor/whatMakes/whatMakes.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
export default function WhatMakes({ materialsData }) {
  const allData = materialsData?.data?.content;
  const materialItems = allData?.items;
  return (
    <>
      <section
        className={`commonpadding ${suatainbilityaldstyles.sustainmwrp}`}
      >
        <div className="container">
          <h2
            className="titlecenter"
            style={{
              maxWidth: "1310px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <AnimatedText text={allData?.heading} />
          </h2>
          <div className="tabcont_explore">
            <Tabs selectedTabClassName="activeTab">
              <TabList className="tabList">
                {materialItems &&
                  materialItems?.map((materialItem, index) => (
                    <Tab
                      className="tab"
                      key={`materialItem-${index}`} //  Ensures unique key
                    >
                      {materialItem.name}
                    </Tab>
                  ))}
              </TabList>
              {materialItems &&
                materialItems?.map((materialItem, index) => (
                  <TabPanel key={`materialItemPanelID-${index}`}>
                    <div className="panel_conttab">
                      <div className={featurescstyles.sowwrp}>
                        <div className={featurescstyles.sowleft}>
                          <Image
                            fill={true}
                            src={materialItem?.image?.image_url}
                            alt="Recyclability"
                          />
                        </div>
                        <div
                          className={featurescstyles.sowrit}
                          dangerouslySetInnerHTML={{
                            __html: materialItem?.content
                          }}
                        ></div>
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
