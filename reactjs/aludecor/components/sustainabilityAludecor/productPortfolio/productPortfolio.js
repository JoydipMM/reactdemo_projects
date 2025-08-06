import AnimatedText from "@/components/Framemotion/framemotion";
import prdportfoliostyles from "@/components/sustainabilityAludecor/productPortfolio/productPortfolio.module.css";
import Image from "next/image";
import Link from "next/link";
export default function ProductPortfolio({ portfolioData }) {
  const allData = portfolioData?.data?.content;
  const portfolioDatas = allData?.items;
  return (
    <>
      <section className={`commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allData?.heading} />
          </h2>
          <div className={prdportfoliostyles.prdportfoliomwrp}>
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>
                    <span>Key Benefit</span>
                  </th>
                  <th>
                    <span>Certifications</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {portfolioDatas?.map((portfolioData, index) => (
                  <tr key={`portfolioDataID-${index}`}>
                    <td>
                      <h4>{portfolioData?.product}</h4>
                    </td>
                    <td>{portfolioData?.key_benefit}</td>
                    <td>{portfolioData?.certification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={prdportfoliostyles.prdportbtnwrp}>
            <Link
              href={allData?.button_url == "" ? "#" : allData?.button_url}
              className="common-btn"
            >
              <label>
                {allData?.button_text}
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
      </section>
    </>
  );
}
