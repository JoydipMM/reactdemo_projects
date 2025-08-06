import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Frequency from "@/components/cleaningAndMaintenance/frequency/frequency";
import Innerbanner from "@/components/downloads/innerbanner/innerbanner";
import Pointstokeep from "@/components/cleaningAndMaintenance/Precaution/pointstoKeep";
import Procedurecleaning from "@/components/cleaningAndMaintenance/procedureCleaning/procedureCleaning";
import Error from "@/components/error/error";
import Faq from "@/components/acpLouvers/faq/faq";
import NeedHelp from "@/components/fabricationGuide/needHelp/needHelp";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function Fabricationguide() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: ctaData, isError: isErrorCtaData } = fetchDataSWR(
    "support/fabrication-guide/cta-section"
  );
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=cleaning-and-maintenance"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "support/cleaning-and-maintenance/faq"
  );
  const { fetchdata: cmQuideData, isError: isErrorCmGuideData } = fetchDataSWR(
    "support/cleaning-and-maintenance/cm-guide"
  );
  const { fetchdata: procedureData, isError: isErrorProcedureData } =
    fetchDataSWR("support/cleaning-and-maintenance/procedure-section");
  const { fetchdata: pointsData, isError: isErrorPointsData } = fetchDataSWR(
    "support/cleaning-and-maintenance/points-to-keep"
  );
  if (
    isErrorCtaData ||
    isErrorWhyBannerData ||
    isErrorFaqData ||
    isErrorCmGuideData ||
    isErrorProcedureData ||
    isErrorPointsData
  ) {
    return <Error />;
  }
  if (
    !ctaData ||
    !bannerData ||
    !faqData ||
    !cmQuideData ||
    !procedureData ||
    !pointsData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb
        pagehierarchy={["Support", "MCPedia", "Cleaning And Maintenance"]}
      />
      <Innerbanner bannerData={bannerData} />
      <Frequency cmQuideData={cmQuideData} />
      <Procedurecleaning procedureData={procedureData} />
      <Pointstokeep pointsData={pointsData} />
      <NeedHelp ctaData={ctaData} />
      <Faq faqData={faqData} />
    </>
  );
}
