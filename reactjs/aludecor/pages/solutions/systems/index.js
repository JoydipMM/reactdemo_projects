import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Advantages from "@/components/Solutionssystems/advantages/advantages";
import Innerbanner from "@/components/Solutionssystems/innerbanner/innerbanner";
import Projectgallery from "@/components/Solutionssystems/projectgallery/projectgallery";
import Solutionvtab from "@/components/Solutionssystems/solutionvtab-choose/solutionvtab";
import Systemcontent from "@/components/Solutionssystems/systemcontent/systemcontent";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function Systems() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: systemBannerData, isError: isErrorSystemBanner } =
    fetchDataSWR("alusystem/section/banner");
  const { fetchdata: systemKeypointData, isError: isErrorSystemKeypoint } =
    fetchDataSWR("alusystem/section/keypoints");
  const { fetchdata: systemProductData, isError: isErrorSystemProduct } =
    fetchDataSWR("alusystem/section/product-info");
  const { fetchdata: systemAdvantageData, isError: isErrorAdvantageData } =
    fetchDataSWR("alusystem/section/highlights");

  if (
    !systemBannerData ||
    !systemKeypointData ||
    !systemProductData ||
    !systemAdvantageData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  if (
    isErrorSystemBanner ||
    isErrorSystemKeypoint ||
    isErrorSystemProduct ||
    isErrorAdvantageData
  ) {
    return <>Error loading data.</>;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Solutions", "Aludecor Systems"]} />
      <Innerbanner systemBannerData={systemBannerData} />
      <Solutionvtab systemKeypointData={systemKeypointData} />
      <Systemcontent systemProductData={systemProductData} />
      <Advantages systemAdvantageData={systemAdvantageData} />
      <Projectgallery />
    </>
  );
}
