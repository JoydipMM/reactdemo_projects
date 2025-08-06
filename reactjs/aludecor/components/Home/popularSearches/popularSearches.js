import React, { useRef, useState } from "react";
import Link from "next/link";
import popularsearchesstyles from "../popularSearches/popularSearches.module.css";
import fetchDataSWR from "@/helper/fetchDataSWR";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Popularsearches({ popularData }) {
  const popularsearchesData = popularData.data?.content;
  const popularsearchesItems = popularData.data?.content?.search_items;
  return (
    <>
      <section
        className={`${popularsearchesstyles.popularsearch_container} commonpadding`}
      >
        <div className="container">
          <div className={popularsearchesstyles.popularwrap}>
            <h2>
              <AnimatedText text={popularsearchesData?.heading} />
            </h2>
            <ul>
              {popularsearchesItems?.map((popularsearchesItems, index) => (
                <li className="common-btn" key={`search-items-${index}`}>
                  <Link href={popularsearchesItems.link}>
                    <label>{popularsearchesItems.name}</label>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
