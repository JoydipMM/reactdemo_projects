import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import readystyles from "@/components/Projectsgallery/ready-work/ready.module.css";
import productcontentstyles from "@/components/Product/productContent/productContent.module.css";

export default function Productcontent({ productAdvertiseData }) {
  const advertiseData = productAdvertiseData?.data?.content;
  return (
    <section>
      <div className="container">
        <div className="commonpadding">
          <div
            className={`${readystyles.readywrk} ${productcontentstyles.safety}`}
          >
            <div className={readystyles.readyleft}>
              <h2>
                <AnimatedText text={advertiseData?.heading} />
              </h2>
              <p>{advertiseData?.description}</p>
            </div>
            <div className={`${readystyles.readyrit} hoverarea`}>
              <div className="brands">
                <Image
                  fill={true}
                  src="/images/brand-star.svg"
                  alt="brand-star"
                />
              </div>
              <div className="readtframe">
                <Image fill={true} src="/images/readywork-frame.svg" alt="" />
              </div>
              <Image
                fill={true}
                src={advertiseData?.image?.url}
                alt={advertiseData?.image?.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
