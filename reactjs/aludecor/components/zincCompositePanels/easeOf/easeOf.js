import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";

export default function Easeof({ fabricationData }) {
  const allfabData = fabricationData?.data?.content;
  return (
    <section>
      <div className="container">
        <div className="topadding_top">
          <div className="sswraper">
            <div className="ssimagepart hoverarea">
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="brand" />
              </div>
              <Image
                width={841}
                height={841}
                src={allfabData?.image?.url}
                alt="img"
                className="ssimage"
              />
            </div>

            <div className="sstextpart">
              <h2>
                <AnimatedText text={allfabData?.heading} />
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: allfabData?.description }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
