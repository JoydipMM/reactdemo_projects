import AnimatedText from "@/components/Framemotion/framemotion";
import featalumstyles from "../../solidAluminiumSheet/features/features.module.css";
import Link from "next/link";
import Image from "next/image";
export default function TransformProjects({ introductionData }) {
  const allIntroductionData = introductionData?.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div
            className={`${featalumstyles.introwrp} ${featalumstyles.reverse} `}
          >
            <div className={`${featalumstyles.leftintro} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="brand" />
              </div>
              <Image
                fill={true}
                src={allIntroductionData?.image?.url}
                alt="image"
                className={featalumstyles.img_w}
              />
            </div>

            <div
              className={`${featalumstyles.ritintro} ${featalumstyles.allcenter}`}
            >
              <h2>
                <AnimatedText text={allIntroductionData?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: allIntroductionData?.sub_heading
                }}
              ></p>
              <Link
                href={
                  allIntroductionData?.button_url == ""
                    ? "#"
                    : allIntroductionData?.button_url
                }
                className="common-btn"
              >
                <label>
                  {allIntroductionData?.button_txt}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="Arrow Btn Label"
                  />
                </label>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
