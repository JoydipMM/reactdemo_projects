import AnimatedText from "@/components/Framemotion/framemotion";
import featalumstyles from "../features/features.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Features({ featureData, applicationData }) {
  const allFeatureData = featureData.data?.content;
  const allApplicationData = applicationData.data?.content;
  return (
    <>
      <section className="">
        <div className="container">
          <div className={`${featalumstyles.introwrp} topadding_bottom`}>
            <div className={`${featalumstyles.leftintro} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="star" />
              </div>
              <Image
                fill={true}
                src={allFeatureData?.image_url}
                alt="allFeatureData"
                className={featalumstyles.img_w}
              />
            </div>

            <div
              className={`${featalumstyles.ritintro} ${featalumstyles.allcenter}`}
            >
              <h2>
                <AnimatedText text={allFeatureData?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: allFeatureData?.content
                }}
              ></p>

              {/* <Link href="#" className="common-btn">
                {" "}
                <label>
                  Read More
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="Arrow Btn Label"
                  />
                </label>
              </Link> */}
            </div>
          </div>

          <div
            className={`${featalumstyles.introwrp} ${featalumstyles.reverse} topadding_bottom`}
          >
            <div className={`${featalumstyles.leftintro} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="star" />
              </div>
              <Image
                fill={true}
                src={allApplicationData?.image_url}
                alt="allApplicationData"
                className={featalumstyles.img_w}
              />
            </div>

            <div
              className={`${featalumstyles.ritintro} ${featalumstyles.allcenter}`}
            >
              <h2>
                <AnimatedText text={allApplicationData?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: allApplicationData?.content
                }}
              ></p>

              {/* <Link href="#" className="common-btn">
                {" "}
                <label>
                  Read More
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="Arrow Btn Label"
                  />
                </label>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
