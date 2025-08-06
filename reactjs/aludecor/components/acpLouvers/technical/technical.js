import AnimatedText from "@/components/Framemotion/framemotion";
import technicalstyles from "@/components/acpLouvers/technical/technical.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
export default function Technical({ technicalDetails }) {
  const allTechnicalDetail = technicalDetails?.data?.content;

  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allTechnicalDetail?.heading} />
          </h2>
          <p className={`${technicalstyles.textcenter}`}>
            {allTechnicalDetail?.description}
          </p>
          <div className={`${technicalstyles.technical_content} topadding_top`}>
            <div
              className={`gentable_content ${technicalstyles.gentable_content}`}
            >
              <table>
                <tbody>
                  <tr>
                    <th>Louver Type</th>
                    <th>Louver Series</th>
                    <th>Louver Panel Size (WxLxH)</th>
                    <th>Louver Dimensions</th>
                    <th>No. of Boxes</th>
                    <th>No. of Slots</th>
                  </tr>
                  {Object.entries(
                    allTechnicalDetail.louver_type_details.reduce(
                      (acc, item) => {
                        if (!acc[item.slug]) acc[item.slug] = [];
                        acc[item.slug].push(item);
                        return acc;
                      },
                      {}
                    )
                  ).map(([slug, items]) => (
                    <React.Fragment key={`${slug}-0`}>
                      <tr>
                        <td rowSpan={items.length}>{items[0].type}</td>
                        <td>{items[0].series}</td>
                        <td>{items[0].size}</td>
                        <td>{items[0].dimensions}</td>
                        <td>{items[0].no_of_boxes}</td>
                        <td>{items[0].no_of_slots}</td>
                      </tr>
                      {items.slice(1).map((item, index) => (
                        <tr key={`${slug}-${index + 1}`}>
                          <td>{item.series}</td>
                          <td>{item.size}</td>
                          <td>{item.dimensions}</td>
                          <td>{item.no_of_boxes}</td>
                          <td>{item.no_of_slots}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
