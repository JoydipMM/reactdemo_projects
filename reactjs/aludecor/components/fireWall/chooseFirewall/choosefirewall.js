"use client";
import Link from "next/link";
import readystyles from "@/components/Projectsgallery/ready-work/ready.module.css";
import needhelpstyles from "@/components/ProductHandlingGuide/needhelp/needhelp.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
import choosefirewallstyles from "../chooseFirewall/choosefirewall.module.css";

export default function ChooseFirewall({ advertisementData }) {
  const allAdvtData = advertisementData.data?.content;
  const advtButtons = allAdvtData?.buttons;
  console.log("advtButtons", advtButtons);
  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <div className={`${readystyles.readywrk} ${needhelpstyles.readywrk}`}>
            <div
              className={`${readystyles.readyleft} ${needhelpstyles.readyleft}`}
            >
              <h2>
                <AnimatedText text={allAdvtData?.heading} />
              </h2>

              <div className={`${choosefirewallstyles.btn_row}`}>
                {advtButtons?.map((advtButton, index) => (
                  <Link
                    href={advtButton?.link == "" ? "#" : advtButton?.link}
                    className="common-btn"
                    key={`advtButtonID-${index}`}
                  >
                    <label>
                      {advtButton?.name}
                      <Image
                        width={34}
                        height={16}
                        src="/images/arrow-right.svg"
                        alt="right"
                      />
                    </label>
                  </Link>
                ))}
              </div>
            </div>
            <div
              className={`${readystyles.readyrit} ${needhelpstyles.readyrit} hoverarea`}
            >
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="star" />
              </div>
              <div className="readtframe">
                <Image
                  fill={true}
                  src="/images/readywork-frame.svg"
                  alt="readywork"
                />
              </div>
              <Image
                fill={true}
                src={allAdvtData?.image?.url}
                alt="allAdvtData"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
