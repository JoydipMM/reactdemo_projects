import AnimatedText from "@/components/Framemotion/framemotion";
import varbenstyles from "@/components/zincSolidPanels/variousBenefits/variousBenefits.module.css";
import Image from "next/image";
export default function VariousBenefits({ moreBenefitData }) {
  const allMoreBenefitData = moreBenefitData?.data?.content;
  const allBenefitData = allMoreBenefitData?.benefits;
  return (
    <>
      <section className={`${varbenstyles.adv_zinc_mwrper} `}>
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allMoreBenefitData?.heading} />
          </h2>
          <div className={varbenstyles.adv_iconwrpmain}>
            {allBenefitData &&
              allBenefitData.map((allBenefit, index) => {
                return (
                  <div
                    className={varbenstyles.adv_iconwrp}
                    key={`allBenefitId-${index}`}
                  >
                    <Image
                      width={57}
                      height={57}
                      src="/images/key_icon.svg"
                      alt="Aludecor Zinc Solid"
                    />
                    <p>{allBenefit?.information}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
