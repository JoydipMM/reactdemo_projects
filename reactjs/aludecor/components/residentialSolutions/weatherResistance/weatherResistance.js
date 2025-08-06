import AnimatedText from "@/components/Framemotion/framemotion";
// import explorestyles from "@/components/Home/exploremetal/explore.module.css";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ImageComparisonSlider from "../imageComparisonslider/imageComparisonslider";

export default function Weatherresistance({ resistanceData }) {
  const allResistanceData = resistanceData?.data?.content;
  const resistanceItems = allResistanceData?.items;
  //console.log("resistanceItems", resistanceItems);
  return (
    <>
      <section className="Expl_metalmpwr topadding_bottom">
        <div className="container">
          <h2 className="centertie">
            <span>{allResistanceData?.pre_heading}</span>
            <AnimatedText text={allResistanceData?.heading} />
          </h2>
          <div className="tabcont_explore">
            <Tabs selectedTabClassName="activeTab">
              <TabList className="tabList">
                {resistanceItems &&
                  resistanceItems.map((resistanceItem, index) => {
                    return (
                      <Tab className="tab" key={`resistanceItem-${index}`}>
                        {resistanceItem?.title}
                      </Tab>
                    );
                  })}
              </TabList>
              {resistanceItems &&
                resistanceItems.map((resistanceItem, index) => {
                  return (
                    <TabPanel key={`resistanceItemPanel-${index}`}>
                      <div className="panel_conttab">
                        <div className="paneltab_imgcont">
                          <ImageComparisonSlider
                            resistanceItem={resistanceItem}
                          />
                          <div
                            style={{
                              maxWidth: "1200px",
                              margin: "0 auto",
                              paddingTop: "20px",
                              textAlign: "center"
                            }}
                          >
                            <p>{resistanceItem?.description}</p>
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
