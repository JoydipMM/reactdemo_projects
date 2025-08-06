"use client";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import Faq from "@/components/acpLouvers/faq/faq";
import Whypartner from "@/components/Fabricator/whyPartner/whyPartner";
import Exclusivefeatures from "@/components/fabricatorLanding/exclusiveFeatures/exclusiveFeatures";
import Getstarted from "@/components/fabricatorLanding/getStarted/getStarted";
//import Registrationguidevideo from "@/components/fabricatorLanding/registrationGuidevideo/registrationGuidevideo";
import Showcase from "@/components/fabricatorLanding/showcase/showcase";
import Signuparea from "@/components/fabricatorLanding/signupArea/signupArea";
import Successstories from "@/components/fabricatorLanding/successStories/successStories";
import Updatesoffers from "@/components/fabricatorLanding/updatesOffers/updatesOffers";
import Whatmakes from "@/components/fabricatorLanding/whatMakes/whatMakes";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";
import SpecifierSignUp from "@/components/fabricatorLanding/signupArea/specifierSignUp";

export default function Landing() {
  const [loading, setLoading] = useState(true);

  const { fetchdata: introductionData, isError: isErrorIntroductionData } =
    fetchDataSWR("specifier/landing/introduction");
  const { fetchdata: partnerData, isError: isErrorPartnerData } = fetchDataSWR(
    "specifier/landing/partner"
  );
  const { fetchdata: featuresData, isError: isErrorFeaturesData } =
    fetchDataSWR("specifier/landing/features");
  const { fetchdata: stepsData, isError: isErrorStepsData } = fetchDataSWR(
    "specifier/landing/steps"
  );
  const { fetchdata: updateData, isError: isErrorUpdateData } = fetchDataSWR(
    "specifier/landing/update-offers"
  );
  const { fetchdata: designData, isError: isErrorDesignData } = fetchDataSWR(
    "specifier/landing/design-features"
  );
  const { fetchdata: successData, isError: isErrorSuccessData } = fetchDataSWR(
    "specifier/landing/success-stories"
  );
  const { fetchdata: rewardsData, isError: isErrorRewardsData } = fetchDataSWR(
    "specifier/landing/rewards"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "specifier/landing/faqs"
  );
  if (
    isErrorIntroductionData ||
    isErrorPartnerData ||
    isErrorFeaturesData ||
    isErrorStepsData ||
    isErrorUpdateData ||
    isErrorDesignData ||
    isErrorSuccessData ||
    isErrorRewardsData ||
    isErrorFaqData
  ) {
    return <Error />;
  }

  if (
    !introductionData ||
    !partnerData ||
    !featuresData ||
    !stepsData ||
    !updateData ||
    !designData ||
    !successData ||
    !rewardsData ||
    !faqData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Specifiers"]} />
      <SpecifierSignUp introductionData={introductionData} />
      <Whatmakes featuresData={featuresData} />
      <Getstarted stepsData={stepsData} />
      <Updatesoffers updateData={updateData} />
      <Exclusivefeatures designData={designData} />
      <Successstories successData={successData} />
      <Showcase rewardsData={rewardsData} />
      <Whypartner partnerData={partnerData} />
      <Faq faqData={faqData} />
    </>
  );
}
