import Image from "next/image";
import tecdatastyles from "../techData/techData.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function TechData({ technicalData }) {
  const allTechnicalData = technicalData.data?.content;
  const allTechItems = allTechnicalData?.info;
  //console.log("technicalData", allTechnicalData);
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <h2>
            <span>{allTechnicalData?.pre_heading}</span>
            <AnimatedText text={allTechnicalData?.heading} />
          </h2>
          <div className={tecdatastyles.speci_mwrper}>
            <div className={tecdatastyles.left_speci}>
              <div className="commontable-wrapper specific_h">
                <table className={`commontable ${tecdatastyles.tectable}`}>
                  <tbody>
                    <tr>
                      <th>
                        <strong>Sr. No.</strong>
                      </th>
                      <th>
                        <strong>Technical Properties</strong>
                      </th>
                      <th>
                        <strong>Standards</strong>
                      </th>
                      <th colSpan={2}>
                        <strong>Solid Aluminium Panels</strong>
                      </th>
                    </tr>
                    {allTechItems &&
                      allTechItems.map((allTechItem, index) => {
                        return (
                          <tr key={`allTechItem-${index}`}>
                            <td>{index + 1}</td>
                            <td>{allTechItem?.technical_properties}</td>
                            <td>{allTechItem?.standards}</td>
                            <td>{allTechItem?.solid_aluminium_panels_one}</td>
                            <td>{allTechItem?.solid_aluminium_panels_two}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={tecdatastyles.spec_prodright}>
              <div className={tecdatastyles.customwrp}>
                <Image
                  src="/images/sip.png"
                  alt="Product specification"
                  fill={true}
                />
                <div className={tecdatastyles.customwrpbox}>
                  <h2>
                    <AnimatedText text={allTechnicalData?.sidebar_heading} />{" "}
                  </h2>
                  <p>{allTechnicalData?.sidebar_description}</p>
                  <button className="common-btn purple" type="submit">
                    <label>
                      Read More
                      <Image
                        width={34}
                        height={16}
                        src="/images/arrow-right.svg"
                        alt=""
                      />
                    </label>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
