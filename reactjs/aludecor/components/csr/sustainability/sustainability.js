import sustanabilitystyles from "@/components/Home/sustainability/sustanability.module.css";
import Image from "next/image";
import Link from "next/link";
import manufacturingstyles from "@/components/ourCMD/manufacturing/manufacturing.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import sustainabilitystyle from "@/components/csr/sustainability/sustainability.module.css";

export default function SustainabilityCSR({ sustainabilityData }) {
  const allData = sustainabilityData?.data?.content;
  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <div
            className={`${sustanabilitystyles.sustainab_mrp} ${manufacturingstyles.sustainab_mrp} `}
          >
            <div
              className={sustanabilitystyles.sustain_leftbox}
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <div
                className={`${sustanabilitystyles.brandin} ${sustainabilitystyle.brandin}`}
              >
                <Image
                  src="/images/witebrand.svg"
                  alt="Brandin Sustainability"
                  fill={true}
                />
              </div>
              <Image src={allData?.image?.url} alt="img" fill={true} />
            </div>

            <div
              className={`${sustanabilitystyles.sustain_rightbox} ${manufacturingstyles.sustain_rightbox} `}
            >
              <div
                className={`${sustanabilitystyles.sustainab_rightboxinner} ${manufacturingstyles.sustainab_rightboxinner} `}
              >
                <h2>
                  <span>{allData?.preheading}</span>
                  <AnimatedText text={allData?.heading} />
                </h2>
                <Link
                  href={allData?.button_link == "" ? "#" : allData?.button_link}
                  className="common-btn"
                >
                  <label>
                    {allData?.button_name}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt=""
                    />
                  </label>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
