import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import BenefitsPrePainted from "@/components/preCoatedAluminium/benefitsPrePainted/benefitsPrePainted";
import IndApplication from "@/components/preCoatedAluminium/indApplication/indApplication";
import InnerBannerPrecoat from "@/components/preCoatedAluminium/innerbanner/innerbanner";
import SpecificationPreCoat from "@/components/preCoatedAluminium/specificationPreCoat/specificationPreCoat";
import TechnicalData from "@/components/preCoatedAluminium/technicalData/technicalData";
import TemperDetails from "@/components/preCoatedAluminium/temperDetails/temperDetails";
import TransformProjects from "@/components/preCoatedAluminium/transformProjects/transformProjects";
import WhyPreCoated from "@/components/preCoatedAluminium/whyPreCoated/whyPreCoated";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function PreCoatedAluminium() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: bimBannerData, isError: isErrorBimBannerData } =
    fetchDataSWR("global/banner?slug=pre-coated-aluminium");
  const { fetchdata: introductionData, isError: isErrorIntroductionData } =
    fetchDataSWR("products/pre-coated-aluminium/description-section");
  const { fetchdata: whyPreCoatedData, isError: isErrorWhyPreCoatedData } =
    fetchDataSWR("products/pre-coated-aluminium/why-are-pre-coated-aluminium");
  const { fetchdata: benefitsData, isError: isErrorBenefitsData } =
    fetchDataSWR("products/pre-coated-aluminium/benefits");
  const { fetchdata: industriesData, isError: isErrorIndustriesData } =
    fetchDataSWR("products/pre-coated-aluminium/industries");
  const { fetchdata: technicalData, isError: isErrorTechnicalData } =
    fetchDataSWR("products/pre-coated-aluminium/technical-data");
  const { fetchdata: specificationData, isError: isErrorSpecificationData } =
    fetchDataSWR("products/pre-coated-aluminium/specification");
  const { fetchdata: allAlloyData, isError: isErrorAllAlloyData } =
    fetchDataSWR("products/pre-coated-aluminium/alloy-and-temper-details");
  if (
    isErrorBimBannerData ||
    isErrorIntroductionData ||
    isErrorWhyPreCoatedData ||
    isErrorBenefitsData ||
    isErrorIndustriesData ||
    isErrorTechnicalData ||
    isErrorSpecificationData ||
    isErrorAllAlloyData
  ) {
    return <Error />;
  }
  if (
    !bimBannerData ||
    !introductionData ||
    !whyPreCoatedData ||
    !benefitsData ||
    !industriesData ||
    !technicalData ||
    !specificationData ||
    !allAlloyData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "Pre-coated Aluminium"]} />
      <InnerBannerPrecoat bannerData={bimBannerData} />
      <TransformProjects introductionData={introductionData} />
      <WhyPreCoated whyPreCoatedData={whyPreCoatedData} />
      <BenefitsPrePainted benefitsData={benefitsData} />
      <IndApplication industriesData={industriesData} />
      <TechnicalData technicalData={technicalData} />
      <SpecificationPreCoat specificationData={specificationData} />
      <TemperDetails allAlloyData={allAlloyData} />
    </>
  );
}
