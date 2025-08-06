import Layout from "@/components/layout";
import FilterPrd from "@/components/Projectsgallery/filter-product/filterprd";
import Innerbanner from "@/components/Projectsgallery/innerbanner/innerbanner";
import ReadyWork from "@/components/Projectsgallery/ready-work/ready";
import Bradecumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function Projectsgallery() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: galleryBannerData, isError: isErrorgalleryBanner } =
    fetchDataSWR("global/banner?slug=project-gallery");
  const { fetchdata: allFilterTabData, isError: isErrorAllFilterTabData } =
    fetchDataSWR("project/filter/preset");
  const {
    fetchdata: allAdvertisementData,
    isError: isErrorAllAdvertisementData
  } = fetchDataSWR("project/filter/advertisement");
  if (!galleryBannerData || !allFilterTabData || !allAdvertisementData) {
    return <FullScreenLoader isLoading={loading} />;
  }
  if (
    isErrorgalleryBanner ||
    isErrorAllFilterTabData ||
    isErrorAllAdvertisementData
  ) {
    return <Error />;
  }
  return (
    <>
      <Bradecumb pagehierarchy={["Solutions", "Projects Gallery"]} />
      <Innerbanner galleryBannerData={galleryBannerData} />
      <FilterPrd allFilterTabData={allFilterTabData} />
      <ReadyWork allAdvertisementData={allAdvertisementData} />
    </>
  );
}
