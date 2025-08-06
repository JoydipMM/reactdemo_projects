"use client";
import Link from "next/link";
import readystyles from "../ready-work/ready.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function ReadyWork({ allAdvertisementData }) {
  const allAdvtData = allAdvertisementData?.data?.content;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={readystyles.readywrk}>
            <div className={readystyles.readyleft}>
              <h2>
                <AnimatedText text={allAdvtData?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: allAdvtData?.description }}
              ></p>

              <Link href={allAdvtData?.button_url} className="common-btn">
                {" "}
                <label>
                  {" "}
                  {allAdvtData?.button_text}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                  />
                </label>
              </Link>
            </div>
            <div className={`${readystyles.readyrit} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="" />
              </div>
              <div className="readtframe">
                <Image fill={true} src="/images/readywork-frame.svg" alt="" />
              </div>
              <Image fill={true} src="/images/readywork.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
