import { useState } from "react";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Innerbanner from "@/components/downloads/innerbanner/innerbanner";
import EarlyLife from "@/components/ourCMD/earlylife/earlylife";
import Manufacturing from "@/components/ourCMD/manufacturing/manufacturing";
import Industry from "@/components/ourCMD/industry/industry";
import Quality from "@/components/ourCMD/quality/quality";
import Video from "@/components/ourCMD/video/video";
import ExploreType from "@/components/Bim/explore-vid/explore";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Error from "@/components/error/error";
import fetchDataSWR from "@/helper/fetchDataSWR";

export default function OurCMDPage() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=our-cmd"
  );
  const { fetchdata: descriptionData, isError: isErrorDescriptionData } =
    fetchDataSWR("brands/our-cmd/description-section");

  const { fetchdata: manufacturingData, isError: isErrorManufacturingData } =
    fetchDataSWR("brands/our-cmd/manufacturing-section");
  const { fetchdata: qualityData, isError: isErrorQualityData } = fetchDataSWR(
    "brands/our-cmd/quality-section"
  );
  const { fetchdata: industryData, isError: isErrorIndustryData } =
    fetchDataSWR("brands/our-cmd/industry-section");
  const { fetchdata: aspirationsData, isError: isErrorAspirationsData } =
    fetchDataSWR("brands/our-cmd/aspirations-section");
  const { fetchdata: videoData, isError: isErrorVideo } = fetchDataSWR(
    "brands/our-cmd/video-section"
  );

  if (
    isErrorWhyBannerData ||
    isErrorDescriptionData ||
    isErrorManufacturingData ||
    isErrorQualityData ||
    isErrorIndustryData ||
    isErrorAspirationsData ||
    isErrorVideo
  ) {
    return <Error />;
  }
  if (
    !bannerData ||
    !descriptionData ||
    !manufacturingData ||
    !qualityData ||
    !aspirationsData ||
    !industryData ||
    !videoData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["About us", "About Our CMD"]} />
      <Innerbanner bannerData={bannerData} />
      <EarlyLife descriptionData={descriptionData} />
      <Manufacturing manufacturingData={manufacturingData} />
      <Quality qualityData={qualityData} />
      <Industry aspirationsData={aspirationsData} industryData={industryData} />
      {/* <Video /> */}
      <ExploreType videoData={videoData} page={"cmd"} />
      <div className="topadding_top"></div>
    </>
  );
}
