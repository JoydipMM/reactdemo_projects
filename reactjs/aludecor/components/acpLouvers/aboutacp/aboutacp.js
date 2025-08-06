import AnimatedText from "@/components/Framemotion/framemotion";
import aboutacpstyles from "@/components/acpLouvers/aboutacp/aboutacp.module.css";
import Link from "next/link";
import Image from "next/image";
export default function AboutACP({ acpLouvers }) {
  const allAcpLouversData = acpLouvers?.data?.content;
  const allDisplayData = allAcpLouversData?.display;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <div className={`${aboutacpstyles.abouttop}`}>
            <h2 className="titlecenter">
              <AnimatedText text={allAcpLouversData?.heading} />
            </h2>
            <p className="titlecenter">{allAcpLouversData?.top_content}</p>
          </div>

          <div className={`${aboutacpstyles.metaldhara}`}>
            <div className="left">
              <div className="pic">
                <Image
                  fill={true}
                  src={allAcpLouversData?.image?.url}
                  alt="metaldhara"
                />
              </div>
            </div>
            <div className="right">
              <p>{allAcpLouversData?.main_content}</p>
            </div>
          </div>

          <div className={`${aboutacpstyles.installation}`}>
            {allDisplayData &&
              allDisplayData.map((displayData, index) => {
                return (
                  <div className="pic-col" key={`displayData-${index}`}>
                    <div className="pic hoverarea">
                      <Image
                        fill={true}
                        src={displayData?.image?.image_url}
                        alt=""
                      />
                      <div className="brands">
                        <Image
                          fill={true}
                          src="/images/brand-star.svg"
                          alt="star"
                        />
                      </div>
                    </div>

                    <p>{displayData?.title}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
