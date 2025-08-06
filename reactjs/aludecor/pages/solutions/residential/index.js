import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Buildingrequirements from "@/components/residentialSolutions/buildingRequirements/buildingRequirements";
import Certification from "@/components/residentialSolutions/certification/certification";
import Experience from "@/components/residentialSolutions/experience/experience";
import Faq from "@/components/residentialSolutions/faq/faq";
import Finishes from "@/components/residentialSolutions/finishes/finishes";
import Innerbanner from "@/components/residentialSolutions/innerbanner/innerbanner";
import ProjectShowcase from "@/components/residentialSolutions/projectShowcase/projectShowcase";
import Protectyour from "@/components/residentialSolutions/protectYour/protectYour";
import Residentialbuildings from "@/components/residentialSolutions/residentialBuildings/residentialBuildings";
import Residentialprojects from "@/components/residentialSolutions/residentialProjects/residentialProjects";
import Weatherresistance from "@/components/residentialSolutions/weatherResistance/weatherResistance";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function Residential() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: innerBannerData, isError: isErrorBannerData } =
    fetchDataSWR("solutions/post/residential/banner-section");
  const { fetchdata: residentialData, isError: isErrorResidentialData } =
    fetchDataSWR("solutions/post/residential/residential-buildings");
  const { fetchdata: complianceData, isError: isErrorComplianceData } =
    fetchDataSWR("solutions/post/residential/compliance");
  const { fetchdata: featureData, isError: isErrorFeatureData } = fetchDataSWR(
    "solutions/post/residential/features"
  );
  const { fetchdata: resistanceData, isError: isErrorResistanceData } =
    fetchDataSWR("solutions/post/residential/resistance-durability");
  const { fetchdata: designData, isError: isErrorDesignData } = fetchDataSWR(
    "solutions/post/residential/designs"
  );
  const { fetchdata: certificateData, isError: isErrorCertificateData } =
    fetchDataSWR("solutions/post/commercial/certificate");
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "solutions/post/residential/faq"
  );
  const { fetchdata: commercialCtaData, isError: isErrorCommercialCta } =
    fetchDataSWR("solutions/post/residential/cta");
  const { fetchdata: projectShowcaseData, isError: isErrorProjectShowcase } =
    fetchDataSWR("solutions/post/residential/showcase-project");
  const { fetchdata: resiProjectData, isError: isErrorResiProjectData } =
    fetchDataSWR("solutions/post/residential/industries");
  if (
    !innerBannerData ||
    !residentialData ||
    !complianceData ||
    !featureData ||
    !resistanceData ||
    !designData ||
    !faqData ||
    !certificateData ||
    !commercialCtaData ||
    !projectShowcaseData ||
    !resiProjectData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  if (
    isErrorBannerData ||
    isErrorResidentialData ||
    isErrorComplianceData ||
    isErrorFeatureData ||
    isErrorResistanceData ||
    isErrorDesignData ||
    isErrorFaqData ||
    isErrorCertificateData ||
    isErrorCommercialCta ||
    isErrorProjectShowcase ||
    isErrorResiProjectData
  ) {
    return <Error />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Solutions", "Residential Solutions"]} />
      <Innerbanner innerBannerData={innerBannerData} />
      <Residentialbuildings residentialData={residentialData} />
      <Buildingrequirements
        complianceData={complianceData}
        featureData={featureData}
      />
      <Protectyour featureData={featureData} />
      <Weatherresistance resistanceData={resistanceData} />
      <Experience featureData={featureData} />
      <Finishes designData={designData} />
      <Certification certificateData={certificateData} />
      <ProjectShowcase projectShowcaseData={projectShowcaseData} />
      <Residentialprojects industriesData={resiProjectData} />
      <Faq commercialCtaData={commercialCtaData} faqData={faqData} />
    </>
  );
}
