import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";

export default function Themoment({ informationData }) {
  const allInformationData = informationData?.data?.content;
  return (
    <section>
      <div className="container">
        <div className="topadding_bottom">
          <div className="sswraper">
            <div className="ssimagepart hoverarea">
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="brand" />
              </div>
              <Image
                width={841}
                height={841}
                src={allInformationData?.image?.url}
                alt="img"
                className="ssimage"
              />
            </div>

            <div className="sstextpart">
              <h2>
                <AnimatedText text={allInformationData?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: allInformationData?.description
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
