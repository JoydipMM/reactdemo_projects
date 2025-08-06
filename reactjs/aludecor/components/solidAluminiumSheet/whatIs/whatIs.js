import Image from "next/image";

import whatisstyles from "../whatIs/whatIs.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function WhatIs({ descriptionData }) {
  const allDescriptionData = descriptionData.data?.content;
  const allFeatures = allDescriptionData?.features;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <h2>
            <AnimatedText text={allDescriptionData?.heading} />
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: allDescriptionData?.sub_heading
            }}
          ></p>
          <div className={whatisstyles.whatis_iconwrp}>
            {allFeatures &&
              allFeatures.map((allFeature, index) => {
                return (
                  <div
                    className={whatisstyles.whatis_iconbox}
                    key={`allFeature-${index}`}
                  >
                    <Image
                      src={allFeature?.image?.image_url}
                      alt="allFeatureImage"
                      width={24}
                      height={24}
                    />
                    <p>{allFeature?.content}</p>
                  </div>
                );
              })}
          </div>

          <div className={whatisstyles.whatbigbox}>
            <Image
              src={allDescriptionData?.image?.url}
              alt="Aluminium Panels"
              fill={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}
