"use client";
import Link from "next/link";
import readystyles from "@/components/Projectsgallery/ready-work/ready.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function Jointhemovement({ contactData }) {
  const allContactData = contactData?.data?.content;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={readystyles.readywrk}>
            <div className={readystyles.readyleft}>
              <h2 style={{maxWidth:'800px'}}>
                <AnimatedText text={allContactData?.heading} />
              </h2>
              <p>{allContactData?.description}</p>

              <Link
                href={
                  allContactData?.button_link == ""
                    ? "#"
                    : allContactData?.button_link
                }
                className="common-btn"
              >
                <label>
                  {allContactData?.button_name}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow"
                  />
                </label>
              </Link>
            </div>
            <div className={`${readystyles.readyrit} hoverarea`}>
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
              <Image
                fill={true}
                src={allContactData?.image?.url}
                alt="allContactData"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
