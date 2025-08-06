import sustanabilitystyles from "../sustainability/sustanability.module.css";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import AnimatedText from "@/components/Framemotion/framemotion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function Sustainability({ sustainData }) {
  const Sustainability = sustainData;
  const SustainabilityData = sustainData?.data?.content;
  const SustainabilityCountData = sustainData?.data?.content?.highlights;

  // const [startCount, setStartCount] = useState(false);
  // const { ref, inView } = useInView({
  //   triggerOnce: true, // Count starts only once
  //   threshold: 0.5 // When 50% of the section is visible
  // });

  // useEffect(() => {
  //   if (inView) {
  //     setStartCount(true);
  //   }
  // }, [inView]);

  return (
    <>
      <section>
        <div className="container">
          <div className={`${sustanabilitystyles.sustainab_mrp} `}>
            <div
              className={sustanabilitystyles.sustain_leftbox}
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <div className={sustanabilitystyles.brandin}>
                <Image
                  src="/images/witebrand.svg"
                  alt="Brandin Sustainability"
                  fill={true}
                />
              </div>
              <Image src={SustainabilityData.image_url} alt="" fill={true} />
            </div>

            <div className={sustanabilitystyles.sustain_rightbox}>
              <div className={sustanabilitystyles.sustainab_rightboxinner}>
                <h2>
                  <span>{SustainabilityData.preheading}</span>
                  <AnimatedText text={SustainabilityData.heading} />
                </h2>
                <p
                  className={sustanabilitystyles.sust_subtxt}
                  data-aos="fade-down"
                  data-aos-easing="linear"
                >
                  {SustainabilityData.subheading}
                </p>
                <p
                  className={sustanabilitystyles.sust_txt}
                  data-aos="fade-down"
                  data-aos-easing="linear"
                >
                  {SustainabilityData.description}
                </p>
                <Link
                  href={
                    SustainabilityData.button_link == ""
                      ? "#"
                      : SustainabilityData.button_link
                  }
                  className="common-btn"
                >
                  <label>
                    {SustainabilityData.button_name}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt="arrow-right"
                    />
                  </label>
                </Link>
              </div>

              <div
                className={sustanabilitystyles.counter_wrp}
                data-aos="fade-down"
                data-aos-easing="linear"
              >
                <div className={sustanabilitystyles.counter_box}>
                  <Image
                    src="/images/like_counter.svg"
                    alt=""
                    width={58}
                    height={58}
                  />
                  <CountUp
                    start={0}
                    end={SustainabilityCountData[0].number}
                    duration={40}
                  />
                  <p>{SustainabilityCountData[0].title}</p>
                </div>

                <div className={sustanabilitystyles.counter_box}>
                  <Image
                    src="/images/experience.svg"
                    alt=""
                    width={48}
                    height={48}
                  />
                  <CountUp
                    end={SustainabilityCountData[1].number}
                    duration={30}
                  />
                  <p>{SustainabilityCountData[1].title}</p>
                </div>

                <div className={sustanabilitystyles.counter_box}>
                  <Image
                    src="/images/prj_b.svg"
                    alt=""
                    width={58}
                    height={58}
                  />
                  <CountUp
                    end={SustainabilityCountData[2].number}
                    duration={40}
                  />
                  <p>{SustainabilityCountData[2].title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div style={{ textAlign: 'center', padding: '50px' }}>
          <h1>Counter-Up Example</h1>
          <p style={{ fontSize: '30px' }}>
            <CountUp end={100} duration={3} />
          </p>
          <p style={{ fontSize: '20px' }}>This is a counter that animates up to 100 in 3 seconds.</p>
        </div> */}
        </div>
      </section>
    </>
  );
}
