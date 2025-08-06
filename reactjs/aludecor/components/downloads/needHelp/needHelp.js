"use client";
import Link from "next/link";
import needstyles from "@/components/fabricationGuide/needHelp/needHelp.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function NeedHelp({ helpData }) {
  const allHelpData = helpData?.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={needstyles.readywrk}>
            <div className={needstyles.readyleft}>
              <h2>
                <AnimatedText text={allHelpData?.heading} />
              </h2>
              <p>{allHelpData?.description}</p>

              <Link
                href={
                  allHelpData.button_link == "" ? "#" : allHelpData.button_link
                }
                className="common-btn"
              >
                <label>
                  {allHelpData?.button_name}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow"
                  />
                </label>
              </Link>
            </div>
            <div className={`${needstyles.readyrit} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="brand" />
              </div>
              <div className="readtframe">
                <Image
                  fill={true}
                  src="/images/readywork-frame.svg"
                  alt="frame"
                />
              </div>
              <Image fill={true} src={allHelpData?.image?.url} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
