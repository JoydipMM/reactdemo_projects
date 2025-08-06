import Image from "next/image";
import specprestyles from "@/components/preCoatedAluminium/specificationPreCoat/specificationPreCoat.module.css";
import frequencystyles from "@/components/cleaningAndMaintenance/frequency/frequency.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function Frequency({ cmQuideData }) {
  const allCmGuideData = cmQuideData?.data?.content;
  const cmGuideItems = allCmGuideData?.items;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={`${frequencystyles.titlearea} commonpadding`}>
            <h2 className="centertie">
              <AnimatedText text={allCmGuideData?.heading} />
            </h2>
            <p>{allCmGuideData?.sub_heading}</p>
          </div>
          <div className={specprestyles.speci_mwrper}>
            <div
              className={`${specprestyles.left_speci} ${frequencystyles.left_speci}`}
            >
              <h2>
                <span>{allCmGuideData?.pre_title}</span>
                <AnimatedText text={allCmGuideData?.title} />
              </h2>
              <p>{allCmGuideData?.content}</p>
              <div className="commontable-wrapper ">
                <table
                  className={`commontable ${specprestyles.tectable} ${frequencystyles.tectable}`}
                >
                  <tbody>
                    <tr>
                      <th> Building Location</th>
                      <th>Frequency of Cleaning</th>
                    </tr>
                    {cmGuideItems?.map((cmGuideItem, index) => (
                      <tr key={`cmGuideItemId-${index}`}>
                        <td>{cmGuideItem?.location}</td>
                        <td>{cmGuideItem?.frequency_of_cleaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={specprestyles.spec_prodright}>
              <div className={specprestyles.customwrp}>
                <Image
                  src={allCmGuideData?.image?.url}
                  alt="Product"
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
