import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import ImageComparisonSlider from "../imageComparisonslider/imageComparisonslider";

export default function Weatherresistance({ resistanceData }) {
  const allResistanceData = resistanceData?.data?.content;
  const allResistanceItems = allResistanceData?.items;
  const imgboxStyle = {
    paddingTop: "0px"
  };
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
                {allResistanceItems &&
                  allResistanceItems.map((allResistanceItem, index) => {
                    return (
                      <Tab className="tab" key={`allResistanceItem-${index}`}>
                        {allResistanceItem.title}
                      </Tab>
                    );
                  })}
              </TabList>
              {allResistanceItems &&
                allResistanceItems.map((allResistanceItem, index) => {
                  return (
                    <TabPanel key={`allResistanceItemTabPanel-${index}`}>
                      <div className="panel_conttab">
                        {/*<div className="paneltab_imgcont borderradius">
                           <ImageComparisonSlider/> 
                          <Image
                            fill={true}
                            src={allResistanceItem?.image?.image_url}
                            alt="allResistanceItem"
                          />
                        </div>*/}
                      </div>
                      <div className="sswraper" style={imgboxStyle}>
                        <div className="sstextpart">
                          <h2>
                            <AnimatedText text={allResistanceItem?.title} />
                          </h2>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: allResistanceItem?.description
                            }}
                          ></div>
                        </div>

                        <div className="ssimagepart hoverarea">
                          <Image
                            fill={true}
                            src={allResistanceItem?.image?.image_url}
                            alt="allResistanceItem"
                            className="ssimage"
                          />
                          <div className="brands">
                            <Image
                              fill={true}
                              src="/images/brand-star.svg"
                              alt="brand-star"
                            />
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
