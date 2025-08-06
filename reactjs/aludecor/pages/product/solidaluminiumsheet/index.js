import Faq from "@/components/acpLouvers/faq/faq";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import About from "@/components/solidAluminiumSheet/about/about";
// import Faq from "@/components/solidAluminiumSheet/faq/faq";
import Features from "@/components/solidAluminiumSheet/features/features";
import InnerBannerAluminium from "@/components/solidAluminiumSheet/innerbanner/innerbanner";
import InstallGuide from "@/components/solidAluminiumSheet/installGuide/installGuide";
import KeyFeatures from "@/components/solidAluminiumSheet/keyFeatures/keyFeatures";
import TechData from "@/components/solidAluminiumSheet/techData/techData";
import Variation from "@/components/solidAluminiumSheet/variation/variation";
import WhatIs from "@/components/solidAluminiumSheet/whatIs/whatIs";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function SolidAluminiumSheet() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: bimBannerData, isError: isErrorBimBanner } = fetchDataSWR(
    "global/banner?slug=solid-aluminium-sheet/"
  );
  const { fetchdata: descriptionData, isError: isErrorDescriptionData } =
    fetchDataSWR("products/solid-aluminium-sheet/description-section/");
  const { fetchdata: installationData, isError: isErrorInstallationData } =
    fetchDataSWR("products/solid-aluminium-sheet/installation-section");
  const { fetchdata: benefitData, isError: isErrorBenefitData } = fetchDataSWR(
    "products/solid-aluminium-sheet/benifits-section"
  );
  const { fetchdata: technicalData, isError: isErrorBTechnicalData } =
    fetchDataSWR("products/solid-aluminium-sheet/technical-data-section");
  const { fetchdata: aboutData, isError: isErrorAboutData } = fetchDataSWR(
    "products/solid-aluminium-sheet/about-section"
  );
  const { fetchdata: featureData, isError: isErrorFeatureData } = fetchDataSWR(
    "products/solid-aluminium-sheet/features-section"
  );
  const { fetchdata: applicationData, isError: isErrorApplicationData } =
    fetchDataSWR("products/solid-aluminium-sheet/application-section");
  const { fetchdata: acceptanceData, isError: isErrorAcceptanceData } =
    fetchDataSWR("products/solid-aluminium-sheet/acceptance-section");
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "products/solid-aluminium-sheet/faq-section"
  );

  if (
    isErrorBimBanner ||
    isErrorDescriptionData ||
    isErrorInstallationData ||
    isErrorBenefitData ||
    isErrorBTechnicalData ||
    isErrorAboutData ||
    isErrorFeatureData ||
    isErrorApplicationData ||
    isErrorAcceptanceData ||
    isErrorFaqData
  ) {
    return <Error />;
  }
  if (
    !bimBannerData ||
    !descriptionData ||
    !installationData ||
    !benefitData ||
    !technicalData ||
    !aboutData ||
    !featureData ||
    !applicationData ||
    !acceptanceData ||
    !faqData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "Solid Aluminium Sheet"]} />
      <InnerBannerAluminium bimBannerData={bimBannerData} />
      <WhatIs descriptionData={descriptionData} />
      <InstallGuide installationData={installationData} />
      <KeyFeatures benefitData={benefitData} />
      <TechData technicalData={technicalData} />
      <About aboutData={aboutData} />
      <Features featureData={featureData} applicationData={applicationData} />
      <Variation acceptanceData={acceptanceData} />
      <Faq faqData={faqData} />
    </>
  );
}
