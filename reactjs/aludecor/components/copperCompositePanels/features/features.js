import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import featurescstyles from "@/components/copperCompositePanels/features/features.module.css";

import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
export default function Features({ benefitsData }) {
  const allBenefitData = benefitsData?.data?.content;
  const benefitFeatures = allBenefitData?.benefits;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text="Features & Functional Benefits" />
          </h2>
          <div className="tabcont_explore">
            <Tabs selectedTabClassName="activeTab">
              <TabList className="tabList">
                {benefitFeatures &&
                  benefitFeatures.map((benefitFeature, index) => {
                    return (
                      <Tab className="tab" key={`benefitFeaturetabID-${index}`}>
                        {benefitFeature.name}
                      </Tab>
                    );
                  })}
              </TabList>
              {benefitFeatures &&
                benefitFeatures.map((benefitFeature, index) => {
                  return (
                    <TabPanel key={`benefitFeaturetabListID-${index}`}>
                      <div className="panel_conttab">
                        <div className={featurescstyles.sowwrp}>
                          <div className={featurescstyles.sowleft}>
                            <Image
                              fill={true}
                              src={benefitFeature?.image_one?.image_url}
                              alt="Saw Cutting"
                            />
                          </div>
                          <div
                            className={featurescstyles.sowrit}
                            dangerouslySetInnerHTML={{
                              __html: benefitFeature?.content
                            }}
                          ></div>
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
