import { useState } from "react";
import AnimatedText from "@/components/Framemotion/framemotion";
import gallerystyles from "@/components/csr/gallery/gallery.module.css";
import Image from "next/image";
export default function CsrActivity({ activityData }) {
  const allAData = activityData?.data?.content;
  const allActDatas = allAData?.gallery;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="container">
      <div className={`${gallerystyles.association_content}`}>
        <div className={`${gallerystyles.left}`}>
          <h2>
            <AnimatedText text={allAData?.heading} />
          </h2>
          <p>{allAData?.description}</p>
          <div className={`${gallerystyles.association_list}`}>
            {allActDatas.map((allActData, index) => (
              <div
                key={index}
                className={`list-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <Image src={allActData?.image?.url} fill={true} alt="image" />
                <div className="brands">
                  <Image
                    fill={true}
                    src="/images/witebrand.svg"
                    alt="witebrand"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${gallerystyles.right}`}>
          <div className="pic hoverarea">
            <Image
              src={allActDatas[activeIndex].image?.url}
              fill={true}
              alt=""
            />
            <div className="brands">
              <Image fill={true} src="/images/brand-star.svg" alt="brand" />
            </div>
          </div>
          <p>{allActDatas[activeIndex].description}</p>
        </div>
      </div>
    </div>
  );
}
