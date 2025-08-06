import Image from "next/image";
import specistyles from "../specifications/specifications.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function Specifications({ specificationData }) {
  const allSpecificationData = specificationData?.data?.content;
  const allSpecifications = allSpecificationData?.specifications;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={specistyles.speci_mwrper}>
            <div className={specistyles.left_speci}>
              <h2>
                <span>{allSpecificationData?.preheading}</span>
                <AnimatedText text={allSpecificationData?.heading} />
              </h2>
              <div className="commontable-wrapper specific_h">
                <table className="commontable">
                  <tbody>
                    <tr>
                      <td>
                        <strong>{allSpecificationData?.highlights_text}</strong>
                      </td>
                      <td></td>
                    </tr>
                    {allSpecifications &&
                      allSpecifications.map((allSpecification, index) => {
                        return (
                          <tr key={`spec-${index}`}>
                            <td>{allSpecification?.title}</td>
                            <td>{allSpecification?.value}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={specistyles.spec_prodright}>
              <Image
                src={allSpecificationData?.image?.url}
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
