import productstepsstyles from "../productSteps/productSteps.module.css";
import Stepaccordion from "./stepAccordian";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Productsteps({ productFilterData }) {
  const allSteps = productFilterData?.data?.content;
  return (
    <>
      <div className="container">
        <div className={`${productstepsstyles.welcomewrp} commonpadding`}>
          <div className={productstepsstyles.wtitlewrp}>
            <h2>
              <span>{allSteps?.preheading}</span>
              <AnimatedText text={allSteps?.heading} />
            </h2>
          </div>
        </div>
        <div className={productstepsstyles.stepsacordian}>
          <Stepaccordion allStepsAccordians={allSteps} />
        </div>
      </div>
    </>
  );
}
