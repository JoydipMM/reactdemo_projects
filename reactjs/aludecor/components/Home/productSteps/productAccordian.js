import React, { useEffect, useState } from "react";
import ProductTitle from "./productTitle";
import ProductInfo from "./productInfo";

export default function ProductAccordian({
  product,
  activeIndex,
  handleClick,
  completedSteps,
  updateCompletedState,
  setActiveIndex,
  allStepsAccordians,
  productsAttributes,
  setStep1Input,
  step1Input,
  setStep2Input,
  step2Input,
  setStep3Input,
  step3Input,
  setStep4Input,
  step4Input
}) {
  let productInfo = [];
  if (product.step === 1) {
    // console.log("step1", product.step);
    productInfo = allStepsAccordians.categories;
  }
  if (product.step === 2) {
    // console.log("step2", product.step);
    let productCategories = allStepsAccordians.categories;
    const exteriorProductsArray = productCategories.filter(
      (category) => category.slug === step1Input
    );
    // Extract all subcategories from the filtered array
    const allSubcategories = exteriorProductsArray.flatMap(
      (category) => category.subcategories
    );
    productInfo = allSubcategories;
    //console.log("allSubcategories", productInfo);
  }
  if (product.step === 3) {
    // console.log("step3", product.step);
    const productAttributes = productsAttributes.attributes;
    // console.log("productAttributes", productAttributes);
    if (productAttributes) {
      const productShadesAttributes = productAttributes.pa_shades_system;
      if (productShadesAttributes) {
        productInfo = productShadesAttributes.terms;
      } else {
        productInfo = [];
      }
      //console.log(productShadesAttributes);
    }
  }
  if (product.step === 4) {
    // console.log("step4", product.step);
    const productAttributes = productsAttributes.attributes;
    if (productAttributes) {
      const productShadesAttributes = productAttributes.pa_special_features;
      if (productShadesAttributes) {
        productInfo = productShadesAttributes.terms;
      } else {
        productInfo = [];
      }
      //   console.log(productShadesAttributes);
    }
  }
  return (
    <>
      <div
        className={`item ${product.step === activeIndex ? "active" : ""}`}
        // className={`item active`}
        onClick={() => {
          handleClick(product.step);
        }}
      >
        {/* {product.title} */}
        <ProductTitle
          accordianNum={product.step}
          accordianTitle={product.title}
        />
      </div>
      <div //className={`info active`} onClick={() => handleClick()}>
        className={`info ${product.step === activeIndex ? "active" : ""}`}
        onClick={() => handleClick(product.step)}
      >
        <ProductInfo
          productInfoTitle={product.title}
          productIndex={product.step}
          activeIndex={activeIndex}
          handleClick={handleClick}
          completedSteps={completedSteps}
          updateCompletedState={updateCompletedState}
          setActiveIndex={setActiveIndex}
          productInfoDetails={productInfo}
          step1Input={step1Input}
          setStep1Input={setStep1Input}
          step2Input={step2Input}
          setStep2Input={setStep2Input}
          step3Input={step3Input}
          setStep3Input={setStep3Input}
          setStep4Input={setStep4Input}
          step4Input={step4Input}
        />
        {/* {product.info} */}
      </div>
    </>
  );
}
