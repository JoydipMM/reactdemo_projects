import AnimatedText from "@/components/Framemotion/framemotion";
import designspacestyles from "../designSpace/designSpace.module.css";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export default function DesignSpace({ productListingData }) {
  // console.log("productListingData",productListingData);
  const allProductListingData = productListingData?.data?.content;
  const allLatestShades = allProductListingData?.latest_shades;
  const allTrendingShades = allProductListingData?.trending_shades;
  return (
    <>
      <section className={`${designspacestyles.Expl_metalmpwr} commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allProductListingData?.preheading}</span>
            <AnimatedText text={allProductListingData?.heading} />
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
                    {allLatestShades &&
                      allLatestShades.map((allLatestShade, index) => {
                        //  console.log("allLatestShades",allLatestShade);

                        return (
                          <div
                            className={designspacestyles.colorbox_shade}
                            key={`filterListing-${index}`}
                          >
                            <div className={designspacestyles.colorbox_imgcont}>
                              <Link
                                href={`/product/productdetails?product_id=${allLatestShade?.id}`}
                              >
                                <Image
                                  src={allLatestShade?.image?.url}
                                  alt="allLatestShade"
                                  fill="true"
                                />
                              </Link>
                            </div>
                            <div className={designspacestyles.color_reviewbox}>
                              {Array.from({
                                length: Math.ceil(`${allLatestShade?.rating}`)
                              }).map((_, index) => {
                                const getRating = allLatestShade?.rating;
                                const isHalfStar =
                                  index === Math.floor(getRating) &&
                                  getRating % 1 !== 0;
                                return (
                                  <Image
                                    key={index}
                                    src={
                                      isHalfStar
                                        ? "/images/half-star.svg"
                                        : "/images/review.svg"
                                    }
                                    alt="Review"
                                    width={20}
                                    height={24}
                                  />
                                );
                              })}
                            </div>
                            <div className={designspacestyles.colorbox_title}>
                              {allLatestShade.title}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className={designspacestyles.panel_conttab}>
                  <div className={designspacestyles.colorbox_wrp}>
                    {allTrendingShades &&
                      allTrendingShades.map((allTrendingShade, index) => {
                        //  console.log("allTrendingShade",allTrendingShade);
                        return (
                          <div
                            className={designspacestyles.colorbox_shade}
                            key={`trendingShade-${index}`}
                          >
                            <div className={designspacestyles.colorbox_imgcont}>
                              <Link
                                href={`/product/productdetails?product_id=${allTrendingShade?.id}`}
                              >
                                <Image
                                  src={allTrendingShade?.image?.url}
                                  alt="allTrendingShade"
                                  fill="true"
                                />
                              </Link>
                            </div>
                            <div className={designspacestyles.color_reviewbox}>
                              {Array.from({
                                length: Math.ceil(`${allTrendingShade?.rating}`)
                              }).map((_, index) => {
                                const getRating = allTrendingShade?.rating;
                                const isHalfStar =
                                  index === Math.floor(getRating) &&
                                  getRating % 1 !== 0;
                                return (
                                  <Image
                                    key={index}
                                    src={
                                      isHalfStar
                                        ? "/images/half-star.svg"
                                        : "/images/review.svg"
                                    }
                                    alt="Review"
                                    width={20}
                                    height={24}
                                  />
                                );
                              })}
                            </div>
                            <div className={designspacestyles.colorbox_title}>
                              {allTrendingShade.title}
                            </div>
                          </div>
                        );
                      })}
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
