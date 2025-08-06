import AnimatedText from "@/components/Framemotion/framemotion";
import welcomebstyles from "@/components/Bim/welcome/welcome.module.css";

export default function Welcome({ buildingInformationData }) {
  const allBuildingInformationData = buildingInformationData.data?.content;
  //console.log("allBuildingInformationData", allBuildingInformationData);
  return (
    <>
      <section className={welcomebstyles.welcomewrp}>
        <div className="container">
          <h2>
            {" "}
            <AnimatedText text={allBuildingInformationData?.heading} />{" "}
          </h2>
          <div className={welcomebstyles.welcomeinner}>
            <div
              className={welcomebstyles.wtitlewrp}
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <p>{allBuildingInformationData?.first_description}</p>
            </div>
            <div
              className={welcomebstyles.wcontentwrp}
              data-aos="fade-down"
              data-aos-delay="0"
            >
              <p>{allBuildingInformationData?.second_description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
