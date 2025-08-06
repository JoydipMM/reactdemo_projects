import AnimatedText from "@/components/Framemotion/framemotion";
import featuresstyles from "../prdFeatures/prdFeatures.module.css";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { handleDownload } from "@/helper/downloadHelper";
import { useRouter } from "next/router";
export default function PrdFeatures({ featuredData, session = null }) {
  const allFeaturedData = featuredData?.data?.content;
  const allFeaturedGalleryData = allFeaturedData?.gallery_images;
  const featuredValues = allFeaturedData?.features;
  const featuredApplications = allFeaturedData?.application;
  const router = useRouter();
  const { query } = router; // This gets all query parameters from the URL
  //console.log("allFeaturedData", allFeaturedData);
  const product_Id = query.product_id ? query.product_id : undefined;
  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <div className={featuresstyles.featurewrp}>
            <div className={featuresstyles.featureleft}>
              <div className={featuresstyles.prd_featslide}>
                <div className={featuresstyles.productboxb}>
                  <Image
                    src={allFeaturedData?.feature_image}
                    alt="Featured Image"
                    width={400}
                    height={840}
                  />
                  <div className={featuresstyles.prj_innerbox_overlay}>
                    <Link href="#">
                      <Image
                        src="/images/pause-circle.svg"
                        alt="Link"
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div>
                </div>

                <div className={featuresstyles.thumbnail_slider}>
                  {allFeaturedGalleryData &&
                    allFeaturedGalleryData.map((featuredData, index) => {
                      return (
                        <div
                          className={featuresstyles.product_thumb}
                          key={`featured-${index}`}
                        >
                          <div className={featuresstyles.thmbbox}>
                            <Image
                              src={featuredData?.image?.url}
                              alt="Noir"
                              width={200}
                              height={175}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div></div>
              </div>
            </div>

            <div className={featuresstyles.featureright}>
              <h2>
                <AnimatedText text={allFeaturedData?.product_title} />
              </h2>
              <p>{allFeaturedData?.short_description}</p>
              <h3>
                <AnimatedText text={allFeaturedData?.feature_title} />
              </h3>
              <div className={featuresstyles.featureicone}>
                {featuredValues &&
                  featuredValues.map((featuredValue, index) => {
                    return (
                      <div
                        className={featuresstyles.feat_iconbox}
                        key={`featuredVal-${index}`}
                      >
                        <div className={featuresstyles.feat_iconimgbox}>
                          <Image
                            src={featuredValue?.image?.url}
                            alt="shade_icon"
                            fill={true}
                          />
                        </div>
                        <p>{featuredValue?.feature_name}</p>
                      </div>
                    );
                  })}
              </div>
              <h3>{allFeaturedData?.application_title}</h3>

              <div className={featuresstyles.featureicone}>
                {featuredApplications &&
                  featuredApplications.map((featuredApplication, index) => {
                    return (
                      <div
                        className={featuresstyles.feat_iconbox}
                        key={`featuredApplications-${index}`}
                      >
                        <div className={featuresstyles.feat_iconimgbox}>
                          <Image
                            src={featuredApplication?.image?.url}
                            alt=""
                            fill={true}
                          />
                        </div>
                        <p>{featuredApplication?.application_name}</p>
                      </div>
                    );
                  })}
              </div>
              <div className={featuresstyles.linkbox}>
                <Link
                  href={`/product/shippingaddress?product_Id=${product_Id}`}
                  className="common-btn"
                >
                  <label>
                    Request A Quote
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt="arrow"
                    />
                  </label>
                </Link>
                {session ? (
                  <Link
                    href={allFeaturedData?.download_button_url}
                    className="common-btn"
                    download
                    target="_blank" // Opens in new tab
                    rel="noopener noreferrer" // Security best practice
                  >
                    <label>
                      {allFeaturedData?.download_button_name}
                      <Image
                        width={34}
                        height={16}
                        src="/images/arrow-right.svg"
                        alt=""
                      />
                    </label>
                  </Link>
                ) : (
                  <button
                    className="common-btn"
                    onClick={() => handleDownload(router.asPath)}
                  >
                    <label>
                      {allFeaturedData?.download_button_name}
                      <Image
                        width={34}
                        height={16}
                        src="/images/arrow-right.svg"
                        alt=""
                      />
                    </label>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
