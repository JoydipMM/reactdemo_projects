import { useState } from "react";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Innerbanner from "@/components/downloads/innerbanner/innerbanner";
import NeedHelp from "@/components/downloads/needHelp/needHelp";
import Whatyouneed from "@/components/downloads/whatYouneed/whatYouneed";
import fetchDataSWR from "@/helper/fetchDataSWR";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Error from "@/components/error/error";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authLogin } from "../api/auth/[...nextauth]";

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

export default function Downloads() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=downloads"
  );
  const { fetchdata: downloadData, isError: isErrorDownloadsData } =
    fetchDataSWR("downloads/section/downloads");
  const { fetchdata: helpData, isError: isErrorHelpData } = fetchDataSWR(
    "downloads/section/need-help"
  );

  if (isErrorWhyBannerData || isErrorHelpData || isErrorDownloadsData) {
    return <Error />;
  }
  if (!bannerData || !helpData || !downloadData) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Downloads"]} />
      <Innerbanner bannerData={bannerData} />
      <Whatyouneed downloadData={downloadData} session={session} />
      <NeedHelp helpData={helpData} />
    </>
  );
}
