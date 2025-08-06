import AnimatedText from "@/components/Framemotion/framemotion";
import applicationscopperstyles from "@/components/copperCompositePanels/applications/applications.module.css";
import qualitystyles from "@/components/acpSignage/quality/quality.module.css";
import Image from "next/image";
export default function Applications({ applicationData }) {
  const allApplicationData = applicationData?.data?.content;
  // const projectShowcases = allApplicationData?.projects;
  return (
    <>
      <section>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allApplicationData?.pre_heading}</span>
            <AnimatedText text={allApplicationData?.heading} />
          </h2>
          <div className={applicationscopperstyles.application_cwrp}>
            <div className={applicationscopperstyles.appliactionboxwrp}>
              <div className={applicationscopperstyles.appliactionboximgcont}>
                <Image
                  fill={true}
                  src={allApplicationData?.left_side_img_url}
                  alt="img"
                />
              </div>
              <p>{allApplicationData?.left_sub_title}</p>
            </div>

            <div className={applicationscopperstyles.appliactionboxwrp}>
              <div className={applicationscopperstyles.appliactionboximgcont}>
                <Image
                  fill={true}
                  src={allApplicationData?.right_side_img_url}
                  alt="right image"
                />
              </div>
              <p>{allApplicationData?.right_sub_title}</p>
            </div>
          </div>

          {/* ............border section starts............ */}

          <div className={qualitystyles.qualityboxwrp}>
            <div
              className={qualitystyles.qualitybox}
              style={{ alignContent: "center" }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: allApplicationData?.left_side_content
                }}
              ></div>
            </div>

            <div
              className={qualitystyles.qualitybox}
              style={{ alignContent: "center" }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: allApplicationData?.right_side_content
                }}
              ></div>
            </div>
          </div>
          {/* ............border section ends............ */}
        </div>
      </section>
    </>
  );
}
