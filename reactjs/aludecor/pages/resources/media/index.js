import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Innerbanner from "@/components/resourcesMedia/innerbanner/innerbanner";
import MediaKit from "@/components/resourcesMedia/mediaKit/mediaKit";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function Media() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=recognition"
  );
  const { fetchdata: mediaFilterData, isError: isErrorMediaFilterData } =
    fetchDataSWR("media/filter/preset");

  if (isErrorWhyBannerData || isErrorMediaFilterData) {
    return <Error />;
  }
  if (!bannerData || !mediaFilterData) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Resources", "Media"]} />
      <Innerbanner />
      <MediaKit mediaFilterData={mediaFilterData} />
    </>
  );
}
