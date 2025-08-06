import AnimatedText from "@/components/Framemotion/framemotion";
import introstyles from "../introduction/introduction.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
export default function Introduction({ introductionData }) {
  const allIntoductionData = introductionData.data?.content;
  const introItems = allIntoductionData?.items;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={introstyles.introwrp}>
            <div
              className={`${introstyles.leftintro} ${introstyles.allcenter}`}
            >
              <h2>
                <AnimatedText text={allIntoductionData?.heading} />
              </h2>
              {introItems &&
                introItems.map((introItem, index) => {
                  return (
                    <React.Fragment key={`itemID-${index}`}>
                      <p className={introstyles.titletxt}>
                        {introItem?.heading}
                      </p>
                      <p>{introItem?.description}</p>
                    </React.Fragment>
                  );
                })}
              <Link
                href={
                  allIntoductionData?.btn_link == ""
                    ? "#"
                    : allIntoductionData?.btn_link
                }
                className="common-btn"
                type="submit"
              >
                <label>
                  Read More
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="Arrow Btn Label"
                  />
                </label>
              </Link>
            </div>
            <div className={introstyles.leftintro}>
              <Image
                fill={true}
                src={allIntoductionData?.image?.url}
                alt="allIntoductionData"
                className={introstyles.img_w}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
