import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import techniqstyles from "@/components/fabricationGuide/techniques/techniques.module.css";
import naturalstyles from "@/components/copperCompositePanels/naturalCopper/naturalCopper.module.css";
import transforstyles from "@/components/designAssist/transformed/transformed.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
export default function NaturalCopper({ evolutionData }) {
  const allEvolutionData = evolutionData?.data?.content;
  const evolutionFeatures = allEvolutionData?.features;
  return (
    <>
      <section className={`${naturalstyles.naturaltabwrp} commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allEvolutionData?.pre_heading}</span>
            <AnimatedText text={allEvolutionData?.heading} />
          </h2>
          <div className="tabcont_explore">
            <Tabs selectedTabClassName="activeTab">
              <TabList className="tabList">
                {evolutionFeatures &&
                  evolutionFeatures.map((evolutionFeature, index) => {
                    return (
                      <Tab className="tab" key={`evolutionFeatureId-${index}`}>
                        {evolutionFeature?.name}
                      </Tab>
                    );
                  })}
              </TabList>
              {evolutionFeatures &&
                evolutionFeatures.map((evolutionFeature, index) => {
                  return (
                    <TabPanel key={`evolutionFeatureID-${index}`}>
                      <div className="panel_conttab">
                        {/* ......before after wrper starts............ */}
                        <div className={transforstyles.beforewrp}>
                          <div className={transforstyles.round}></div>
                          <div
                            className={`${transforstyles.box_before} ${transforstyles.borderleft}`}
                          >
                            <div className={transforstyles.overlayb}></div>
                            <Image
                              src={evolutionFeature?.image_one?.image_url}
                              fill={true}
                              alt=""
                            />
                            <div className={transforstyles.before_ovellaptxt}>
                              Before
                            </div>
                          </div>

                          <div
                            className={`${transforstyles.box_before} ${transforstyles.borderright}`}
                          >
                            <Image
                              src={evolutionFeature?.image_two?.image_url}
                              fill={true}
                              alt="Before"
                            />
                            <div className={transforstyles.before_ovellaptxt}>
                              After
                            </div>
                          </div>
                        </div>
                        {/* ......before after wrper ends............ */}
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
