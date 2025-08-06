import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import whatMakesstyle from "@/components/fabricatorLanding/whatMakes/whatMakes.module.css";

export default function Whatmakes({ featuresData }) {
  const allData = featuresData?.data?.content;
  const allfeaturesDatas = allData?.features;
  return (
    <section>
      <div className="container">
        <div className="topadding_top">
          <div className={`${whatMakesstyle.sswraper} sswraper`}>
            <div className={`${whatMakesstyle.ssimagepart} ssimagepart`}>
              <Image
                width={841}
                height={925}
                src="/images/fabricator-landing/img.jpg"
                alt="img"
                className="ssimage"
              />
            </div>

            <div className={`${whatMakesstyle.sstextpart} sstextpart`}>
              <h2>
                <span>{allData?.perheading}</span>
                <AnimatedText text={allData?.heading} />
              </h2>
              <p>{allData?.description}</p>

              <div className={`${whatMakesstyle.choice}`}>
                <ul>
                  {allfeaturesDatas?.map((allfeaturesData, index) => (
                    <li key={`allfeaturesDataID-${index}`}>
                      <div className={`${whatMakesstyle.choicetxt}`}>
                        <h4>{allfeaturesData?.title}</h4>
                        <p>{allfeaturesData?.description}</p>
                      </div>
                      <Image
                        width={62}
                        height={66}
                        src={allfeaturesData?.icon?.url}
                        alt="img"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </section>
  );
}
