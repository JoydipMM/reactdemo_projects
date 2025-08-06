import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import readystyles from "@/components/Projectsgallery/ready-work/ready.module.css";
import productcontentstyles from "@/components/Product/productContent/productContent.module.css";

export default function Press({ pressData }) {
  const allPressData = pressData?.data?.content;
  const clearStyle = {
    clear: "both",
    width: "100%"
  };
  const titleStyle = {
    maxWidth: "481px"
  };
  return (
    <section>
      <div className="container">
        <div className="topadding_top">
          <div
            className={`${readystyles.readywrk} ${productcontentstyles.safety}`}
          >
            <div className={readystyles.readyleft}>
              <h2 style={titleStyle}>
                <AnimatedText text={allPressData?.preheading} />
              </h2>
              <p>{allPressData?.description}</p>
              <div style={clearStyle}></div>
              <Link
                href={
                  allPressData?.button_link == ""
                    ? "#"
                    : allPressData?.button_link
                }
                className="common-btn"
              >
                {" "}
                <label>
                  {allPressData?.button_name}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                  />
                </label>
              </Link>
            </div>
            <div className={`${readystyles.readyrit} hoverarea`}>
              <div className="brands">
                <Image
                  fill={true}
                  src="/images/brand-star.svg"
                  alt="brand-star"
                />
              </div>
              <div className="readtframe">
                <Image
                  fill={true}
                  src="/images/readywork-frame.svg"
                  alt="readywork-frame"
                />
              </div>
              <Image
                fill={true}
                src={allPressData?.image_url}
                alt="readywork"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
