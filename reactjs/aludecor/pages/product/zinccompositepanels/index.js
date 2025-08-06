import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Choosezinc from "@/components/zincCompositePanels/chooseZinc/chooseZinc";
import Themoment from "@/components/zincCompositePanels/theMoment/theMoment";
import Zinccladding from "@/components/zincCompositePanels/zincCladding/zincCladding";
import Technical from "@/components/zincCompositePanels/technical/technical";
import Shadesoffered from "@/components/zincCompositePanels/shadesOffered/shadesOffered";
import Sustainability from "@/components/zincCompositePanels/sustainability/sustainability";
import Dealerbenefits from "@/components/zincCompositePanels/dealerBenefits/dealerBenefits";
import Easeof from "@/components/zincCompositePanels/easeOf/easeOf";
import Uniquefeatures from "@/components/zincCompositePanels/uniqueFeatures/uniqueFeatures";
import Installationsystems from "@/components/zincCompositePanels/installationSystems/installationSystems";
import fetchDataSWR from "@/helper/fetchDataSWR";
import Error from "@/components/error/error";
import { useState } from "react";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import ProjectShowcase from "@/components/residentialSolutions/projectShowcase/projectShowcase";
import InnerBanner from "@/components/copperCompositePanels/innerbanner/innerbanner";
import Certification from "@/components/residentialSolutions/certification/certification";
import Faq from "@/components/acpLouvers/faq/faq";

export default function Zinccompositepanels() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: projectShowcaseData, isError: isErrorProjectShowcase } =
    fetchDataSWR("products/zinc-composite-panels/projects-showcase");
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=zinc-composite-panels"
  );
  const { fetchdata: informationData, isError: isErrorInformationData } =
    fetchDataSWR("products/zinc-composite-panels/information");
  const { fetchdata: whyChooseData, isError: isErrorWhyChooseData } =
    fetchDataSWR("products/zinc-composite-panels/why-choose");
  const { fetchdata: architecturalData, isError: isErrorArchitecturalData } =
    fetchDataSWR("products/zinc-composite-panels/architectural-need");
  const { fetchdata: technicalData, isError: isErrorTechnicalData } =
    fetchDataSWR("products/zinc-composite-panels/technical-excellence");
  const { fetchdata: shadesData, isError: isErrorShadesData } = fetchDataSWR(
    "products/zinc-composite-panels/shades-offered"
  );
  const { fetchdata: sustainabilityData, isError: isErrorSustainabilityData } =
    fetchDataSWR("products/zinc-composite-panels/sustainability");
  const { fetchdata: comparisonData, isError: isErrorComparisonData } =
    fetchDataSWR("products/zinc-composite-panels/comparison");
  const { fetchdata: fabricationData, isError: isErrorFabricationData } =
    fetchDataSWR("products/zinc-composite-panels/fabrication");
  const { fetchdata: certificateData, isError: isErrorCertificateData } =
    fetchDataSWR("products/copper-composite-panel/certificate-section");
  const { fetchdata: installationData, isError: isErrorInstallationData } =
    fetchDataSWR("products/zinc-composite-panels/installation-support");
  const { fetchdata: uniqueData, isError: isErrorUniqueData } = fetchDataSWR(
    "products/zinc-composite-panels/unique-features"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "products/zinc-composite-panels/faqs"
  );
  if (
    isErrorProjectShowcase ||
    isErrorWhyBannerData ||
    isErrorInformationData ||
    isErrorWhyChooseData ||
    isErrorArchitecturalData ||
    isErrorTechnicalData ||
    isErrorShadesData ||
    isErrorSustainabilityData ||
    isErrorComparisonData ||
    isErrorFabricationData ||
    isErrorCertificateData ||
    isErrorInstallationData ||
    isErrorUniqueData ||
    isErrorFaqData
  ) {
    return <Error />;
  }
  if (
    !projectShowcaseData ||
    !bannerData ||
    !informationData ||
    !whyChooseData ||
    !architecturalData ||
    !technicalData ||
    !shadesData ||
    !sustainabilityData ||
    !comparisonData ||
    !fabricationData ||
    !certificateData ||
    !installationData ||
    !uniqueData ||
    !faqData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "Zinc Composite Panels"]} />
      <InnerBanner bannerData={bannerData} />
      <Themoment informationData={informationData} />
      <Choosezinc whyChooseData={whyChooseData} />
      <Zinccladding architecturalData={architecturalData} />
      <Technical technicalData={technicalData} />
      <Shadesoffered shadesData={shadesData} />
      <Sustainability sustainabilityData={sustainabilityData} />
      <Dealerbenefits comparisonData={comparisonData} />
      <Easeof fabricationData={fabricationData} />
      <Certification certificateData={certificateData} />
      <Uniquefeatures uniqueData={uniqueData} />
      <Installationsystems installationData={installationData} />
      <ProjectShowcase projectShowcaseData={projectShowcaseData} />
      <Faq faqData={faqData} />
    </>
  );
}
