import Image from "next/image";

import rivetscontentstyles from "../rivetscontent/rivets.module.css";
import Rivetsprojectgallery from "./rivetsprojectgallery/rivetsprojectgallery";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Rivetscontent({
  rivetsHeroData,
  productInfoData,
  riverColorData,
  rivetInstallationData,
  assembleData,
  rivetGalleryData,
  methodRivetData,
  assembleDatabtm
}) {
  const rivetHero = rivetsHeroData?.data?.content;
  const productInfo = productInfoData?.data?.content;
  const allProductInfo = productInfo?.product_info;
  const colorInfo = riverColorData?.data?.content;
  const allColorInfo = colorInfo?.colours;
  const installationInfo = rivetInstallationData?.data?.content;
  const assembleDataInfo = assembleData?.data?.content;
  const allAssembleInfo = assembleDataInfo?.designation;
  const methodRivetInfo = methodRivetData?.data?.content;
  const allMethodRivetInfo = methodRivetInfo?.method_rivet;
  const assembleDataBtmInfo = assembleDatabtm?.data?.content;
  const allAssembleBtmInfo = assembleDataBtmInfo?.designation;
  // console.log("allColorInfo", allColorInfo);
  const centerStyle = {
    alignItems: "center"
  };
  return (
    <section>
      <div className="container">
        <div className="commonpadding">
          {/* product hero */}
          <div className="sswraper" style={centerStyle}>
            <div className="ssimagepart hoverarea">
              <Image
                fill={true}
                src={rivetHero?.image?.url}
                alt={rivetHero?.image?.alt}
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
            <div className="sstextpart">
              <h2>
                <span>{rivetHero?.preheading}</span>
                <AnimatedText text={rivetHero?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: rivetHero?.description }}
              ></p>
            </div>
          </div>

          {/* 4 Colours */}
          <div className={`${rivetscontentstyles.rivetwraper} sswraper `}>
            <div
              className={`${rivetscontentstyles.rivetrightwraper} sstextpart`}
            >
              <h2>
                <span>{colorInfo?.heading}</span>
              </h2>
              <div className={`${rivetscontentstyles.rivetcolorwraper}`}>
                {allColorInfo
                  ?.reduce((rows, colorInfo, index) => {
                    if (index % 2 === 0) rows.push([]);
                    rows[rows.length - 1].push(colorInfo);
                    return rows;
                  }, [])
                  .map((row, rowIndex, rowArray) => {
                    return (
                      <div
                        className={`${rivetscontentstyles.rivetcolorwrap}`}
                        key={`rivet${rowIndex}`}
                      >
                        {row.map((colorInfo, colIndex) => (
                          <div
                            className={`${rivetscontentstyles.rivetcolorbox}`}
                            key={`rivetcol${colIndex}`}
                          >
                            <Image
                              fill={true}
                              src={colorInfo?.colour_image?.url}
                              alt={colorInfo?.colour_image?.alt}
                              className={`${rivetscontentstyles.rivetcolorboximage}`}
                            />
                            <div
                              className={`${rivetscontentstyles.rivetcolortextbox}`}
                            >
                              <div
                                className={`${rivetscontentstyles.rivetcolorcode}`}
                              >
                                {colorInfo?.colour_code}
                              </div>
                              <div
                                className={`${rivetscontentstyles.rivetcolorname}`}
                              >
                                {colorInfo?.colour_name}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* product Info */}
            <div
              className={`${rivetscontentstyles.rivetleftwraper} sstextpart`}
            >
              <div className="commontable-wrapper">
                <table className="commontable">
                  <tbody>
                    {allProductInfo.map((ProductInfo, index) => (
                      <tr key={`riverid-${ProductInfo?.id}`}>
                        <td>{ProductInfo?.title}</td>
                        <td
                          dangerouslySetInnerHTML={{
                            __html: ProductInfo?.feature
                          }}
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/**Installation Techinque */}
          <div className="sswraper">
            <div className="sstextpart">
              <h2>
                <span>{installationInfo?.preheading}</span>
                <AnimatedText text={installationInfo?.heading} />
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: installationInfo?.description
                }}
              />
            </div>
            <div className="ssimagepart hoverarea">
              <Image
                fill={true}
                src={installationInfo?.image?.url}
                alt={installationInfo?.image?.alt}
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

          <div className="sswraper" style={centerStyle}>
            <div className="sstextpart">
              <div className={`${rivetscontentstyles.ssimagewrappart}`}>
                <div className={`${rivetscontentstyles.ssimagebox} hoverarea`}>
                  <Image
                    fill={true}
                    src={installationInfo?.bottom?.image1?.url}
                    alt="rivetelement1"
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
                <div className={`${rivetscontentstyles.ssimagebox} hoverarea`}>
                  <Image
                    fill={true}
                    src={installationInfo?.bottom?.image2?.url}
                    alt="rivetelement2"
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
            </div>
            <div className="sstextpart">
              <h2>
                {" "}
                <AnimatedText text={installationInfo?.bottom?.heading} />
              </h2>
            </div>
          </div>

          {/**Assaembly Diagram */}

          <div className="sswraper">
            <div className="ssimagepart hoverarea">
              <Image
                fill={true}
                src={assembleDataInfo?.image?.url}
                alt="diagramimg"
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
            <div className="sstextpart">
              <h2>
                <span>{assembleDataInfo?.preheading}</span>
                <AnimatedText text={assembleDataInfo?.heading} />
              </h2>
              <div className="commontable-wrapper">
                <table className="commontable">
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allAssembleInfo?.map((assembleInfo, index) => (
                      <tr key={`assemble-info${index}`}>
                        <td>{assembleInfo?.serial}</td>
                        <td>{assembleInfo?.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <Rivetsprojectgallery galleryData={rivetGalleryData} />
          </div>
          {allMethodRivetInfo.map((methodRivet, index) => (
            <div className="sswraper" key={`methodRivet${index}`}>
              <div className="sstextpart">
                <h2>
                  <span>{methodRivet?.preheading}</span>
                  <AnimatedText text={methodRivet?.heading} />
                </h2>
                <p
                  dangerouslySetInnerHTML={{ __html: methodRivet?.description }}
                />
              </div>
              <div className="ssimagepart hoverarea">
                <Image
                  fill={true}
                  src={methodRivet?.image?.url}
                  alt="methodRivetImage"
                  className="ssimage"
                />
                <div className="brands">
                  <Image
                    fill={true}
                    src="/images/brand-star.svg"
                    alt="brandStar"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="sswraper">
            <div className="sstextpart">
              <h2>
                <span>{assembleDataBtmInfo?.preheading}</span>
                <AnimatedText text={assembleDataBtmInfo?.heading} />
              </h2>
              <div className="commontable-wrapper">
                <table className="commontable">
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allAssembleBtmInfo?.map((assembleBtmInfo, index) => (
                      <tr key={`assemble-info-btm${index}`}>
                        <td>{assembleBtmInfo?.serial}</td>
                        <td>{assembleBtmInfo?.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="ssimagepart hoverarea">
              <Image
                fill={true}
                src={assembleDataBtmInfo?.image?.url}
                alt="assembleDataBtmImage"
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
