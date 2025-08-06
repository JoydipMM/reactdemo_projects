"use client";
import Link from "next/link";
import needstyles from "../needHelp/needHelp.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function NeedHelp({ ctaData }) {
  const allCtaData = ctaData?.data?.content;
  const allCtaButtons = allCtaData?.buttons;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={needstyles.readywrk}>
            <div className={needstyles.readyleft}>
              <h2>
                <AnimatedText text={allCtaData?.heading} />
              </h2>
              <p>{allCtaData?.description}</p>
              {allCtaButtons?.map((allCtaButton, index) => (
                <Link
                  href={
                    allCtaButton?.button_url == ""
                      ? "#"
                      : allCtaButton?.button_url
                  }
                  className="common-btn"
                  key={`allCtaButtonID-${index}`}
                >
                  {" "}
                  <label>
                    {" "}
                    {allCtaButton?.button_text}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt=""
                    />
                  </label>
                </Link>
              ))}
            </div>
            <div className={`${needstyles.readyrit} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="star" />
              </div>
              <div className="readtframe">
                <Image fill={true} src="/images/readywork-frame.svg" alt="" />
              </div>
              <Image fill={true} src={allCtaData?.image?.url} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
