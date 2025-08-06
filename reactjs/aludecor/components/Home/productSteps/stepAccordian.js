import React, { useState, useEffect } from "react";
import ProductAccordian from "./productAccordian";

const Stepaccordion = ({ allStepsAccordians }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [productsAttributes, setProductsAttributes] = useState([]);
  const [step1Input, setStep1Input] = useState("");
  const [step2Input, setStep2Input] = useState([]);
  const [step3Input, setStep3Input] = useState([]);
  const [step4Input, setStep4Input] = useState([]);

  const allAccordians = allStepsAccordians.accordion;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_IMAGE_URL}global/product/attributes?parent_slug=${step1Input}&child_slugs=${step2Input}`
        );
        const data = await response.json();
        // console.log(data.data);
        // console.log(
        //   `${process.env.NEXT_PUBLIC_IMAGE_URL}global/product/attributes?parent_slug=${step1Input}&child_slugs=${step2Input}`
        // );
        setProductsAttributes(data.data.content);
        //console.log(productsAttributes);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    if (step2Input.length > 0) {
      fetchData();
    }
  }, [step2Input]);

  //accordian click
  const handleClick = (index) => {
    const filteredSteps = completedSteps.filter((step) => step < activeIndex);
    // console.log("filteredSteps", filteredSteps);
    if (filteredSteps.includes(index)) {
      setActiveIndex(index);
    }
  };
  //button click
  const updateCompletedState = (index) => {
    setCompletedSteps(index);
  };

  return (
    <section className="section">
      <form>
        {allAccordians.map((accordian) => (
          <div key={accordian.step}>
            <ProductAccordian
              product={accordian}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              handleClick={handleClick}
              completedSteps={completedSteps}
              updateCompletedState={updateCompletedState}
              allStepsAccordians={allStepsAccordians}
              setStep1Input={setStep1Input}
              step1Input={step1Input}
              setStep2Input={setStep2Input}
              step2Input={step2Input}
              setStep3Input={setStep3Input}
              step3Input={step3Input}
              productsAttributes={productsAttributes}
              setStep4Input={setStep4Input}
              step4Input={step4Input}
            />
          </div>
        ))}
      </form>
    </section>
  );
};

export default Stepaccordion;
