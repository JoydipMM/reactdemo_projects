import AnimatedText from "@/components/Framemotion/framemotion";
import benefitprepstyles from "../benefitsPrePainted/benefitsPrePainted.module.css";
import Image from "next/image";
export default function BenefitsPrePainted({ benefitsData }) {
  const allbenefitsData = benefitsData?.data?.content;
  const benefiDatas = allbenefitsData?.benefits;
  return (
    <>
      <section className={`${benefitprepstyles.adv_zinc_mwrper} commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allbenefitsData?.heading} />
            <span>{allbenefitsData?.sub_heading}</span>
          </h2>
          <div className={benefitprepstyles.adv_iconwrpmain}>
            {benefiDatas?.map((benefiData, index) => (
              <div
                className={benefitprepstyles.adv_iconwrp}
                key={`benefit-data-${index}`}
              >
                <Image
                  width={60}
                  height={60}
                  src="/images/key_icon.svg"
                  alt="Aludecor PreCoat"
                />
                <h3>{benefiData?.title}</h3>
                <p>{benefiData?.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
