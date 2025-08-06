import Image from "next/image";

import React, { useState } from "react";

import AnimatedText from "@/components/Framemotion/framemotion";

import whyfirewallstyles from "../whyFireWall/whyfirewall.module.css";
export default function whyFireWall({ whySaferDataVal }) {
  const whySaferData = whySaferDataVal.data?.content;
  const whySaferTableDatas = whySaferData?.table_data;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={`${whyfirewallstyles.top_content}`}>
            <h2 className="centertie">
              <AnimatedText text={whySaferData?.heading} />
            </h2>
          </div>
          <div className={`${whyfirewallstyles.whyfirewall}`}>
            <div
              className="top-txt"
              dangerouslySetInnerHTML={{
                __html: whySaferData?.top_description
              }}
            ></div>
            <div
              className="left"
              dangerouslySetInnerHTML={{
                __html: whySaferData?.left_description
              }}
            ></div>
            <div
              className="right"
              dangerouslySetInnerHTML={{
                __html: whySaferData?.right_description
              }}
            ></div>
          </div>

          <div className={`${whyfirewallstyles.whytable}`}>
            <table>
              <tr>
                <th>Material</th>
                <th>Fire Behavior</th>
                <th>Decomposition Temp</th>
                <th>Core Safety Level</th>
              </tr>
              {whySaferTableDatas?.map((whySaferTableData, index) => (
                <tr key={`whySaferTableDataID-${index}`}>
                  <td>{whySaferTableData?.material}</td>
                  <td>{whySaferTableData?.fire_behaviour}</td>
                  <td>{whySaferTableData?.decomposition_temp}</td>
                  <td>{whySaferTableData?.core_safety_level}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
