import sustanabilitystyles from "@/components/Home/sustainability/sustanability.module.css";
import Image from "next/image";
import Link from "next/link";
import manufacturingstyles from "../manufacturing/manufacturing.module.css";

export default function Manufacturing({ manufacturingData }) {
  const allManuData = manufacturingData?.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div
            className={`${sustanabilitystyles.sustainab_mrp} ${manufacturingstyles.sustainab_mrp} `}
          >
            <div className={sustanabilitystyles.sustain_leftbox}>
              <Image style={{borderRadius:'0'}}
                src={allManuData?.image?.url}
                alt="manufacturingData"
                fill={true}
              />
            </div>

            <div
              className={`${sustanabilitystyles.sustain_rightbox} ${manufacturingstyles.sustain_rightbox} `}
            >
              <div
                className={`${sustanabilitystyles.sustainab_rightboxinner} ${manufacturingstyles.sustainab_rightboxinner} `}
              >
                <h2>
                  <span>{allManuData?.pre_heading}</span>
                  {allManuData?.heading}
                </h2>
                <p
                  className={sustanabilitystyles.sust_txt}
                  style={{ marginBottom: 0 }}
                >
                  {allManuData?.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
