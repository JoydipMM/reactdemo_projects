import staystyles from "../stayInformed/stay.module.css";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Stay({ stayData }) {
  const stayContent = stayData.data.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={`${staystyles.staymwrper} `}>
            <div className={staystyles.stayleft}>
              <div className={staystyles.sustainab_rightboxinner}>
                <h2>
                  <span data-aos="fade-down">{stayContent?.preheading}</span>
                  <AnimatedText text={stayContent?.heading} />
                </h2>
                <h3
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  // className={staystyles.sust_subtxt}
                >
                  {stayContent?.subheading}
                </h3>
                <p
                  data-aos="fade-right"
                  data-aos-delay="310"
                  data-aos-duration="2000"
                  className={staystyles.sust_txt}
                >
                  {stayContent?.description}
                </p>
                <Link
                  href="#"
                  className="common-btn"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="320"
                >
                  {" "}
                  <label>
                    {" "}
                    View more Brochure{" "}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt="arrow-right"
                    />
                  </label>
                </Link>
              </div>
            </div>

            <div className={staystyles.stayrit}>
              <Image
                src={stayContent?.image_url}
                alt={stayContent?.button_name}
                fill={true}
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
