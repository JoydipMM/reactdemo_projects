import AnimatedText from "@/components/Framemotion/framemotion";
import sustanabilitystyles from "@/components/Home/sustainability/sustanability.module.css";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import Video from "../video/video";

export default function Ourimpact({ ourImpactData }) {
  const allImpact = ourImpactData?.data?.content;
  const allImpactStatistic = allImpact?.statistic;
  //console.log("allImpact", allImpact);
  return (
    <section>
      <div className="container">
        <div className="topadding_bottom">
          <div className={`${sustanabilitystyles.sustainab_mrp} `}>
            <div className={sustanabilitystyles.sustain_leftbox}>
              {/* <Image src="/images/sustain_leftimg.png" alt="" fill={true} /> */}
              <Video allImpact={allImpact} />
            </div>

            <div className={sustanabilitystyles.sustain_rightbox}>
              <div className={sustanabilitystyles.sustainab_rightboxinner}>
                <h2>
                  <span>{allImpact?.preheading}</span>
                  <AnimatedText text={allImpact?.heading} />
                </h2>
                <p>{allImpact?.description}</p>
                <Link
                  href={
                    allImpact?.button_link == "" ? "#" : allImpact?.button_link
                  }
                  className="common-btn"
                >
                  <label>
                    {allImpact?.button_name}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt="btnName"
                    />
                  </label>
                </Link>
              </div>

              <div className={sustanabilitystyles.counter_wrp}>
                {allImpactStatistic &&
                  allImpactStatistic.map((stat, index) => {
                    return (
                      <div
                        className={sustanabilitystyles.counter_box}
                        key={`statictics-${index}`}
                      >
                        <Image
                          src={stat?.image?.image_url}
                          alt="sustanabilitystyles"
                          width={58}
                          height={58}
                        />
                        <CountUp end={stat.statistic_number} duration={10} />
                        <p>{stat.statistic_name}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
