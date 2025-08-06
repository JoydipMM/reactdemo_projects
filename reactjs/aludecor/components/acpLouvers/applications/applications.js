import AnimatedText from "@/components/Framemotion/framemotion";
import applicationsstyles from "@/components/acpLouvers/applications/applications.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Applications({ application }) {
  const allApplicationData = application?.data?.content;
  const allApplications = allApplicationData?.applications;
  return (
    <>
      <section
        className={`${applicationsstyles.application_content} commonpadding`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allApplicationData?.heading} />
          </h2>
          <p className={`${applicationsstyles.toptxt}`}>
            {allApplicationData?.description}
          </p>
          {allApplications &&
            allApplications.map((allApplication, index) => {
              return (
                <div
                  className={`${applicationsstyles.application_row} toppadding_top ${
                    index % 2 !== 0 ? applicationsstyles.reverse : ""
                  }`}
                  key={`allApplications-${index}`}
                >
                  <div className="left">
                    <div className="pic hoverarea">
                      <Image
                        fill={true}
                        src={allApplication?.image?.image_url}
                        alt="allApplication"
                      />
                      <div className="brands">
                        <Image
                          fill={true}
                          src="/images/brand-star.svg"
                          alt="brand"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <h2>
                      <AnimatedText text={allApplication?.title} />
                    </h2>
                    <p>{allApplication?.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
