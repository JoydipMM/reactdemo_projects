import Faq from "@/components/acpLouvers/faq/faq";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Applications from "@/components/copperCompositePanels/applications/applications";
import BuildingEvolve from "@/components/copperCompositePanels/buildingEvolve/buildingEvolve";
import Certification from "@/components/residentialSolutions/certification/certification";
import Comparison from "@/components/copperCompositePanels/comparison/comparison";
import Composition from "@/components/copperCompositePanels/composition/composition";
import Design from "@/components/copperCompositePanels/design/design";
import EcoFriendly from "@/components/copperCompositePanels/ecoFriendly/ecoFriendly";
import Features from "@/components/copperCompositePanels/features/features";
import InnerBanner from "@/components/copperCompositePanels/innerbanner/innerbanner";
import NaturalCopper from "@/components/copperCompositePanels/naturalCopper/naturalCopper";
import ProjectShowcase from "@/components/copperCompositePanels/projectShowcase/projectShowcase";
import ShadeVariants from "@/components/copperCompositePanels/shadeVariants/shadeVariants";
import WhyChoose from "@/components/copperCompositePanels/whyChoose/whyChoose";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authLogin } from "@/pages/api/auth/[...nextauth]";

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

export default function CopperCompositePanels() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const { fetchdata: designData, isError: isErrorDesignBanner } = fetchDataSWR(
    "products/copper-composite-panel/design-section"
  );
  const { fetchdata: whyChooseData, isError: isErrorWhyChooseData } =
    fetchDataSWR("products/copper-composite-panel/why-choose-section");
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=copper-composite-panels"
  );
  const { fetchdata: materialData, isError: isErrorMaterialData } =
    fetchDataSWR("products/copper-composite-panel/material-section");
  const { fetchdata: evolutionData, isError: isErrorEvolutionData } =
    fetchDataSWR("products/copper-composite-panel/copper-evolution-section");
  const { fetchdata: certificateData, isError: isErrorCertificateData } =
    fetchDataSWR("products/copper-composite-panel/certificate-section");
  const { fetchdata: shadesData, isError: isErrorShadesData } = fetchDataSWR(
    "products/copper-composite-panel/shades-section"
  );
  const { fetchdata: projectShowcaseData, isError: isErrorProjectShowcase } =
    fetchDataSWR("products/copper-composite-panel/showcase-project");
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "products/copper-composite-panel/faq"
  );
  const { fetchdata: applicationData, isError: isErrorApplicationData } =
    fetchDataSWR("products/copper-composite-panel/application-section");
  const { fetchdata: benefitsData, isError: isErrorBenefitsData } =
    fetchDataSWR("products/copper-composite-panel/benefits-section");
  const { fetchdata: ecoFriendlyData, isError: isErroEcoFriendlyData } =
    fetchDataSWR("products/copper-composite-panel/eco-friendly-section");
  const { fetchdata: comparisonData, isError: isErrorcomparisonData } =
    fetchDataSWR("products/copper-composite-panel/comparison-section");
  const { fetchdata: ctaSectionData, isError: isErrorCtaSectionData } =
    fetchDataSWR("products/copper-composite-panel/cta-section");
  if (
    isErrorDesignBanner ||
    isErrorWhyChooseData ||
    isErrorWhyBannerData ||
    isErrorMaterialData ||
    isErrorEvolutionData ||
    isErrorCertificateData ||
    isErrorShadesData ||
    isErrorFaqData ||
    isErrorProjectShowcase ||
    isErrorApplicationData ||
    isErrorBenefitsData ||
    isErroEcoFriendlyData ||
    isErrorcomparisonData ||
    isErrorCtaSectionData
  ) {
    return <Error />;
  }
  if (
    !designData ||
    !whyChooseData ||
    !bannerData ||
    !materialData ||
    !evolutionData ||
    !certificateData ||
    !shadesData ||
    !faqData ||
    !projectShowcaseData ||
    !applicationData ||
    !benefitsData ||
    !ecoFriendlyData ||
    !comparisonData ||
    !ctaSectionData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "Copper Composite Panels"]} />
      <InnerBanner bannerData={bannerData} session={session} />
      <Design designData={designData} />
      <WhyChoose whyChooseData={whyChooseData} />
      <Composition materialData={materialData} />
      <NaturalCopper evolutionData={evolutionData} />
      <Applications applicationData={applicationData} />
      <Features benefitsData={benefitsData} />
      <EcoFriendly ecoFriendlyData={ecoFriendlyData} />
      <Comparison comparisonData={comparisonData} />
      <Certification certificateData={certificateData} />
      <ShadeVariants shadesData={shadesData} />
      <ProjectShowcase projectShowcaseData={projectShowcaseData} />
      <BuildingEvolve ctaSectionData={ctaSectionData} session={session} />
      <Faq faqData={faqData} />
    </>
  );
}
