import Image from "next/image";
import hammerstyles from "../hammered/hammered.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function Hammered({ productSpecificationData }) {
  // console.log("productSpecificationData", productSpecificationData);
  const allSpecificationData = productSpecificationData?.data?.content;
  const allAttributes = allSpecificationData?.attributes;
  // console.log("allAttributes", allAttributes);
  // console.log("allSpecificationData", allSpecificationData);
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={hammerstyles.speci_mwrper}>
            <div className={hammerstyles.left_speci}>
              <h2>
                <AnimatedText text={allSpecificationData?.product_title} />
                <span>{allSpecificationData?.short_description}</span>
              </h2>
              <div className="commontable-wrapper specific_h">
                <table className="commontable">
                  <tbody>
                    <tr>
                      <td>
                        <strong>
                          {
                            allSpecificationData?.product_specification_section_heading
                          }
                        </strong>
                      </td>
                      <td></td>
                    </tr>
                    {allAttributes &&
                      Object.entries(allAttributes).map(
                        ([key, value], index) => {
                          return (
                            <tr key={`attribute-${index}`}>
                              <td>{key} :</td>
                              <td>{value}</td>
                            </tr>
                          );
                        }
                      )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={hammerstyles.spec_prodright}>
              <Image
                src={allSpecificationData?.image_url}
                alt="Product specification"
                fill={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
