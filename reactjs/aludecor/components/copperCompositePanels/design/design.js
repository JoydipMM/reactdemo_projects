import Image from "next/image";
import featuresstyles from "@/components/metalDetailsPage/features/features.module.css";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Design({ designData }) {
  const allDesignData = designData?.data?.content;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={featuresstyles.featurewrp}>
            <div className={`${featuresstyles.featureleft} hoverarea`}>
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="star" />
              </div>
              <Image
                src={allDesignData?.image?.url}
                alt="Design with Living Metal"
                fill={true}
              />
            </div>
            <div className={featuresstyles.featureright}>
              <h2>
                <AnimatedText text={allDesignData?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: allDesignData?.content }}
              ></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
