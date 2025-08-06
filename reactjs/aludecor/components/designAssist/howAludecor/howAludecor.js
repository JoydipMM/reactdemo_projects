import AnimatedText from "@/components/Framemotion/framemotion";
import howaludstyles from "@/components/designAssist/howAludecor/howAludecor.module.css";
import Image from "next/image";
import Link from "next/link";
export default function HowAludecor({ assistData }) {
  const allAssistData = assistData?.data?.content;
  const assistWorks = allAssistData?.assist_works;
  return (
    <>
      <section className={`${howaludstyles.adv_zinc_mwrper} topadding_top`}>
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allAssistData?.heading} />
          </h2>
          <div className={howaludstyles.adv_iconwrpmain}>
            {assistWorks &&
              assistWorks.map((assistWork, index) => {
                return (
                  <div
                    className={howaludstyles.adv_iconwrp}
                    key={`aswId-${index}`}
                  >
                    <Image
                      width={54}
                      height={70}
                      src={assistWork?.icon?.url}
                      alt="Aludecor Zinc Solid"
                    />
                    <h3>{assistWork?.title}</h3>
                    <p>{assistWork?.information}</p>
                  </div>
                );
              })}
          </div>

          <div className={howaludstyles.designbtn_allgn}>
            <Link
              href={
                allAssistData?.button_link == ""
                  ? "#"
                  : allAssistData?.button_link
              }
              className="common-btn"
            >
              <label>
                {allAssistData?.button_name}
                <Image
                  width={34}
                  height={16}
                  src="/images/arrow-right.svg"
                  alt=""
                />
              </label>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
