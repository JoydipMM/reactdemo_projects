import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import InnerBannerACPLouvers from "@/components/acpLouvers/innerbanner/innerbanner";
import Introducing from "@/components/acpLouvers/introducing/introducing";
import Applications from "@/components/acpLouvers/applications/applications";
import AboutACP from "@/components/acpLouvers/aboutacp/aboutacp";
import Technical from "@/components/acpLouvers/technical/technical";
import Tolerances from "@/components/acpLouvers/tolerances/tolerances";
import Advantages from "@/components/acpLouvers/advantages/advantages";
import AvailabilityPanels from "@/components/acpLouvers/availabilityPanels/availabilityPanels";
import Quality from "@/components/acpLouvers/qualitylouvers/qualitylouvers";
import Faq from "@/components/acpLouvers/faq/faq";
import { useState } from "react";
import fetchDataSWR from "@/helper/fetchDataSWR";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Error from "@/components/error/error";

export default function ACPLouvers() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: galleryBannerData, isError: isErrorgalleryBanner } =
    fetchDataSWR("global/banner?slug=acplouvers");
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "products/acplouvers/faq"
  );
  const { fetchdata: introductionData, isError: isErrorIntroductionData } =
    fetchDataSWR("products/acplouvers/introduction-section");
  const { fetchdata: acpLouvers, isError: isErrorAcpLouversData } =
    fetchDataSWR("products/acplouvers/what-are-acp-louvers");
  const { fetchdata: application, isError: isErrorApplicationData } =
    fetchDataSWR("products/acplouvers/application");
  const { fetchdata: technicalDetails, isError: isErrorTechnicalDetailsData } =
    fetchDataSWR("products/acplouvers/technical-details");
  const { fetchdata: tolerancesData, isError: isErrorTolerancesData } =
    fetchDataSWR("products/acplouvers/tolerances");
  const { fetchdata: advantagesData, isError: isErrorAdvantagesData } =
    fetchDataSWR("products/acplouvers/advantages");
  const { fetchdata: shadesData, isError: isErrorShadesData } = fetchDataSWR(
    "products/acplouvers/shades"
  );
  if (
    isErrorgalleryBanner ||
    isErrorFaqData ||
    isErrorIntroductionData ||
    isErrorAcpLouversData ||
    isErrorApplicationData ||
    isErrorTechnicalDetailsData ||
    isErrorTolerancesData ||
    isErrorAdvantagesData ||
    isErrorShadesData
  ) {
    return <Error />;
  }

  if (
    !galleryBannerData ||
    !faqData ||
    !introductionData ||
    !acpLouvers ||
    !application ||
    !technicalDetails ||
    !tolerancesData ||
    !advantagesData ||
    !shadesData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "ACP Louvers"]} />
      <InnerBannerACPLouvers bannerData={galleryBannerData} />
      <Introducing introductionData={introductionData} />
      <AboutACP acpLouvers={acpLouvers} />
      <Applications application={application} />
      <Technical technicalDetails={technicalDetails} />
      <Tolerances tolerancesData={tolerancesData} />
      <Advantages advantagesData={advantagesData} />
      <AvailabilityPanels shadesData={shadesData} />
      <Quality shadesData={shadesData} />
      <Faq faqData={faqData} />
    </>
  );
}
