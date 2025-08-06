import ExploreType from "@/components/Bim/explore-vid/explore";
import ProductType from "@/components/Bim/product-type/producttpe";
import Video from "@/components/Bim/video/video";
import Welcome from "@/components/Bim/welcome/welcome";
import NeedKnow from "@/components/Bim/need-to-know/need";
import RealSuccess from "@/components/Bim/real-success/real";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import InnerBannerBim from "@/components/Bim/innerbanner/innerbanner";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Error from "@/components/error/error";
import { useState } from "react";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { authLogin } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authLogin);
  //console.log("sesssssssssss", session);
  if (!session) {
    return {
      props: {}
    };
  }

  return {
    props: { session }
  };
}

export default function Bim() {
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(true);
  const { fetchdata: bimBannerData, isError: isErrorBimBanner } = fetchDataSWR(
    "solutions/bim/banner-section/"
  );
  const {
    fetchdata: buildingInformationData,
    isError: isErrorBuildingInformation
  } = fetchDataSWR("solutions/bim/building-information");
  const { fetchdata: videoData, isError: isErrorVideo } = fetchDataSWR(
    "solutions/bim/video"
  );
  const { fetchdata: faqData, isError: isErrorFaq } =
    fetchDataSWR("solutions/bim/faq");
  const { fetchdata: projectsData, isError: isErrorProjectsData } =
    fetchDataSWR("solutions/bim/projects");
  const { fetchdata: bimFilterData, isError: isErrorBimFilterData } =
    fetchDataSWR("solutions/bim/filter-presets");

  if (
    isErrorBimBanner ||
    isErrorBuildingInformation ||
    isErrorVideo ||
    isErrorFaq ||
    isErrorProjectsData ||
    isErrorBimFilterData
  ) {
    return <Error />;
  }
  if (
    !bimBannerData ||
    !buildingInformationData ||
    !videoData ||
    !faqData ||
    !projectsData ||
    !bimFilterData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Solutions", "BIM"]} />
      <InnerBannerBim bimBannerData={bimBannerData} />
      <Welcome buildingInformationData={buildingInformationData} />
      <Video buildingInformationData={buildingInformationData} />
      <ProductType bimFilterData={bimFilterData} session={session} />
      <ExploreType videoData={videoData} />
      <NeedKnow faqData={faqData} />
      <RealSuccess projectsData={projectsData} />
    </>
  );
}
