import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Applications from "@/components/nexcomb/applications/applications";
import Concluding from "@/components/nexcomb/concluding/concluding";
import Download from "@/components/nexcomb/download/download";
import Faq from "@/components/acpLouvers/faq/faq";
import Innerbanner from "@/components/downloads/innerbanner/innerbanner";
import Introducing from "@/components/nexcomb/introducing/introducing";
import KeyFeatures from "@/components/nexcomb/keyFeatures/keyFeatures";
import KeyTraits from "@/components/nexcomb/keyTraits/keyTraits";
import Nexcore from "@/components/nexcomb/nexcore/nexcore";
import Shades from "@/components/nexcomb/shades/shades";
import fetchDataSWR from "@/helper/fetchDataSWR";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import { useState } from "react";
import { authLogin } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
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

export default function Nexcomb() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=nexcomb"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "products/nexcomb/faqs"
  );
  const { fetchdata: informationData, isError: isErrorInformationData } =
    fetchDataSWR("products/nexcomb/information");
  const { fetchdata: keyData, isError: isErrorKeyData } = fetchDataSWR(
    "products/nexcomb/key-features"
  );
  const { fetchdata: applicationData, isError: isErrorApplicationData } =
    fetchDataSWR("products/nexcomb/application");
  const { fetchdata: nexcoreData, isError: isErrorNexcoreData } = fetchDataSWR(
    "products/nexcomb/nexcore-section"
  );
  const { fetchdata: concludingData, isError: isErrorConcludingData } =
    fetchDataSWR("products/nexcomb/concluding");
  const { fetchdata: keyTraitsData, isError: isErrorkeyTraitsData } =
    fetchDataSWR("products/nexcomb/key-traits");
  const { fetchdata: brochureData, isError: isErrorBrochuresData } =
    fetchDataSWR("products/nexcomb/brochure");
  const { fetchdata: shadesData, isError: isErrorShadesData } = fetchDataSWR(
    "products/nexcomb/shades"
  );
  if (
    isErrorWhyBannerData ||
    isErrorFaqData ||
    isErrorInformationData ||
    isErrorKeyData ||
    isErrorApplicationData ||
    isErrorNexcoreData ||
    isErrorConcludingData ||
    isErrorkeyTraitsData ||
    isErrorBrochuresData ||
    isErrorShadesData
  ) {
    return <Error />;
  }
  if (
    !bannerData ||
    !faqData ||
    !informationData ||
    !keyData ||
    !applicationData ||
    !nexcoreData ||
    !concludingData ||
    !keyTraitsData ||
    !brochureData ||
    !shadesData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "Nexcomb"]} />
      <Innerbanner bannerData={bannerData} />
      <Introducing informationData={informationData} />
      <KeyFeatures keyData={keyData} />
      <Applications applicationData={applicationData} />
      <Nexcore nexcoreData={nexcoreData} />
      <Shades shadesData={shadesData} />
      <Concluding concludingData={concludingData} />
      <KeyTraits keyTraitsData={keyTraitsData} />
      <Download brochureData={brochureData} session={session} />
      <Faq faqData={faqData} />
    </>
  );
}
