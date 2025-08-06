import Image from "next/image";

import bussinessstyles from "@/components/channelPartners/bussGrowth/bussGrowth.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function BussGrowth({ opportunitiesData }) {
  const allData = opportunitiesData?.data?.content;
  const allPillarDatas = allData?.opportunities;
  return (
    <>
      <section className={`${bussinessstyles.updatewrppart} commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allData?.preheading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>

          <div className={bussinessstyles.vid_explore_mper}>
            {allPillarDatas &&
              allPillarDatas.map((allPillarData, index) => {
                return (
                  <div
                    className={bussinessstyles.explorevidbox}
                    key={`oppId-${index}`}
                  >
                    <div className={bussinessstyles.exploreimgcont}>
                      <Image
                        src={allPillarData?.image?.url}
                        alt="image"
                        fill={true}
                      />
                    </div>
                    <h3>{allPillarData?.title}</h3>
                    <p>{allPillarData?.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
