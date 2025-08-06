import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Innerbanner from "@/components/downloads/innerbanner/innerbanner";
// import Innerbanner from "@/components/manufacturingUnit/innerbanner/innerbanner";
import Facilities from "@/components/manufacturingUnit/facilities/facilities";
import Process from "@/components/manufacturingUnit/process/process";
import QualityAssurance from "@/components/manufacturingUnit/qualityassurance/quality";
import Innovations from "@/components/manufacturingUnit/innovations/innovations";
import Sustainability from "@/components/manufacturingUnit/sustainability/sustainability";
import Video from "@/components/manufacturingUnit/video/video";
import Manufacturing from "@/components/manufacturingUnit/manufacturing/manufacturing";
import Gallery from "@/components/manufacturingUnit/gallery/gallery";
import Faq from "@/components/acpLouvers/faq/faq";

import { useState } from "react";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Error from "@/components/error/error";
import fetchDataSWR from "@/helper/fetchDataSWR";

export default function ManufacturingUnit() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=manufacturing-unit"
  );
  const { fetchdata: descriptionData, isError: isErrorDescriptionData } =
    fetchDataSWR("brands/manufacturing-unit/description-section");
  const { fetchdata: innovationsData, isError: isErrorInnovationsData } =
    fetchDataSWR("brands/manufacturing-unit/innovations-section");
  const { fetchdata: qualityData, isError: isErrorQualityData } = fetchDataSWR(
    "brands/manufacturing-unit/quality-section"
  );
  const { fetchdata: exploreData, isError: isErrorExploreData } = fetchDataSWR(
    "brands/manufacturing-unit/explore-sustainable-section"
  );
  const {
    fetchdata: exManufacturingData,
    isError: isErrorExManufacturingData
  } = fetchDataSWR("brands/manufacturing-unit/explore-manufacturing-section");
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "brands/manufacturing-unit/faq"
  );
  const { fetchdata: galleryData, isError: isErrorGalleryData } = fetchDataSWR(
    "brands/manufacturing-unit/our-gallery"
  );
  const { fetchdata: manufacturingData, isError: isErrorManufacturingData } =
    fetchDataSWR("brands/manufacturing-unit/manufacturing-process");
  const { fetchdata: exploreBimData, isError: isErrorExploreBimData } =
    fetchDataSWR("brands/manufacturing-unit/explore-bim-section");

  if (
    isErrorWhyBannerData ||
    isErrorFaqData ||
    isErrorDescriptionData ||
    isErrorManufacturingData ||
    isErrorInnovationsData ||
    isErrorQualityData ||
    isErrorExploreData ||
    isErrorExManufacturingData ||
    isErrorGalleryData ||
    isErrorExploreBimData
  ) {
    return <Error />;
  }
  if (
    !bannerData ||
    !faqData ||
    !descriptionData ||
    !manufacturingData ||
    !innovationsData ||
    !qualityData ||
    !exploreData ||
    !exManufacturingData ||
    !galleryData ||
    !exploreBimData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["About us", "Manufacturing Unit"]} />
      <Innerbanner bannerData={bannerData} />
      <Facilities descriptionData={descriptionData} />
      <Process manufacturingData={manufacturingData} />
      <QualityAssurance qualityData={qualityData} />
      <Innovations innovationsData={innovationsData} />
      <Sustainability exploreData={exploreData} />
      <Video exploreBimData={exploreBimData} />
      <Manufacturing exManufacturingData={exManufacturingData} />
      <Gallery galleryData={galleryData} />
      <Faq faqData={faqData} />
    </>
  );
}
