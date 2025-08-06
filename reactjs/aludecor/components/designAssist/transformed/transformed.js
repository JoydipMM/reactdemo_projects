import AnimatedText from "@/components/Framemotion/framemotion";
import transforstyles from "@/components/designAssist/transformed/transformed.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Transformed({ transformData }) {
  const allTransformData = transformData?.data?.content;
  return (
    <>
      <section className={`topadding_bottom`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allTransformData?.preheading}</span>
            <AnimatedText text={allTransformData?.heading} />
          </h2>
          {/* ......before after wrper starts............ */}
          <div className={transforstyles.beforewrp}>
            <div className={transforstyles.round}></div>
            <div
              className={`${transforstyles.box_before} ${transforstyles.borderleft}`}
            >
              <div className={transforstyles.overlayb}></div>
              <Image
                src={allTransformData?.before_image?.url}
                fill={true}
                alt="before_image"
              />
              <div className={transforstyles.before_ovellaptxt}>Before</div>
            </div>

            <div
              className={`${transforstyles.box_before} ${transforstyles.borderright}`}
            >
              <Image
                src={allTransformData?.after_image?.url}
                fill={true}
                alt="after_image"
              />
              <div className={transforstyles.before_ovellaptxt}>After</div>
            </div>
          </div>
          {/* ......before after wrper ends............ */}
          {/* ......project details starts............ */}
          <div className={transforstyles.projdet}>
            <div
              className={transforstyles.prjleft}
              dangerouslySetInnerHTML={{
                __html: allTransformData?.description
              }}
            ></div>
            <div className={transforstyles.prjright}>
              <Link
                href={
                  allTransformData?.button_link == ""
                    ? "#"
                    : allTransformData?.button_link
                }
                className="common-btn purple"
              >
                <label>
                  {allTransformData?.button_name}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow"
                  />
                </label>
              </Link>
            </div>
          </div>

          {/* ......project details ends............ */}
        </div>
      </section>
    </>
  );
}
