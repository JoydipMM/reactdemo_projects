import Image from "next/image";
import stepinsidestyles from "../stepInside/stepInside.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Stepinside({ stepData }) {
  const stepInsideData = stepData.data?.content;
  return (
    <>
      <div className="container">
        <div className={`${stepinsidestyles.welcomewrp} commonpadding`}>
          <div className={stepinsidestyles.wtitlewrp}>
            <h2>
              <AnimatedText text={stepInsideData?.heading} />
            </h2>
          </div>
          <div className={stepinsidestyles.wcontentwrp}>
            <h5 className={stepinsidestyles.w_conttitle}>
              <AnimatedText text={stepInsideData?.subheading} />
            </h5>
            <p data-aos="fade-down" data-aos-delay="0">
              {stepInsideData?.description}
            </p>

            <p></p>
          </div>
        </div>
        <div
          className={`${stepinsidestyles.rotateimg} ${stepinsidestyles.brandview}`}
        >
          <div className="brands">
            <Image fill={true} src="/images/brand-star.svg" alt="brand-star" />
          </div>
          <Image fill={true} src="/images/step-bigimg.jpg" alt="image" />
        </div>
      </div>
    </>
  );
}
