import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";
import earlylifestyles from "@/components/ourCMD/earlylife/earlylife.module.css";
import commitmentstyles from "@/components/madeinIndia/commitment/commitment.module.css";

export default function Commitment({ informationData }) {
  const allInformationData = informationData?.data?.content;
  const infoDatas = allInformationData?.commitments;
  return (
    <>
      <section
        className={`${earlylifestyles.earlylife_container} ${commitmentstyles.earlylife_container}`}
      >
        <div className="container">
          <div className="earlylife-row">
            <div className="left commonpadding">
              <h2>
                <AnimatedText text={allInformationData?.heading} />
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: allInformationData?.description
                }}
              ></div>
              <Link
                href={
                  allInformationData?.button_link == ""
                    ? "#"
                    : allInformationData?.button_link
                }
                className="common-btn"
              >
                <label>
                  {allInformationData?.button_name}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="right"
                  />
                </label>
              </Link>
            </div>
            <div
              className={`${commitmentstyles.right_container} right commonpadding`}
            >
              <ul>
                {infoDatas &&
                  infoDatas.map((infoData, index) => {
                    return (
                      <li key={`infoDataID-${index}`}>
                        <h4>
                          <Image
                            width={42}
                            height={42}
                            src={infoData?.icon?.url}
                            alt="icon"
                          />
                          {infoData?.title}
                        </h4>
                        <p>{infoData?.excerpt}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
