import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import InnerBanner from "@/components/copperCompositePanels/innerbanner/innerbanner";
import GlobalReach from "@/components/Export/globalreach/globalreach";
import Manufacturer from "@/components/Export/manufacturer/manufacturer";
import Architectural from "@/components/Export/architectural/architectural";
import IndustryApplication from "@/components/Export/industry/industry";
import GlobalSupply from "@/components/Export/globalsupply/globalsupply";
import Distributor from "@/components/Export/distributor/distributor";
import Certification from "@/components/Export/certification/certification";
import GlobalClient from "@/components/Export/globalclient/globalclient";
import Contact from "@/components/Export/contact/contact";
import Faq from "@/components/Export/faq/faq";

import { useState } from "react";
import fetchDataSWR from "@/helper/fetchDataSWR";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";

export default function ExportPage() {
  const [loading, setLoading] = useState(true);

  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=export"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } =
    fetchDataSWR("export/section/faq");
  const { fetchdata: aboutData, isError: isErrorAboutData } = fetchDataSWR(
    "export/section/about"
  );
  const { fetchdata: manufacturingData, isError: isErrorManufacturingData } =
    fetchDataSWR("export/section/manufacturing");
  const { fetchdata: industryData, isError: isErrorIndustryData } =
    fetchDataSWR("export/section/industry");
  const { fetchdata: architecturalData, isError: isErrorArchitecturalData } =
    fetchDataSWR("export/section/architectural");
  const { fetchdata: supplyData, isError: isErrorSupplyData } = fetchDataSWR(
    "export/section/supply-chain"
  );
  const { fetchdata: distributorData, isError: isErrorDistributorData } =
    fetchDataSWR("export/section/distributor");
  const { fetchdata: discussData, isError: isErrorDiscussData } = fetchDataSWR(
    "export/section/discuss"
  );
  const { fetchdata: globalData, isError: isErrorGlobalData } = fetchDataSWR(
    "export/section/global-client"
  );
  const { fetchdata: certificateData, isError: isErrorCertificateData } =
    fetchDataSWR("export/section/certificate");
  if (
    isErrorWhyBannerData ||
    isErrorFaqData ||
    isErrorAboutData ||
    isErrorManufacturingData ||
    isErrorIndustryData ||
    isErrorArchitecturalData ||
    isErrorSupplyData ||
    isErrorDistributorData ||
    isErrorDiscussData ||
    isErrorGlobalData ||
    isErrorCertificateData
  ) {
    return <Error />;
  }
  if (
    !bannerData ||
    !faqData ||
    !aboutData ||
    !manufacturingData ||
    !industryData ||
    !architecturalData ||
    !supplyData ||
    !distributorData ||
    !discussData ||
    !globalData ||
    !certificateData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Export"]} />
      <InnerBanner bannerData={bannerData} />
      <GlobalReach aboutData={aboutData} />
      <Manufacturer manufacturingData={manufacturingData} />
      <Architectural architecturalData={architecturalData} />
      <IndustryApplication industryData={industryData} />
      <GlobalSupply supplyData={supplyData} />
      <Distributor distributorData={distributorData} />
      <Certification certificateData={certificateData} />
      <GlobalClient globalData={globalData} />
      <Contact discussData={discussData} />
      <Faq faqData={faqData} />
    </>
  );
}
