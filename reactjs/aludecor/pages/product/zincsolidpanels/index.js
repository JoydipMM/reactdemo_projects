import Faq from "@/components/acpLouvers/faq/faq";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Advantages from "@/components/zincSolidPanels/advantages/advantages";
import AvailabilityPanels from "@/components/zincSolidPanels/availabilityPanels/availabilityPanels";
import Benefits from "@/components/zincSolidPanels/benefits/benefits";
import Download from "@/components/zincSolidPanels/download/download";
import InnerBannerZinc from "@/components/zincSolidPanels/innerbanner/innerbanner";
import Introducing from "@/components/zincSolidPanels/introducing/introducing";
import VariousBenefits from "@/components/zincSolidPanels/variousBenefits/variousBenefits";
import ZincCladding from "@/components/zincSolidPanels/zincCladding/zincCladding";
import ZincRoofing from "@/components/zincSolidPanels/zincRoofing/zincRoofing";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function ZincSolidPanels() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: zincBannerData, isError: isErrorZincBanner } =
    fetchDataSWR("global/banner?slug=zinc-solid-panels");
  const { fetchdata: introducingData, isError: isErrorIntroducingBanner } =
    fetchDataSWR("products/zinc-solid-panels/introducing");
  const { fetchdata: advantagesData, isError: isErrorAdvantagesBanner } =
    fetchDataSWR("products/zinc-solid-panels/advantages");
  const { fetchdata: downloadData, isError: isErrorDownloadBanner } =
    fetchDataSWR("products/zinc-solid-panels/brochure");
  const { fetchdata: availabilityData, isError: isErrorAvailabilityBanner } =
    fetchDataSWR("products/zinc-solid-panels/availability");
  const { fetchdata: roofingData, isError: isErrorRoofingData } = fetchDataSWR(
    "products/zinc-solid-panels/roofing"
  );
  const { fetchdata: benefitsData, isError: isErrorBenefitsData } =
    fetchDataSWR("products/zinc-solid-panels/benefits");
  const { fetchdata: exteriorData, isError: isErrorExteriorData } =
    fetchDataSWR("products/zinc-solid-panels/exterior");
  const { fetchdata: moreBenefitData, isError: isErrorMoreBenefitData } =
    fetchDataSWR("products/zinc-solid-panels/more-benefits");
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "products/zinc-solid-panels/faqs"
  );

  if (
    isErrorZincBanner ||
    isErrorAdvantagesBanner ||
    isErrorIntroducingBanner ||
    isErrorDownloadBanner ||
    isErrorAvailabilityBanner ||
    isErrorRoofingData ||
    isErrorBenefitsData ||
    isErrorExteriorData ||
    isErrorMoreBenefitData ||
    isErrorFaqData
  ) {
    return <Error />;
  }
  if (
    !zincBannerData ||
    !advantagesData ||
    !introducingData ||
    !downloadData ||
    !availabilityData ||
    !roofingData ||
    !benefitsData ||
    !exteriorData ||
    !moreBenefitData ||
    !faqData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "Zinc Solid Panels"]} />
      <InnerBannerZinc bannerData={zincBannerData} />
      <Introducing introducingData={introducingData} />
      <Advantages advantagesData={advantagesData} />
      <Download downloadData={downloadData} />
      <AvailabilityPanels availabilityData={availabilityData} />
      <ZincRoofing roofingData={roofingData} />
      <Benefits benefitsData={benefitsData} />
      <ZincCladding exteriorData={exteriorData} />
      <VariousBenefits moreBenefitData={moreBenefitData} />
      <Faq faqData={faqData} />
    </>
  );
}
