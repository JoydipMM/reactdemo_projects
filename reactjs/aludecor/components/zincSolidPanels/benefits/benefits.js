import AnimatedText from "@/components/Framemotion/framemotion";
import benefitstyles from "../benefits/benefits.module.css";
import Image from "next/image";
export default function Benefits({ benefitsData }) {
  const allBenefitData = benefitsData?.data?.content;
  const benefitsItems = allBenefitData?.benefits;
  return (
    <>
      <section className={`${benefitstyles.adv_zinc_mwrper} commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allBenefitData?.preheading}</span>
            <AnimatedText text={allBenefitData?.heading} />
          </h2>
          <div className={benefitstyles.adv_iconwrpmain}>
            {benefitsItems &&
              benefitsItems.map((benefitsItem, index) => {
                return (
                  <div
                    className={benefitstyles.adv_iconwrp}
                    key={`benefitsItemId-${index}`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={benefitsItem?.icon?.url}
                      alt="Aludecor Zinc Solid"
                    />
                    <p>{benefitsItem?.information}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
