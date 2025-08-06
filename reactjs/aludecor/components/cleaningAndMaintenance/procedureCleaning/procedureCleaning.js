import Image from "next/image";
import instalstyles from "@/components/fabricationGuide/installation/installation.module.css";
import procedureCleaningstyles from "@/components/cleaningAndMaintenance/procedureCleaning/procedureCleaning.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function Procedurecleaning({ procedureData }) {
  const allProcedureData = procedureData?.data?.content;
  const procedureItems = allProcedureData?.items;
  return (
    <>
      <section className={`${procedureCleaningstyles.sheetbox} commonpadding`}>
        <div className="container">
          <div className="titlearea">
            <h2 className="titlecenter">
              <AnimatedText text={allProcedureData?.heading} />
            </h2>
            <p>{allProcedureData?.sub_heading}</p>
          </div>

          <div className={instalstyles.sheetwrp}>
            {procedureItems?.map((procedureItem, index) => (
              <div
                className={instalstyles.sheetbox}
                key={`procedureItemId-${index}`}
              >
                <div className={instalstyles.sheetimcont}>
                  <Image
                    fill={true}
                    src={procedureItem?.image?.image_url}
                    alt="procedureItemImage"
                  />
                </div>
                <h3 className={`${procedureCleaningstyles.title}`}>
                  {procedureItem?.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
