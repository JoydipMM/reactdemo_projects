import { React, useState } from "react";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
// import Innerbanner from "@/components/madeinIndia/innerbanner/innerbanner";
import Commitment from "@/components/madeinIndia/commitment/commitment";
import Indigenous from "@/components/madeinIndia/indigenous/indigenous";
import Quality from "@/components/madeinIndia/quality/quality";
import Sustainable from "@/components/madeinIndia/sustainable/sustainable";
import ClientSays from "@/components/Home/client/client";
import Error from "@/components/error/error";
import fetchDataSWR from "@/helper/fetchDataSWR";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Innerbanner from "@/components/downloads/innerbanner/innerbanner";
// import Faqs from "@/components/fabricationGuide/Faqs/faqs";
import Jointhemovement from "@/components/madeinIndia/jointheMovement/jointheMovement";
import Faq from "@/components/acpLouvers/faq/faq";
import { authLogin } from "../api/auth/[...nextauth]";
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

export default function Madeinindia() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=made-in-india"
  );
  const { fetchdata: informationData, isError: isErrorInformationData } =
    fetchDataSWR("made-in-india/section/information");
  const { fetchdata: indigenousData, isError: isErrorIndigenousData } =
    fetchDataSWR("made-in-india/section/indigenous");
  const { fetchdata: sustainableData, isError: isErrorSustainableData } =
    fetchDataSWR("made-in-india/section/sustainable");
  const { fetchdata: clientData, isError: isErrorClient } = fetchDataSWR(
    "home/section/testimonials"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "made-in-india/section/faqs"
  );
  const { fetchdata: downloadsData, isError: isErrorDownloadsData } =
    fetchDataSWR("made-in-india/section/downloads");
  const { fetchdata: contactData, isError: isErrorContactData } = fetchDataSWR(
    "made-in-india/section/contact"
  );
  if (
    isErrorClient ||
    isErrorFaqData ||
    isErrorContactData ||
    isErrorWhyBannerData ||
    isErrorInformationData ||
    isErrorIndigenousData ||
    isErrorSustainableData ||
    isErrorDownloadsData
  ) {
    return <Error />;
  }
  if (
    !clientData ||
    !faqData ||
    !contactData ||
    !bannerData ||
    !informationData ||
    !indigenousData ||
    !sustainableData ||
    !downloadsData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Made In India"]} />
      <Innerbanner bannerData={bannerData} />
      <Commitment informationData={informationData} />
      <Indigenous indigenousData={indigenousData} />
      <Quality downloadsData={downloadsData} session={session} />
      <Sustainable sustainableData={sustainableData} />
      <ClientSays clientDataVal={clientData} />
      <Jointhemovement contactData={contactData} />
      <Faq faqData={faqData} />
    </>
  );
}
