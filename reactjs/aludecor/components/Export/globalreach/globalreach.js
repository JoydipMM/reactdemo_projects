import sustanabilitystyles from "@/components/Home/sustainability/sustanability.module.css";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
export default function GlobalReach({ aboutData }) {
  const allData = aboutData?.data?.content;
  const allPillarDatas = allData?.statistic;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={`${sustanabilitystyles.sustainab_mrp} `}>
            <div className={sustanabilitystyles.sustain_leftbox}>
              <Image
                src={allData?.image_url?.url}
                alt="image_url"
                fill={true}
              />
            </div>

            <div className={sustanabilitystyles.sustain_rightbox}>
              <div className={sustanabilitystyles.sustainab_rightboxinner}>
                <h2>
                  <span>{allData?.preheading}</span>
                  {allData?.heading}
                </h2>
                <p
                  className={sustanabilitystyles.sust_txt}
                  style={{ marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: allData?.description }}
                ></p>
              </div>

              <div className={sustanabilitystyles.counter_wrp}>
                {allPillarDatas &&
                  allPillarDatas.map((allPillarData, index) => {
                    return (
                      <div
                        className={sustanabilitystyles.counter_box}
                        key={`counterId-${index}`}
                      >
                        <Image
                          src={allPillarData?.image?.url}
                          alt="icon"
                          width={58}
                          height={58}
                        />
                        <CountUp end={allPillarData?.number} duration={10} />
                        <p>{allPillarData?.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
