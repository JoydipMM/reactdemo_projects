import AnimatedText from "@/components/Framemotion/framemotion";
import designspacestyles from "@/components/Home/designSpace/designSpace.module.css";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import ExploreTypevideo from "./explore-vid/explore";

export default function Successstories({ successData }) {
  const allData = successData?.data?.content;
  const allScenarioDatas = allData?.scenarios;
  const allInterviewDatas = allData?.interviews;
  return (
    <>
      <section className={`${designspacestyles.Expl_metalmpwr} commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allData?.perheading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>
          <div className={designspacestyles.tabcont_explore}>
            <Tabs selectedTabClassName={designspacestyles.activeTab}>
              <TabList className={designspacestyles.tabList}>
                <Tab className={designspacestyles.tab}>
                  Before and After Scenarios
                </Tab>
                <Tab className={designspacestyles.tab}>User Interviews</Tab>
              </TabList>
              <TabPanel>
                <ExploreTypevideo allVideoDatas={allScenarioDatas} />
              </TabPanel>
              <TabPanel>
                <ExploreTypevideo allVideoDatas={allInterviewDatas} />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
