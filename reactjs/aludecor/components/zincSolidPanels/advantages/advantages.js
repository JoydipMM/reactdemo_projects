import AnimatedText from "@/components/Framemotion/framemotion";
import advstyles from "../advantages/advantages.module.css";
import Image from "next/image";
export default function Advantages({ advantagesData }) {
  const allAdvantagesData = advantagesData?.data?.content;
  const advantageItems = allAdvantagesData?.advantages;
  return (
    <>
      <section className={`${advstyles.adv_zinc_mwrper} commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allAdvantagesData?.heading} />
          </h2>
          <div className={advstyles.adv_iconwrpmain}>
            {advantageItems &&
              advantageItems.map((advantageItem, index) => {
                return (
                  <div
                    className={advstyles.adv_iconwrp}
                    key={`advantageItem-${index}`}
                  >
                    <Image
                      width={75}
                      height={75}
                      src={advantageItem?.icon?.url}
                      alt="Aludecor Zinc Solid"
                    />
                    <p>{advantageItem.information}</p>
                  </div>
                );
              })}
          </div>
          <p>{allAdvantagesData?.description}</p>
        </div>
      </section>
    </>
  );
}
