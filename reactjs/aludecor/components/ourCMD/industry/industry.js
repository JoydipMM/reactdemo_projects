import Image from "next/image";
import Link from "next/link";
import buildingRequirementsstyles from "@/components/residentialSolutions/buildingRequirements/buildingRequirements.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import industrystyles from "../industry/industry.module.css";

export default function OurIndustry({ aspirationsData, industryData }) {
  const allAspirationsData = aspirationsData?.data?.content;
  const aspirationsItems = allAspirationsData?.items;
  const allIndustryDatas = industryData?.data?.content;
  const industryItems = allIndustryDatas?.items;
  return (
    <>
      <div className="container">
        <div className="topadding_bottom">
          <h2 className="titlecenter">
            <span>{allIndustryDatas?.pre_heading}</span>
            <AnimatedText text={allIndustryDatas?.heading} />
          </h2>
          {industryItems &&
            industryItems.map((industryItems, index) => {
              return (
                <div className="topadding_top" key={`industryItemsId-${index}`}>
                  <div
                    className={`sswraper ${industrystyles.sswraper} ${index % 2 == 0 ? industrystyles.flipimg : ""}`}
                  >
                    <div className="sstextpart">
                      <h2>
                        <AnimatedText text={industryItems?.title} />
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: industryItems?.content
                        }}
                      ></div>
                    </div>
                    <div className="ssimagepart">
                      <div className="animate_frame hoverarea">
                        <div className="brands">
                          <Image
                            fill={true}
                            src="/images/brand-star.svg"
                            alt="brand"
                          />
                        </div>
                        <Image style={{borderRadius:'0'}}
                          src={industryItems?.image?.image_url}
                          alt="Animated"
                          fill={true}
                          className="ssimage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* <div className="commonpadding">
            <div className={`sswraper ${industrystyles.sswraper}`}>
              <div className="sstextpart">
                <h2>
                  <AnimatedText text="Visionary Outlook" />
                </h2>
                <p>
                  Believes in investing in people, processes, and technology to
                  manufacture world-class, innovative products that provide
                  effective solutions to the architectural fraternity.
                </p>
                <p>
                  Believes in investing in people, processes, and technology to
                  manufacture world-class, innovative products that provide
                  effective solutions to the architectural fraternityBelieves in
                  investing in people, processes, and technology to manufacture
                  world-class, innovative products that provide effective
                  solutions to the architectural fraternity
                </p>
                <p>
                  Believes in investing in people, processes, and technology to
                  manufacture world-class, innovative products that provide
                  effective solutions to the architectural fraternity
                </p>
              </div>
              <div className="ssimagepart">
                <div className="animate_frame hoverarea">
                  <div className="brands">
                    <Image fill={true} src="/images/brand-star.svg" alt="" />
                  </div>
                  <Image
                    src="/images/ourcmd/industry-2.jpg"
                    alt="Animated"
                    fill={true}
                    className="ssimage"
                  />
                </div>
              </div>
            </div>
          </div> */}

          <div className={`topadding_bottom ${industrystyles.brdtop}`}>
            <h2 className="titlecenter">
              <span>{allAspirationsData?.pre_heading}</span>
              <AnimatedText text={allAspirationsData?.heading} />
            </h2>
            {aspirationsItems &&
              aspirationsItems.map((aspirationsItem, index) => {
                return (
                  <div
                    className="topadding_top"
                    key={`industryItemsId-${index}`}
                  >
                    <div
                      className={`sswraper ${industrystyles.sswraper} ${index % 2 == 0 ? industrystyles.flipimg : ""}`}
                    >
                      <div className="sstextpart">
                        <h2>
                          <AnimatedText text={aspirationsItem?.title} />
                        </h2>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: aspirationsItem?.content
                          }}
                        ></div>
                        {aspirationsItem.social_media.length === 0 ? (
                          ""
                        ) : (
                          <ul className={`${industrystyles.sociallist}`}>
                            <li>
                              <Link
                                href={
                                  aspirationsItem?.social_media[0]?.media_url ==
                                  ""
                                    ? "#"
                                    : aspirationsItem?.social_media[0]
                                        ?.media_url
                                }
                              >
                                <Image
                                  src="/images/ourcmd/whatsapp.png" 
                                  alt="whatsapp"
                                  fill={true}
                                />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  aspirationsItem?.social_media[1]?.media_url ==
                                  ""
                                    ? "#"
                                    : aspirationsItem?.social_media[1]
                                        ?.media_url
                                }
                              >
                                <Image
                                  src="/images/ourcmd/instagram.png"
                                  alt="instagram"
                                  fill={true}
                                />
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                      <div className="ssimagepart">
                        <div className="animate_frame hoverarea">
                          <div className="brands">
                            <Image
                              fill={true}
                              src="/images/brand-star.svg"
                              alt=""
                            />
                          </div>
                          <Image  style={{borderRadius:'0'}} 
                            src={aspirationsItem?.image?.image_url}
                            alt="Animated"
                            fill={true}
                            className="ssimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
