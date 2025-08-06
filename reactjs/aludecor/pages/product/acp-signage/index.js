import Amplify from "@/components/acpSignage/amplify/amplify";
import ApplicationTypes from "@/components/acpSignage/applicationTypes/applicationTypes";
import BuiltImpact from "@/components/acpSignage/builtImpact/builtImpact";
import CreateBold from "@/components/acpSignage/createBold/createBold";
import DigitalAge from "@/components/acpSignage/digitalAge/digitalAge";
import DigitalInnovation from "@/components/acpSignage/digitalInnovation/digitalInnovation";
import Faq from "@/components/acpLouvers/faq/faq";
import InnerBanner from "@/components/copperCompositePanels/innerbanner/innerbanner";
import Quality from "@/components/acpSignage/quality/quality";
import RealProjects from "@/components/acpSignage/realProjects/realProjects";
import WhatsNew from "@/components/acpSignage/whatsNew/whatsNew";
import WhyChoose from "@/components/acpSignage/whyChoose/whyChoose";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import ChooseFirewall from "@/components/fireWall/chooseFirewall/choosefirewall";
import BuildingEvolve from "@/components/copperCompositePanels/buildingEvolve/buildingEvolve";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Error from "@/components/error/error";
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

export default function AcpSignage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorBannerData } = fetchDataSWR(
    "global/banner?slug=acp-signage"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "products/acp-signage/faq"
  );
  const { fetchdata: advertisementData, isError: isErrordvertisementData } =
    fetchDataSWR("products/acp-signage/cta-section");
  const { fetchdata: descriptionData, isError: isErrorDescriptionData } =
    fetchDataSWR("products/acp-signage/description-section");
  const { fetchdata: whyData, isError: isErrorWhyData } = fetchDataSWR(
    "products/acp-signage/why-choose-section"
  );
  const { fetchdata: whyNewData, isError: isErrorWhyNewData } = fetchDataSWR(
    "products/acp-signage/whats-new"
  );
  const { fetchdata: signexData, isError: isErrorSignexData } = fetchDataSWR(
    "products/acp-signage/signex"
  );
  const { fetchdata: samplifyData, isError: isErrorAmplifyData } = fetchDataSWR(
    "products/acp-signage/amplify"
  );
  const { fetchdata: applicationData, isError: isErrorApplicationData } =
    fetchDataSWR("products/acp-signage/application");
  const { fetchdata: innovationData, isError: isErrorInnovationData } =
    fetchDataSWR("products/acp-signage/innovation");
  const { fetchdata: galleryData, isError: isErrorGalleryData } = fetchDataSWR(
    "products/acp-signage/project-gallery"
  );
  const { fetchdata: qualityData, isError: isErrorQualityData } = fetchDataSWR(
    "products/acp-signage/quality"
  );

  if (
    isErrorBannerData ||
    isErrorFaqData ||
    isErrordvertisementData ||
    isErrorDescriptionData ||
    isErrorWhyData ||
    isErrorWhyNewData ||
    isErrorSignexData ||
    isErrorAmplifyData ||
    isErrorApplicationData ||
    isErrorInnovationData ||
    isErrorQualityData ||
    isErrorGalleryData
  ) {
    return <Error />;
  }
  if (
    !bannerData ||
    !faqData ||
    !advertisementData ||
    !descriptionData ||
    !whyData ||
    !whyNewData ||
    !signexData ||
    !samplifyData ||
    !applicationData ||
    !innovationData ||
    !galleryData ||
    !qualityData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb
        pagehierarchy={["Product", "ACP Signage | SignEx by Aludecor"]}
      />
      <InnerBanner bannerData={bannerData} />
      <DigitalAge descriptionData={descriptionData} />
      <WhyChoose whyData={whyData} />
      <WhatsNew whyNewData={whyNewData} />
      <BuiltImpact signexData={signexData} />
      <Amplify samplifyData={samplifyData} />
      <ApplicationTypes applicationData={applicationData} />
      <DigitalInnovation innovationData={innovationData} />
      <RealProjects galleryData={galleryData} />
      <Quality qualityData={qualityData} />
      {/* <CreateBold /> */}
      <BuildingEvolve ctaSectionData={advertisementData} session={session} />
      <Faq faqData={faqData} />
    </>
  );
}
