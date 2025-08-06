import AnimatedText from "@/components/Framemotion/framemotion";
import sustanabilitystyles from "@/components/Home/sustainability/sustanability.module.css";
import Image from "next/image";
export default function Commercialbuildings({ commercialData }) {
  const allCommercialData = commercialData?.data?.content;
  const listStyle = {
    paddingBottom: "15px",
    marginBottom: "0"
  };
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={`${sustanabilitystyles.sustainab_mrp} `}>
            <div className={sustanabilitystyles.sustain_leftbox}>
              <Image
                src={allCommercialData?.image?.url}
                alt="sustain_leftimg"
                fill={true}
              />
            </div>

            <div className={sustanabilitystyles.sustain_rightbox}>
              <div className={sustanabilitystyles.sustainab_rightboxinner}>
                <h2>
                  <span>{allCommercialData?.pre_heading}</span>
                  <AnimatedText text={allCommercialData?.heading} />
                </h2>
                <p>{allCommercialData?.description}</p>
                <p
                  style={listStyle}
                  className={sustanabilitystyles.sust_subtxt}
                >
                  {allCommercialData?.blod_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
