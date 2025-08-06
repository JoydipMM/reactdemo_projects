import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import { React, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tools from "@/components/Home/tools/tools";
import Innerbanner from "@/components/resources/innerbanner/innerbanner";
import fetchDataSWR from "@/helper/fetchDataSWR";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Resourcescontent from "@/components/resources/resourcescontent/resourcescontent";
import Stay from "@/components/Home/stayInformed/stay";
import Press from "@/components/resources/press/press";
import Ourimpact from "@/components/resources/ourImpact/ourImpact";

export default function Resources() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);
  const { fetchdata: bannerData, isError: isErrorBannerData } = fetchDataSWR(
    "global/banner?slug=resources"
  );
  const { fetchdata: toolData, isError: isErrorTool } =
    fetchDataSWR("global/tools");
  const { fetchdata: stayData, isError: isErrorStay } = fetchDataSWR(
    "home/section/stay-informed"
  );
  const { fetchdata: resourceInfoData, isError: isErrorResourseInfo } =
    fetchDataSWR("resource/section/resource-info");
  const { fetchdata: ourImpactData, isError: isErrorOurImpact } = fetchDataSWR(
    "resource/section/our-impact"
  );
  const { fetchdata: pressData, isError: isErrorPress } = fetchDataSWR(
    "resource/section/press"
  );
  if (
    !bannerData ||
    !toolData ||
    !stayData ||
    !resourceInfoData ||
    !ourImpactData ||
    !pressData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  if (
    isErrorTool ||
    isErrorStay ||
    isErrorBannerData ||
    isErrorResourseInfo ||
    isErrorOurImpact ||
    isErrorPress
  ) {
    return <>Error loading data.</>;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Resources"]} />
      <Innerbanner bannerData={bannerData} />
      <Tools toolDataVal={toolData} />
      <Resourcescontent resourceInfoData={resourceInfoData} />
      <Ourimpact ourImpactData={ourImpactData} />
      <Stay stayData={stayData} />
      <Press pressData={pressData} />
    </>
  );
}
