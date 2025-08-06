import AnimatedText from "@/components/Framemotion/framemotion";
import dealerbstyles from "@/components/channelPartners/dealerBenefits/dealerBenefits.module.css";
import Image from "next/image";

export default function DealerBenefits({ dealerData }) {
  const allData = dealerData?.data?.content;
  const allPillarDatas = allData?.table_data;
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <h2 className="titlecenter">
            <span>{allData?.preheading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>
          <div className={dealerbstyles.dealerwrp}>
            <div className={dealerbstyles.dealerbox}>
              <ul>
                <li>&nbsp;</li>
                {allPillarDatas &&
                  allPillarDatas.map((allPillarData, index) => {
                    return (
                      <li key={`tableTitle-${index}`}>
                        {allPillarData?.highlight}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className={dealerbstyles.dealerbox}>
              <ul>
                <li> Aludecor dealership benefits</li>
                {allPillarDatas &&
                  allPillarDatas.map((allPillarData, index) => {
                    return (
                      <li key={`albef-ID${index}`}>
                        <Image
                          src="/images/tick-icon-green.svg"
                          alt="green"
                          width={30}
                          height={22}
                        />
                        {allPillarData?.aludecor_benefits}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className={dealerbstyles.dealerbox}>
              <ul>
                <li>Traditional</li>
                {allPillarDatas &&
                  allPillarDatas.map((allPillarData, index) => {
                    return (
                      <li key={`tbefi-ID${index}`}>
                        <Image
                          src={
                            allPillarData?.traditional_benefits
                              ? "/images/tick-icon-green.svg"
                              : "/images/cross_red_icon.svg"
                          }
                          alt="cross_red_icon"
                          width={20}
                          height={20}
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
