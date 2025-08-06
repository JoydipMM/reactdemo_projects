import { useState } from "react";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import InnerBanner from "@/components/copperCompositePanels/innerbanner/innerbanner";
import SustainabilityCSR from "@/components/csr/sustainability/sustainability";
import Efforts from "@/components/csr/efforts/efforts";
import Pillars from "@/components/csr/pillars/pillars";
import Gallery from "@/components/csr/gallery/gallery";
import Contactcontent from "@/components/csr/contactContent/contactContent";
import OurImpact from "@/components/csr/ourImpact/ourimpact";
import ClientSays from "@/components/Home/client/client";
import DownloadResources from "@/components/csr/downloadResources/downloadresources";
import Faq from "@/components/acpLouvers/faq/faq";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Error from "@/components/error/error";
import fetchDataSWR from "@/helper/fetchDataSWR";

export default function CSR() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: productBannerData, isError: isErrorProductBannerData } =
    fetchDataSWR("global/banner?slug=aludecor-csr");
  const { fetchdata: faqData, isError: isErrorFaqData } =
    fetchDataSWR("csr/section/faqs");
  const { fetchdata: effortsData, isError: isErrorEffortsData } = fetchDataSWR(
    "csr/section/efforts"
  );
  const { fetchdata: pillarsData, isError: isErrorPillarsData } = fetchDataSWR(
    "csr/section/pillars"
  );
  const { fetchdata: galleryData, isError: isErrorGalleryData } = fetchDataSWR(
    "csr/section/photo-gallery"
  );
  const { fetchdata: activityData, isError: isErrorActivityData } =
    fetchDataSWR("csr/section/activity");
  const { fetchdata: partnerData, isError: isErrorPartnerData } = fetchDataSWR(
    "csr/section/partner"
  );
  const { fetchdata: impactData, isError: isErrorImpactData } = fetchDataSWR(
    "csr/section/our-impact"
  );
  const { fetchdata: clientData, isError: isErrorClient } = fetchDataSWR(
    "home/section/testimonials"
  );
  const { fetchdata: sustainabilityData, isError: isErrorSustainability } =
    fetchDataSWR("csr/section/sustainability");
  const { fetchdata: reportData, isError: isErrorReport } = fetchDataSWR(
    "csr/section/csr-report"
  );

  if (
    isErrorProductBannerData ||
    isErrorFaqData ||
    isErrorEffortsData ||
    isErrorPillarsData ||
    isErrorGalleryData ||
    isErrorActivityData ||
    isErrorPartnerData ||
    isErrorImpactData ||
    isErrorClient ||
    isErrorSustainability ||
    isErrorReport
  ) {
    return <Error />;
  }
  if (
    !productBannerData ||
    !faqData ||
    !effortsData ||
    !pillarsData ||
    !galleryData ||
    !activityData ||
    !partnerData ||
    !impactData ||
    !clientData ||
    !sustainabilityData ||
    !reportData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "CSR"]} />
      <InnerBanner bannerData={productBannerData} />
      <SustainabilityCSR sustainabilityData={sustainabilityData} />
      <Efforts effortsData={effortsData} />
      <Pillars pillarsData={pillarsData} />
      <Gallery galleryData={galleryData} activityData={activityData} />
      <Contactcontent partnerData={partnerData} />
      <OurImpact impactData={impactData} />
      <ClientSays clientDataVal={clientData} />
      <DownloadResources reportData={reportData} />
      <Faq faqData={faqData} />
    </>
  );
}
