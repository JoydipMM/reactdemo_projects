import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";

export default function Solutiondetailscontent({ transformatingData }) {
  const allTransformingData = transformatingData.data?.content;
  return (
    <section>
      <div className="container">
        <div className="topadding_top">
          <div className="sswraper">
            <div className="sstextpart">
              <h2>
                <span>{allTransformingData?.preheading}</span>
                <AnimatedText text={allTransformingData?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: allTransformingData?.description
                }}
              ></p>
            </div>
            <div className="ssimagepart hoverarea">
              <Image
                fill={true}
                src={allTransformingData?.image?.url}
                alt="ssimage"
                className="ssimage"
              />
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
