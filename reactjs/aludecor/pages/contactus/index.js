import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Contactcontent from "@/components/contactUs/contactContent/contactContent";
import Innerbanner from "@/components/contactUs/innerbanner/innerbanner";
import Location from "@/components/contactUs/location/location";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";

import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function Contactus() {
  const [loading, setLoading] = useState(true);

  const { fetchdata: bannerData, isError: isErrorBannerData } = fetchDataSWR(
    "global/banner?slug=contact"
  );
  const { fetchdata: innerData, isError: isErrorInnerData } = fetchDataSWR(
    "contact/section/contact-info"
  );
  const { fetchdata: locationData, isError: isErrorLocationData } =
    fetchDataSWR("contact/section/offices");
  if (!bannerData || !innerData || !locationData) {
    return <FullScreenLoader isLoading={loading} />;
  }
  if (isErrorBannerData || isErrorInnerData || isErrorLocationData) {
    return <Error />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Contact Us"]} />
      <Innerbanner bannerData={bannerData} />
      <Contactcontent innerData={innerData} />
      <Location locationData={locationData} />
    </>
  );
}
