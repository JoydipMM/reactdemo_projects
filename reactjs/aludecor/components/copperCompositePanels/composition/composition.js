import AnimatedText from "@/components/Framemotion/framemotion";
import compositionstyles from "@/components/copperCompositePanels/composition/composition.module.css";
import Image from "next/image";
export default function Composition({ materialData }) {
  const allMaterialData = materialData?.data?.content;
  const allCompositionData = allMaterialData?.composition;
  return (
    <>
      <section className={compositionstyles.compositionwrpmain}>
        <div className={`container`}>
          {/* .......quote section........... */}
          <div className="quotebordercont">
            <h3>{allMaterialData?.quote}</h3>
          </div>
          {/* .......quote section........... */}
          {/* .......material section........... */}
          <div className={`topadding_bottom`}>
            <h2 className="titlecenter">
              <AnimatedText text={allMaterialData?.heading} />
            </h2>
            <div className={compositionstyles.compositionwrp}>
              <div className={compositionstyles.compobox}>
                <Image
                  src={allMaterialData?.first_image_url}
                  alt="Material"
                  fill="true"
                />
              </div>
              <div className={compositionstyles.compobox}>
                <Image
                  src={allMaterialData?.second_image_url}
                  alt="Material2"
                  fill="true"
                />
              </div>
              <div className={compositionstyles.compobox2}>
                <div className={compositionstyles.boxlayer}>
                  <div className={compositionstyles.inerboxlayer}>
                    <p>
                      <strong>Layer</strong>
                    </p>
                    {allCompositionData &&
                      allCompositionData.map((compositonData, index) => {
                        return (
                          <p key={`composition-dataID-${index}`}>
                            {compositonData?.layer}
                          </p>
                        );
                      })}
                  </div>

                  <div className={compositionstyles.inerboxlayer}>
                    <p>
                      <strong>Material</strong>
                    </p>
                    {allCompositionData &&
                      allCompositionData.map((compositonData, index) => {
                        return (
                          <p key={`composition-dataMID-${index}`}>
                            {compositonData?.material}
                          </p>
                        );
                      })}
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: allMaterialData?.content }}
                ></div>
              </div>
            </div>
          </div>
          {/* .......material section........... */}
        </div>
      </section>
    </>
  );
}
