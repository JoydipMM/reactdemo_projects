import Image from "next/image";
import specprestyles from "../specificationPreCoat/specificationPreCoat.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function SpecificationPreCoat({ specificationData }) {
  const allSpecData = specificationData?.data?.content;
  const bimSpecificDatas = allSpecData?.specification;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={specprestyles.speci_mwrper}>
            <div className={specprestyles.left_speci}>
              <h2>
                <span>{allSpecData?.heading}</span>
                <AnimatedText text="Specification and Composition" />
              </h2>
              <div className="commontable-wrapper ">
                <table className={`commontable ${specprestyles.tectable}`}>
                  <tbody>
                    {bimSpecificDatas &&
                      bimSpecificDatas.map((bimSpecificData, index) => {
                        return (
                          <tr key={`allBimSpecificData-${index}`}>
                            <td>
                              <strong>{bimSpecificData?.title}</strong>
                            </td>
                            <td
                              dangerouslySetInnerHTML={{
                                __html: bimSpecificData?.content
                              }}
                            ></td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={specprestyles.spec_prodright}>
              <div className={specprestyles.customwrp}>
                <Image
                  src={allSpecData?.first_img_url}
                  alt="Product specification"
                  fill={true}
                />
              </div>

              <div className={specprestyles.customwrp}>
                <Image
                  src={allSpecData?.second_img_url}
                  alt="Product specification"
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
