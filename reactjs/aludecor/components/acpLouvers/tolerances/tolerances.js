import AnimatedText from "@/components/Framemotion/framemotion";
import tolerancesstyles from "@/components/acpLouvers/tolerances/tolerances.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Tolerances({ tolerancesData }) {
  const allToleranceData = tolerancesData?.data?.content;
  const toleranceDetails = allToleranceData?.parameters;
  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allToleranceData?.heading} />
          </h2>
          <p className={`${tolerancesstyles.textcenter}`}>
            {allToleranceData?.description}
          </p>

          <div className={`${tolerancesstyles.tolerances} commonpadding`}>
            <div className="left">
              <div className={`${tolerancesstyles.gentable}`}>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <strong>Parameters</strong>
                      </th>
                      <th>
                        <strong>Values</strong>
                      </th>
                    </tr>

                    {toleranceDetails &&
                      toleranceDetails.map((toleranceDetail, index) => {
                        return (
                          <tr key={`toleranceDetail-${index}`}>
                            <td>{toleranceDetail?.title}</td>
                            <td>{toleranceDetail?.value}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="right">
              <Image
                fill={true}
                src={allToleranceData?.image?.url}
                alt="image_url"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
