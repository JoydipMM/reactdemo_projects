import AnimatedText from "@/components/Framemotion/framemotion";
import explorestyles from "../exploreMetal/explore.module.css";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ScrollZoomImage from "@/components/zoomeffect/zoom";

// IMPORTANT you need to include the default styles
// import 'react-responsive-tabs/styles.css';

export default function Explore({ cpanelData }) {
  const explorePanelData = cpanelData?.data?.content;
  const explorePanelCats = cpanelData?.data?.content?.composite_panels;

  return (
    <>
      <section className={`${explorestyles.Expl_metalmpwr} topadding_top`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{explorePanelData?.preheading}</span>
            <AnimatedText text={explorePanelData?.heading} />
          </h2>
          <div className={explorestyles.tabcont_explore}>
            <Tabs selectedTabClassName={explorestyles.activeTab}>
              <TabList className={explorestyles.tabList}>
                {explorePanelCats?.map((explorePanelCat, index) => (
                  <Tab
                    className={explorestyles.tab}
                    key={`explorePanelCat-${index}`}
                  >
                    {explorePanelCat.panel_name}
                  </Tab>
                ))}
              </TabList>
              {explorePanelCats?.map((explorePanelCat, index) => (
                <TabPanel key={`explorePanelTabPanel-${index}`}>
                  <div className={explorestyles.panel_conttab}>
                    <div className={explorestyles.paneltab_imgcont}>
                      <div className={explorestyles.brandin}>
                        <Image
                          src="/images/brandin_pic.svg"
                          alt="Brandin Solutions"
                          fill={true}
                        />
                      </div>
                      <div className={explorestyles.overlay_txt}>
                        <h2>
                          <AnimatedText text={explorePanelCat.banner_heading} />
                        </h2>
                        <p data-aos="fade-down">
                          {explorePanelCat.banner_description}
                        </p>
                      </div>
                      {/* <Image
                      
                    /> */}
                      <ScrollZoomImage
                        src={explorePanelCat?.banner_image_url}
                        alt="Metal"
                        maxZoom={2}
                        zoomFactor={200000}
                        className="w-[300px] h-[300px]"
                        width={1760}
                        height={960}
                      />
                    </div>
                    <div className={explorestyles.paneltab_txtcont}>
                      <div className={explorestyles.panel_left_txtcont}>
                        <h3>
                          <AnimatedText text={explorePanelCat.heading} />
                        </h3>
                        <p data-aos="fade-down">
                          {explorePanelCat.description}
                        </p>
                      </div>
                      <div className={explorestyles.panel_right_txtcont}>
                        <Link
                          href={
                            explorePanelCat.panel_read_more == ""
                              ? "#"
                              : explorePanelCat.panel_read_more
                          }
                          className={`common-btn ${explorestyles.gapbtn}`}
                        >
                          {" "}
                          <label>
                            {" "}
                            {explorePanelCat.panel_name}
                            <Image
                              width={34}
                              height={16}
                              src="/images/arrow-right.svg"
                              alt="arrow-right"
                            />
                          </label>
                        </Link>
                        <br />
                        <Link
                          href={
                            explorePanelCat.panel_details == ""
                              ? "#"
                              : explorePanelCat.panel_details
                          }
                          className="common-btn"
                        >
                          <label>
                            Read more{" "}
                            <Image
                              width={34}
                              height={16}
                              src="/images/arrow-right.svg"
                              alt="arrow-right"
                            />
                          </label>
                        </Link>
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
