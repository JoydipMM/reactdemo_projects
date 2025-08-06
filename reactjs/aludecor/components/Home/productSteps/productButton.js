"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function ProductButton({
  buttonTitle,
  activeIndex,
  updateCompletedState,
  setActiveIndex,
  completedSteps,
  buttonActive,
  step1Input,
  step2Input,
  step3Input,
  step4Input
}) {
  const router = useRouter();

  const handleLinkClick = (e) => {
    e.preventDefault();
    if (activeIndex === 4) {
      setActiveIndex(1);
      router.push(
        `/product/productFilter?product_type=${step1Input}&application=${step2Input}&shades=${step3Input}&specialFeature=${step4Input}`
      ); // Replace with your target page
    } else {
      updateCompletedState(() => {
        const allSteps = !completedSteps.includes(activeIndex)
          ? [...completedSteps, activeIndex]
          : [...completedSteps];
        setActiveIndex(activeIndex + 1);
        return allSteps;
      });
    }
  };

  return (
    <button
      className="common-btn"
      onClick={handleLinkClick}
      disabled={buttonActive}
    >
      <label>
        {buttonTitle}
        {/* NEXT STEP */}
        <Image
          width={34}
          height={16}
          src="/images/arrow-right.svg"
          alt="arrow-right"
        />
      </label>
    </button>
  );
}
