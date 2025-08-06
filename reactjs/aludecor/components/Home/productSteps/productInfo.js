import Image from "next/image";
import ProductButton from "./productButton";
import RadioButton from "./radio";
import productstepsstyle from "../productSteps/productSteps.module.css";
import Productcheckbox from "./checkbox";

export default function ProductInfo({
  productInfoTitle,
  productIndex,
  activeIndex,
  handleClick,
  completedSteps,
  updateCompletedState,
  setActiveIndex,
  setStep1Input,
  productInfoDetails,
  step1Input,
  setStep2Input,
  step2Input,
  step3Input,
  setStep3Input,
  step4Input,
  setStep4Input
}) {
  //console.log("Updated items:", step1Input);
  // console.log("productInfoDetails", productInfoDetails);
  // const [isChecked, setIsChecked] = useState(true); // Store selected value
  let currentAccordian = [];
  const handleActiveButton = (pIndex) => {
    if (pIndex === 1) {
      return step1Input ? false : true;
    }
    if (pIndex === 2) {
      return step2Input.length > 0 ? false : true;
    }
    if (pIndex === 3) {
      return step3Input.length > 0 ? false : true;
    }
    if (pIndex === 4) {
      return step4Input.length > 0 ? false : true;
    }
  };
  const handleRadioChange = (event) => {
    setStep1Input(event.target.value); // Update state with selected value
    setStep2Input([]);
    setStep3Input([]);
    setStep4Input([]);
  };

  const handleCheckboxButton = (event) => {
    const { value, checked } = event.target;
    if (productIndex === 2) {
      setStep2Input((step2Input) => {
        if (checked) {
          return [...step2Input, event.target.value];
        } else {
          return step2Input.filter((item) => item !== value);
        }
      }); // Update state with selected value
      //console.log(step2Input);
      setStep3Input([]);
      setStep4Input([]);
      currentAccordian = step2Input;
    }
    if (productIndex === 3) {
      setStep3Input((step3Input) => {
        if (checked) {
          return [...step3Input, event.target.value];
        } else {
          return step3Input.filter((item) => item !== value);
        }
      }); // Update state with selected value
      // console.log(step2Input);
      setStep4Input([]);
      currentAccordian = step3Input;
    }
    if (productIndex === 4) {
      setStep4Input((step4Input) => {
        if (checked) {
          return [...step4Input, event.target.value];
        } else {
          return step4Input.filter((item) => item !== value);
        }
      }); // Update state with selected value
      // console.log(step2Input);
      currentAccordian = step4Input;
    }
  };
  return (
    <div className="item-info">
      <h3>{productInfoTitle}</h3>
      {productIndex === 1 ? (
        <div className="propert">
          {productInfoDetails.map((productInfoDetail, index) => {
            return (
              <div className="propert-in" key={`piDetail-${index}`}>
                <div className={`propert-img ${productstepsstyle.brandview}`}>
                  <Image
                    fill={true}
                    src={productInfoDetail.image.url}
                    alt="productstep"
                  />
                  <div className="brands">
                    <Image
                      fill={true}
                      src="/images/brand-star.svg"
                      alt="brand-star"
                    />
                  </div>
                </div>
                <div className="checksteparea">
                  <RadioButton
                    name="productType"
                    id={`${productInfoDetail.slug}`}
                    value={`${productInfoDetail.slug}`}
                    checked={step1Input === `${productInfoDetail.slug}`} // Control radio state
                    onChange={handleRadioChange} // Handle change
                  />
                  <span>{productInfoDetail.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="infoboxarea">
          {productInfoDetails.map((productInfoDetail, index) => {
            console.log("productInfoDetail", productInfoDetail);
            return (
              <div className="infoboxareain" key={`productIDetail-${index}`}>
                <span className={productstepsstyle.tooltip}>
                  {productInfoDetail.name}
                  {productInfoDetail?.add_info != "" ? (
                    <span className={productstepsstyle.tooltiptext}>
                      {productInfoDetail?.add_info}
                    </span>
                  ) : (
                    ""
                  )}
                </span>
                <Productcheckbox
                  id={productInfoDetail.id}
                  value={productInfoDetail.slug}
                  onChange={handleCheckboxButton}
                  isChecked={
                    productIndex === 2
                      ? step2Input.includes(productInfoDetail.slug)
                      : productIndex === 3
                        ? step3Input.includes(productInfoDetail.slug)
                        : productIndex === 4
                          ? step4Input.includes(productInfoDetail.slug)
                          : false
                  }
                />
                {/* {productInfoDetail?.add_info != "" ? (
                  <label className={`${productstepsstyle.smalltxt}`}>
                    {productInfoDetail?.add_info}
                  </label>
                ) : (
                  ""
                )} */}
              </div>
            );
          })}
        </div>
      )}
      <ProductButton
        buttonActive={handleActiveButton(productIndex)}
        buttonTitle={productIndex === 4 ? `SUBMIT` : `NEXT STEP`}
        activeIndex={activeIndex}
        handleClick={handleClick}
        updateCompletedState={updateCompletedState}
        setActiveIndex={setActiveIndex}
        completedSteps={completedSteps}
        step1Input={step1Input}
        step2Input={step2Input}
        step3Input={step3Input}
        step4Input={step4Input}
      />
    </div>
  );
}
