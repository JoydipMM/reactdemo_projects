import AnimatedText from "@/components/Framemotion/framemotion";
import dealerbstyles from "@/components/copperCompositePanels/comparison/comparison.module.css";
import Image from "next/image";

export default function Dealerbenefits({ comparisonData }) {
  const allComparisonData = comparisonData?.data?.content;
  const comparisonFeatures = allComparisonData?.comparison;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <h2
            className="titlecenter"
            style={{ maxWidth: "1266px", margin: "0 auto" }}
          >
            <span>{allComparisonData?.preheading}</span>
            <AnimatedText text={allComparisonData?.heading} />
          </h2>
          <div className={dealerbstyles.dealerwrp}>
            <div className={dealerbstyles.dealerbox}>
              <ul>
                <li>Feature</li>
                {comparisonFeatures?.map((item) => (
                  <li key={item.id}>{item.features}</li>
                ))}
              </ul>
            </div>
            <div className={dealerbstyles.dealerbox}>
              <ul>
                <li> Zinc Composite Panels</li>
                {comparisonFeatures?.map((item) => (
                  <li key={`zcp-${item.id}`}>
                    {typeof item.zcp_data === "boolean" ? (
                      item.zcp_data ? (
                        <Image
                          src="/images/tick-icon-green.svg"
                          alt="tick icon"
                          width={30}
                          height={22}
                        />
                      ) : (
                        <Image
                          src="/images/cross_red_icon.svg"
                          alt="cross icon"
                          width={20}
                          height={20}
                        />
                      )
                    ) : (
                      <>{item.zcp_data}</>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className={dealerbstyles.dealerbox}>
              <ul>
                <li>Aluminium Composite Panels</li>
                {comparisonFeatures?.map((item) => (
                  <li key={`acp-${item.id}`}>
                    {typeof item.acp_data === "boolean" ? (
                      item.acp_data ? (
                        <Image
                          src="/images/tick-icon-green.svg"
                          alt="tick icon"
                          width={30}
                          height={22}
                        />
                      ) : (
                        <Image
                          src="/images/cross_red_icon.svg"
                          alt="cross icon"
                          width={20}
                          height={20}
                        />
                      )
                    ) : (
                      item.acp_data
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className={dealerbstyles.dealerbox}>
              <ul>
                <li>Steel Panels</li>
                {comparisonFeatures?.map((item) => (
                  <li key={`scp-${item.id}`}>
                    {typeof item.scp_data === "boolean" ? (
                      item.scp_data ? (
                        <Image
                          src="/images/tick-icon-green.svg"
                          alt="tick icon"
                          width={30}
                          height={22}
                        />
                      ) : (
                        <Image
                          src="/images/cross_red_icon.svg"
                          alt="cross icon"
                          width={20}
                          height={20}
                        />
                      )
                    ) : (
                      <>
                        {(item.id === 3 || item.id === 4) && (
                          <Image
                            src="/images/tick-icon-green.svg"
                            alt="tick icon"
                            width={30}
                            height={22}
                          />
                        )}
                        {item.scp_data}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
