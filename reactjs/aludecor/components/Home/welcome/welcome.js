import AnimatedText from "@/components/Framemotion/framemotion";
import welcomestyles from "../welcome/welcome.module.css";
export default function Welcome({ welData }) {
  const welcomeContent = welData?.data?.content?.top_bar;
  return (
    <>
      <div className="container">
        <div className={welcomestyles.welcomewrp}>
          <div
            className={welcomestyles.wtitlewrp}
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <h1>
              <AnimatedText text={welcomeContent?.heading} />
            </h1>
          </div>
          <div
            className={welcomestyles.wcontentwrp}
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <h5 className={welcomestyles.w_conttitle}>
              {welcomeContent?.subheading}
            </h5>
            <p>{welcomeContent?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
