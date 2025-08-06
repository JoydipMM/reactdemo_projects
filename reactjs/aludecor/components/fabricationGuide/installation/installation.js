import Image from "next/image";
import instalstyles from "../installation/installation.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function Installation({ installationData }) {
  const allInstallData = installationData.data?.content;
  const installGuideDatas = allInstallData?.guidlines;
  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <h2 className="titlecenter">
            <span>{allInstallData?.pre_heading}</span>
            <AnimatedText text={allInstallData?.description} />
          </h2>

          <div className={instalstyles.sheetwrp}>
            {installGuideDatas?.map((installGuideData, index) => (
              <div
                className={instalstyles.sheetbox}
                key={`installGuideDataID-${index}`}
              >
                <div className={instalstyles.sheetimcont}>
                  <Image
                    fill={true}
                    src={installGuideData?.image?.image_url}
                    alt="installGuideData"
                  />
                </div>
                <h3>{installGuideData?.heading}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: installGuideData?.description
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
