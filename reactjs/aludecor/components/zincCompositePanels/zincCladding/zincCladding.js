import Image from "next/image";

import bussinessstyles from "@/components/channelPartners/bussGrowth/bussGrowth.module.css";
import zincCladdingstyles from "@/components/zincCompositePanels/zincCladding/zincCladding.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Zinccladding({ architecturalData }) {
  const allArchitecturalData = architecturalData?.data?.content;
  const allApplication = allArchitecturalData?.applications;
  return (
    <>
      <section className={`${bussinessstyles.updatewrppart} commonpadding`}>
        <div className="container">
          <div className="titlearea">
            <h2 className="titlecenter">
              <AnimatedText text={allArchitecturalData?.heading} />
            </h2>
            <p>{allArchitecturalData?.subheading}</p>
          </div>

          <div className={bussinessstyles.vid_explore_mper}>
            {allApplication &&
              allApplication.map((application, index) => {
                return (
                  <div
                    className={`${bussinessstyles.explorevidbox} ${zincCladdingstyles.explorevidbox}`}
                    key={`allApplicationID-${index}`}
                  >
                    <div className={bussinessstyles.exploreimgcont}>
                      <Image
                        src={application?.image?.url}
                        alt="zinccompossit"
                        fill={true}
                      />
                    </div>
                    <h3>{application?.title}</h3>
                    <p>{application?.excerpt}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
