import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Achivement from "@/components/recognition/achivement/achivement";
import Certificates from "@/components/recognition/certificates/certificates";
import Innerbanner from "@/components/downloads/innerbanner/innerbanner";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";
import { getServerSession } from "next-auth";
import { authLogin } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authLogin);
  if (!session) {
    return {
      props: {}
    };
  }

  return {
    props: { session }
  };
}

export default function Recognition() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=recognition"
  );
  const { fetchdata: downloadData, isError: isErrorDownloadsData } =
    fetchDataSWR("recognition/section/downloads");
  const { fetchdata: achievementsData, isError: isErrorAchievementsData } =
    fetchDataSWR("recognition/section/achievements");

  if (isErrorWhyBannerData || isErrorDownloadsData || isErrorAchievementsData) {
    return <Error />;
  }
  if (!bannerData || !downloadData || !achievementsData) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Resources"]} />
      <Innerbanner bannerData={bannerData} />
      <Certificates downloadData={downloadData} session={session} />
      <Achivement achievementsData={achievementsData} />
    </>
  );
}
