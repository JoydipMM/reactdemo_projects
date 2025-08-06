"use client";
import React from "react";
import ReactCompareImage from "react-compare-image";
import imageComparisonsliderstyles from "@/components/residentialSolutions/imageComparisonslider/imageComparisonslider.module.css";

const ImageComparisonSlider = ({ resistanceItem }) => {
  // console.log("resistanceItem", resistanceItem);
  return (
    <div className={`${imageComparisonsliderstyles.slidercontainer}`}>
      <div className={`${imageComparisonsliderstyles.sliderwrapper}`}>
        <ReactCompareImage
          leftImage={resistanceItem?.image_one?.image_url} // Update with actual path
          rightImage={resistanceItem?.image_two?.image_url}
          sliderLineColor="white"
          sliderPositionPercentage={0.5}
        />
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
