import AnimatedText from "@/components/Framemotion/framemotion";
import designspacestyles from "@/components/Home/designSpace/designSpace.module.css";
import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export default function Exploreproducts() {
  return (
    <>
      <section className={`${designspacestyles.Expl_metalmpwr} commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>Explore Our Premium Solutions</span>
            <AnimatedText text="Explore Products" />
          </h2>
          <div className={designspacestyles.tabcont_explore}>
            <Tabs selectedTabClassName={designspacestyles.activeTab}>
              <TabList className={designspacestyles.tabList}>
                <Tab className={designspacestyles.tab}>Latest Shades</Tab>
                <Tab className={designspacestyles.tab}>Trending Shades</Tab>
              </TabList>
              <TabPanel>
                <div className={designspacestyles.panel_conttab}>
                  <div className={designspacestyles.colorbox_wrp}>
                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_green.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Patina Minted Copper
                      </div>
                    </div>

                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_greend.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Patina Oxidised Copper
                      </div>
                    </div>

                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_brown.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Rugged Orange
                      </div>
                    </div>

                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_brownl.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Rugged Red
                      </div>
                    </div>

                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_grey.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Rustiq Zinc
                      </div>
                    </div>

                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_greyl.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Fossil Zinc
                      </div>
                    </div>
                  </div>

                  <div className={`${ourprojectsstyles.prj_viewbtn}`}>
                    <Link href="#" className="common-btn">
                      <label>
                        View More{" "}
                        <Image
                          width={34}
                          height={16}
                          src="/images/arrow-right.svg"
                          alt=""
                        />
                      </label>
                    </Link>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className={designspacestyles.panel_conttab}>
                  <div className={designspacestyles.colorbox_wrp}>
                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_green.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Patina Minted Copper
                      </div>
                    </div>

                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_greend.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Patina Oxidised Copper
                      </div>
                    </div>

                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_brown.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Rugged Orange
                      </div>
                    </div>

                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_brownl.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Rugged Red
                      </div>
                    </div>

                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_grey.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Rustiq Zinc
                      </div>
                    </div>

                    <div className={designspacestyles.colorbox_shade}>
                      <div className={designspacestyles.colorbox_imgcont}>
                        <Image
                          src="/images/color_greyl.png"
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </div>
                      <div className={designspacestyles.color_reviewbox}>
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/review.svg"
                          alt="Review"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={designspacestyles.colorbox_title}>
                        Fossil Zinc
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
