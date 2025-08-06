import AnimatedText from "@/components/Framemotion/framemotion";
import residencystyles from "../residency/residency.module.css";
import Image from "next/image";

export default function Residency({ productAoaData }) {
  const allProductAoAData = productAoaData?.data?.content;
  const allProductAoADataItems = allProductAoAData?.items;
  return (
    <>
      <section className={`commonpadding ${residencystyles.residence_mwrp}`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allProductAoAData?.preheading}</span>

            <AnimatedText text={allProductAoAData?.heading} />
          </h2>
          <p className={residencystyles.boxtxt}>
            {allProductAoAData?.description}
          </p>

          <div className={residencystyles.residence_iconwrp}>
            {allProductAoADataItems &&
              allProductAoADataItems.map((allProductAoADataItem) => {
                return (
                  <div className={residencystyles.iconbox_resid}>
                    <div className={residencystyles.resid_iconcont}>
                      <Image
                        src={allProductAoADataItem?.image?.image_url}
                        alt="Residences"
                        fill={true}
                      />
                    </div>
                    <p>{allProductAoADataItem?.title}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
