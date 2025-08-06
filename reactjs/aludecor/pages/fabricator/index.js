import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import Download from "@/components/Fabricator/download/download";
// import Exploreproducts from "@/components/Fabricator/exploreProducts/exploreProducts";
import Fabricatorservices from "@/components/Fabricator/fabricatorServices/fabricatorServices";
import Innerbanner from "@/components/Fabricator/innerbanner/innerbanner";
import Joinfabricator from "@/components/Fabricator/joinFabricator/joinFabricator";
import Whypartner from "@/components/Fabricator/whyPartner/whyPartner";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import DesignSpace from "@/components/Home/designSpace/designSpace";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";
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

export default function Fabricator() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  const { fetchdata: bannerData, isError: isErrorBannerData } = fetchDataSWR(
    "global/banner?slug=contact"
  );
  const { fetchdata: innerData, isError: isErrorInnerData } = fetchDataSWR(
    "contact/section/contact-info"
  );
  const { fetchdata: locationData, isError: isErrorLocationData } =
    fetchDataSWR("contact/section/offices");
  const { fetchdata: fabIntroData, isError: isErrorFabIntroData } =
    fetchDataSWR("fabricator/introduction-section");
  const { fetchdata: partnerData, isError: isErrorPartnerData } = fetchDataSWR(
    "fabricator/partner-section"
  );
  const { fetchdata: serviceData, isError: isErrorServiceData } = fetchDataSWR(
    "fabricator/service-section"
  );
  const { fetchdata: productListingData, isError: isErrorProductListing } =
    fetchDataSWR("home/section/product-listing");
  const { fetchdata: lastSectionData, isError: isErrorLastSection } =
    fetchDataSWR("fabricator/last-section");

  if (
    isErrorBannerData ||
    isErrorInnerData ||
    isErrorLocationData ||
    isErrorFabIntroData ||
    isErrorPartnerData ||
    isErrorServiceData ||
    isErrorProductListing ||
    isErrorLastSection
  ) {
    return <Error />;
  }

  if (
    !bannerData ||
    !innerData ||
    !locationData ||
    !partnerData ||
    !productListingData ||
    !lastSectionData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Fabricators"]} />
      <Innerbanner bannerData={bannerData} />
      <Joinfabricator fabIntroData={fabIntroData} />
      <Whypartner partnerData={partnerData} />
      <Fabricatorservices serviceData={serviceData} />
      <DesignSpace productListingData={productListingData} />
      <Download lastSectionData={lastSectionData} session={session} />
    </>
  );
}
