import Image from "next/image";

import React, { useState } from "react";

import AnimatedText from "@/components/Framemotion/framemotion";
import contactcontentstyles from "@/components/csr/contactContent/contactcontent.module.css";
import whatfirewallstyles from "../whatFireWall/whatfirewall.module.css";
export default function whatFireWall({ firewallData }) {
  const allFirewallData = firewallData.data?.content;
  const highlightDatas = allFirewallData?.highlights;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={`${whatfirewallstyles.top_content}`}>
            <h2 className="centertie">
              <AnimatedText text={allFirewallData?.heading} />
            </h2>
            <p>{allFirewallData?.subheading}</p>
          </div>
          <div className={`${whatfirewallstyles.firewall}`}>
            <div
              className="left"
              dangerouslySetInnerHTML={{ __html: allFirewallData?.description }}
            ></div>
            <div className="right">
              {highlightDatas &&
                highlightDatas?.map((highlightData, index) => (
                  <div
                    className="fire-item-row"
                    key={`highlightDataID-${index}`}
                  >
                    <div className="icon-circle">
                      <Image
                        src={highlightData?.icon?.url}
                        alt="icon"
                        width={50}
                        height={70}
                      />
                    </div>
                    <div className="txt">
                      <div className="title">{highlightData?.title}</div>
                      <p>{highlightData?.excerpt}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
