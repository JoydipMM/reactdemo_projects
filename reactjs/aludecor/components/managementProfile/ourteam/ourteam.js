import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import toolsstyles from "@/components/Home/tools/tools.module.css";
import ourteamstyles from "@/components/managementProfile/ourteam/ourteam.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Ourteam({ teamData }) {
  const fetchTeamData = teamData.data?.content;
  const allTeamDatas = fetchTeamData?.teams;
  return (
    <>
      <section
        className={`${toolsstyles.tools_container} ${ourteamstyles.tools_container} commonpadding`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <span>{fetchTeamData?.preheading}</span>
            <AnimatedText text={fetchTeamData?.heading} />
          </h2>

          <div className={`${ourteamstyles.teambox}`}>
            {allTeamDatas &&
              allTeamDatas?.map((allTeamData, index) => (
                <div className="tools-item" key={`allTeamDatasID-${index}`}>
                  <div className="icon1">
                    <Image
                      src={allTeamData?.image?.url}
                      width={261}
                      height={261}
                      alt="teamMember"
                    />
                  </div>
                  <div className="item-heading">{allTeamData?.name}</div>
                  <div className="item-title">{allTeamData?.designation}</div>
                  <div className="txt">{allTeamData?.description}</div>
                  <div className="socialicon">
                    <Link
                      href={
                        allTeamData?.facebook == ""
                          ? "#"
                          : allTeamData?.facebook
                      }
                      className="social-icon"
                    >
                      <Image
                        src="/images/mprofile/icon-1.svg"
                        width={11}
                        height={22}
                        alt=""
                      />
                    </Link>
                    <Link
                      href={
                        allTeamData?.twitter == "" ? "#" : allTeamData?.twitter
                      }
                      className="social-icon"
                    >
                      <Image
                        src="/images/mprofile/icon-2.svg"
                        width={24}
                        height={22}
                        alt=""
                      />
                    </Link>
                    <Link
                      href={
                        allTeamData?.instagram == ""
                          ? "#"
                          : allTeamData?.instagram
                      }
                      className="social-icon"
                    >
                      <Image
                        src="/images/mprofile/icon-3.svg"
                        width={22}
                        height={22}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* <Link href="#" className="common-btn">
            <label>
              load More{" "}
              <Image
                width={34}
                height={16}
                src="/images/arrow-right.svg"
                alt="arrow-right"
              />
            </label>
          </Link> */}
        </div>
      </section>
    </>
  );
}
