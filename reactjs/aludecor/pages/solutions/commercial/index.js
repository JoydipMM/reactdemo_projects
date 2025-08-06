import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Buildingrequirements from "@/components/commercialSolutions/buildingRequirements/buildingRequirements";
import Commercialbuildings from "@/components/commercialSolutions/commercialBuildings/commercialBuildings";
import Innerbanner from "@/components/commercialSolutions/innerbanner/innerbanner";
import Versatility from "@/components/commercialSolutions/versatility/versatility";
import Weatherresistance from "@/components/commercialSolutions/weatherResistance/weatherResistance";
import Certification from "@/components/residentialSolutions/certification/certification";
import ProjectShowcase from "@/components/residentialSolutions/projectShowcase/projectShowcase";
import Industriesarea from "@/components/commercialSolutions/industries/industries";
import Faq from "@/components/commercialSolutions/faq/faq";
import { useState } from "react";
import fetchDataSWR from "@/helper/fetchDataSWR";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Error from "@/components/error/error";
import Residentialprojects from "@/components/residentialSolutions/residentialProjects/residentialProjects";
import Fireresistant from "@/components/commercialSolutions/fireResistant/fireResistant";

export default function Commercial() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: innerBannerData, isError: isErrorBannerData } =
    fetchDataSWR("solutions/post/commercial/banner-section");
  const { fetchdata: commercialData, isError: isErrorCommercialData } =
    fetchDataSWR("solutions/post/commercial/why-aludecor");
  const { fetchdata: complianceData, isError: isErrorComplianceData } =
    fetchDataSWR("solutions/post/commercial/compliance");
  const { fetchdata: featureData, isError: isErrorFeatureData } = fetchDataSWR(
    "solutions/post/commercial/features"
  );
  const { fetchdata: designData, isError: isErrorDesignData } = fetchDataSWR(
    "solutions/post/commercial/designs"
  );
  const { fetchdata: resistanceData, isError: isErrorResistanceData } =
    fetchDataSWR("solutions/post/commercial/resistance-durability");
  const { fetchdata: certificateData, isError: isErrorCertificateData } =
    fetchDataSWR("solutions/post/commercial/certificate");
  const { fetchdata: industriesData, isError: isErrorIndustriesData } =
    fetchDataSWR("solutions/post/commercial/industries");
  const { fetchdata: projectShowcaseData, isError: isErrorProjectShowcase } =
    fetchDataSWR("solutions/post/commercial/showcase-project");
  const { fetchdata: commercialCtaData, isError: isErrorCommercialCta } =
    fetchDataSWR("solutions/post/commercial/cta");
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "solutions/post/commercial/faq"
  );
  const { fetchdata: featuresData, isError: isErrorFeaturesData } =
    fetchDataSWR("solutions/post/commercial/features");
  if (
    !innerBannerData ||
    !commercialData ||
    !complianceData ||
    !featureData ||
    !resistanceData ||
    !designData ||
    !certificateData ||
    !industriesData ||
    !projectShowcaseData ||
    !commercialCtaData ||
    !faqData ||
    !featuresData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  if (
    isErrorBannerData ||
    isErrorCommercialData ||
    isErrorComplianceData ||
    isErrorFeatureData ||
    isErrorResistanceData ||
    isErrorDesignData ||
    isErrorCertificateData ||
    isErrorIndustriesData ||
    isErrorProjectShowcase ||
    isErrorCommercialCta ||
    isErrorFaqData ||
    isErrorFeaturesData
  ) {
    return <Error />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Solutions", "Commercial Solutions"]} />
      <Innerbanner innerBannerData={innerBannerData} />
      <Commercialbuildings commercialData={commercialData} />
      <Buildingrequirements
        complianceData={complianceData}
        featureData={featureData}
      />
      <Fireresistant featuresData={featuresData} />
      <Weatherresistance resistanceData={resistanceData} />
      <Versatility designData={designData} />
      <Certification certificateData={certificateData} />
      <Industriesarea industriesData={industriesData} />
      <ProjectShowcase projectShowcaseData={projectShowcaseData} />
      <Faq commercialCtaData={commercialCtaData} faqData={faqData} />
    </>
  );
}
