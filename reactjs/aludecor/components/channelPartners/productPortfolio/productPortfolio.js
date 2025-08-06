import AnimatedText from "@/components/Framemotion/framemotion";
import readystyles from "@/components/Projectsgallery/ready-work/ready.module.css";
import productcontentstyles from "@/components/Product/productContent/productContent.module.css";
import whatMakesstyle from "@/components/fabricatorLanding/whatMakes/whatMakes.module.css";
import productportstyles from "@/components/channelPartners/productPortfolio/productPortfolio.module.css";

import Link from "next/link";
import Image from "next/image";

export default function ProductPortfolio({ productsData }) {
  const allData = productsData?.data?.content;
  const allPillarDatas = allData?.key_features;
  const allShadesDatas = allData?.shades;
  return (
    <>
      <section>
        <div className="container">
          <h2 className="centertie">
            <span>{allData?.preheading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>

          <div className="">
            <div
              className={`${productportstyles.h_prdkeyicon} ${productcontentstyles.shadewrape} sswraper flipimg`}
            >
              <div className="sstextpart">
                <h2>
                  <AnimatedText text={allData?.title} />
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: allData?.description }}
                ></div>
                <h3>
                  <AnimatedText text="Key Features" />
                </h3>
                <div className={`${whatMakesstyle.choice} specific_h`}>
                  <ul>
                    {allPillarDatas &&
                      allPillarDatas.map((allPillarData, index) => {
                        return (
                          <li key={`keyId-${index}`}>
                            <div className={`${whatMakesstyle.choicetxt}`}>
                              <h4>{allPillarData?.title}</h4>
                              <p>{allPillarData?.description}</p>
                            </div>
                            <Image
                              width={35}
                              height={50}
                              src={allPillarData?.icon?.url}
                              alt="img"
                            />
                          </li>
                        );
                      })}
                  </ul>
                </div>

                <div className={`${productcontentstyles.btnarea}`}>
                  <Link
                    href={
                      allData?.button_1?.url == ""
                        ? "#"
                        : allData?.button_1?.url
                    }
                    className="common-btn purple"
                  >
                    <label>
                      {" "}
                      {allData?.button_1?.title}
                      <Image
                        width={34}
                        height={16}
                        src="/images/arrow-right.svg"
                        alt=""
                      />
                    </label>
                  </Link>
                  <Link
                    href={
                      allData?.button_2?.url == ""
                        ? "#"
                        : allData?.button_2?.url
                    }
                    className="common-btn"
                  >
                    <label>
                      {" "}
                      {allData?.button_2?.title}
                      <Image
                        width={34}
                        height={16}
                        src="/images/arrow-right.svg"
                        alt=""
                      />
                    </label>
                  </Link>
                </div>
              </div>
              <div className="ssimagepart hoverarea">
                <Image
                  fill={true}
                  src={allData?.image?.url}
                  alt="image"
                  className="ssimage"
                />

                <ul className={`${productcontentstyles.proboxarea} shadebox`}>
                  {allShadesDatas &&
                    allShadesDatas.map((allShadesData, index) => {
                      return (
                        <li key={`allShadesDatasID-${index}`}>
                          <>
                            {" "}
                            <Image
                              fill={true}
                              src={allShadesData?.image?.url}
                              alt=""
                            />{" "}
                            <label>{allShadesData?.name}</label>{" "}
                          </>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
