import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import AcpSheets from "@/components/fabricationGuide/acpSheets/acpSheets";
import AdditionalResources from "@/components/fabricationGuide/additionalResources/additionalResources";
import CommonMistake from "@/components/fabricationGuide/commonMistake/commonMistake";
import Faq from "@/components/acpLouvers/faq/faq";
// import Innerbanner from "@/components/fabricationGuide/innerbanner/innerbanner";
import Installation from "@/components/fabricationGuide/installation/installation";
import Introduction from "@/components/fabricationGuide/introduction/introduction";
import Maintenance from "@/components/fabricationGuide/maintenance/maintenance";
import NeedHelp from "@/components/fabricationGuide/needHelp/needHelp";
import Precaution from "@/components/fabricationGuide/Precaution/precaution";
import Techniques from "@/components/fabricationGuide/techniques/techniques";
import Innerbanner from "@/components/downloads/innerbanner/innerbanner";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Error from "@/components/error/error";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";
import { getServerSession } from "next-auth";
import { authLogin } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authLogin);
  //console.log("sesssssssssss", session);
  if (!session) {
    return {
      props: {}
    };
  }

  return {
    props: { session }
  };
}

export default function Fabricationguide() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=fabrication-guide"
  );
  const { fetchdata: introductionData, isError: isErrorIntroductionData } =
    fetchDataSWR("support/fabrication-guide/introduction-section");
  const { fetchdata: safetyData, isError: isErrorSafetyData } = fetchDataSWR(
    "support/fabrication-guide/safety-process"
  );
  const { fetchdata: mistakeData, isError: isErrorMistakeData } = fetchDataSWR(
    "support/fabrication-guide/mistake-section"
  );
  const { fetchdata: fabricationData, isError: isErrorFabricationData } =
    fetchDataSWR("support/fabrication-guide/fabrication-section");
  const { fetchdata: installationData, isError: isErrorInstallationData } =
    fetchDataSWR("support/fabrication-guide/installation-section");
  const { fetchdata: exploreData, isError: isErrorExploreData } = fetchDataSWR(
    "support/fabrication-guide/explore-manufacturing-section"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "support/fabrication-guide/faq"
  );
  const { fetchdata: resourcesData, isError: isErrorResourcesData } =
    fetchDataSWR("support/fabrication-guide/resources-section");
  const { fetchdata: ctaData, isError: isErrorCtaData } = fetchDataSWR(
    "support/fabrication-guide/cta-section"
  );
  if (
    isErrorWhyBannerData ||
    isErrorIntroductionData ||
    isErrorSafetyData ||
    isErrorMistakeData ||
    isErrorFabricationData ||
    isErrorInstallationData ||
    isErrorExploreData ||
    isErrorFaqData ||
    isErrorCtaData ||
    isErrorResourcesData
  ) {
    return <Error />;
  }
  if (
    !bannerData ||
    !introductionData ||
    !safetyData ||
    !mistakeData ||
    !fabricationData ||
    !installationData ||
    !exploreData ||
    !faqData ||
    !ctaData ||
    !resourcesData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Support", "MCPedia", "Fabrication guide"]} />
      <Innerbanner bannerData={bannerData} />
      <Introduction introductionData={introductionData} />
      <AcpSheets introductionData={introductionData} />
      <Precaution safetyData={safetyData} />
      <Techniques fabricationData={fabricationData} />
      <Installation installationData={installationData} />
      <CommonMistake mistakeData={mistakeData} />
      <Maintenance exploreData={exploreData} />
      <AdditionalResources resourcesData={resourcesData} session={session} />
      <NeedHelp ctaData={ctaData} />
      <Faq faqData={faqData} />
    </>
  );
}
