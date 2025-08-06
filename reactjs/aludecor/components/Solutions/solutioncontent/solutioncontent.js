import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";

export default function Solutioncontent({ solContentData }) {
  const solAllContentData = solContentData?.data?.content;
  const solAllData = solAllContentData?.solutions;

  return (
    <section>
      <div className="container">
        <div className="topadding_top">
          {solAllData.map((solData) => (
            <div className="sswraper" key={solData?.id}>
              <div className="sstextpart">
                <h2>
                  <span>{solData?.preheading}</span>
                  <AnimatedText text={solData?.heading} />
                </h2>
                <h3>
                  <AnimatedText text={solData?.subheading} />
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: solData?.description
                  }}
                ></p>
                <Link href={solData?.button_link} className="common-btn">
                  <label>
                    {solData?.button_name}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt="arrow-right"
                    />
                  </label>
                </Link>
              </div>
              <div className="ssimagepart hoverarea">
                <Image
                  fill={true}
                  src={solData?.image_url}
                  alt={solData?.image_alt}
                  className="ssimage"
                />
                <div className="brands">
                  <Image
                    fill={true}
                    src="/images/brand-star.svg"
                    alt="brand-star"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
