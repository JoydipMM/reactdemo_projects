import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Contactcontent from "@/components/contactUs/contactContent/contactContent";
import Location from "@/components/contactUs/location/location";
import Innerbanner from "@/components/downloads/innerbanner/innerbanner";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
// import Innerbanner from "@/components/managementProfile/innerbanner/innerbanner";
import Ourcmd from "@/components/managementProfile/ourcmd/ourcmd";
import Ourteam from "@/components/managementProfile/ourteam/ourteam";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function Managementprofile() {
  const [loading, setLoading] = useState(true);

  const { fetchdata: bannerData, isError: isErrorBannerData } = fetchDataSWR(
    "global/banner?slug=management-profile"
  );
  const { fetchdata: innerData, isError: isErrorInnerData } = fetchDataSWR(
    "management-profile/section/profile"
  );
  const { fetchdata: teamData, isError: isErrorTeamData } = fetchDataSWR(
    "management-profile/section/our-team"
  );
  if (!bannerData || !innerData || !teamData) {
    return <FullScreenLoader isLoading={loading} />;
  }
  if (isErrorBannerData || isErrorInnerData || isErrorTeamData) {
    return <Error />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Management Profile"]} />
      <Innerbanner bannerData={bannerData} />
      <Ourcmd innerData={innerData} />
      <Ourteam teamData={teamData} />
    </>
  );
}
