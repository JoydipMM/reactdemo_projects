import Image from "next/image";
import Link from "next/link";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import exclusiveFeaturesstyles from "@/components/fabricatorLanding/exclusiveFeatures/exclusiveFeatures.module.css";
export default function Exclusivefeatures({ designData }) {
  const allData = designData?.data?.content;
  const designFeaturesDatas = allData?.items;
  return (
    <>
      <section
        className={`${exclusiveFeaturesstyles.exclusivefeatures} topadding_bottom`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <span>{allData?.perheading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>
          <ul className={`${exclusiveFeaturesstyles.listing}`}>
            {designFeaturesDatas?.map((designFeaturesData, index) => (
              <li key={`designFeaturesDataID-${index}`}>
                <Image
                  src={designFeaturesData?.icon?.image_url}
                  width={100}
                  height={100}
                  alt="designFeaturesImage"
                />
                {designFeaturesData?.title}
              </li>
            ))}
          </ul>
          <Link
            href={allData?.button_url == "" ? "#" : allData?.button_url}
            className="common-btn purple"
          >
            <label>
              {allData?.button_name}
              <Image
                width={34}
                height={16}
                src="/images/arrow-right.svg"
                alt="right"
              />
            </label>
          </Link>
        </div>
      </section>
    </>
  );
}
