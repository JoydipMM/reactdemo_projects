import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import BuildingEvolve from "@/components/copperCompositePanels/buildingEvolve/buildingEvolve";
import CaseStudies from "@/components/sustainabilityAludecor/caseStudies/caseStudies";
import Certification from "@/components/residentialSolutions/certification/certification";
import CorePhilosophy from "@/components/sustainabilityAludecor/corePhilosophy/corePhilosophy";
import InnerBanner from "@/components/copperCompositePanels/innerbanner/innerbanner";
import Leadership from "@/components/sustainabilityAludecor/leadership/leadership";
import OurImpact from "@/components/sustainabilityAludecor/ourImpact/ourImpact";
import OurPanels from "@/components/sustainabilityAludecor/ourPanels/ourPanels";
import ProductPortfolio from "@/components/sustainabilityAludecor/productPortfolio/productPortfolio";
import WhatMakes from "@/components/sustainabilityAludecor/whatMakes/whatMakes";
import { useState } from "react";
import fetchDataSWR from "@/helper/fetchDataSWR";
import Faq from "@/components/acpLouvers/faq/faq";
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

export default function Sustainability() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=sustainability"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "brands/sustainability/faq"
  );
  const { fetchdata: certificateData, isError: isErrorCertificateData } =
    fetchDataSWR("brands/sustainability/certificates");
  const { fetchdata: introductionData, isError: isErrorIntroductionData } =
    fetchDataSWR("brands/sustainability/introduction-section");
  const { fetchdata: helpData, isError: isErrorHelpData } = fetchDataSWR(
    "brands/sustainability/help-section"
  );
  const { fetchdata: caseData, isError: isErrorCaseData } = fetchDataSWR(
    "brands/sustainability/case-studies"
  );
  const { fetchdata: portfolioData, isError: isErrorPortfolioData } =
    fetchDataSWR("brands/sustainability/portfolio");
  const { fetchdata: numbersData, isError: isErrorNumbersData } = fetchDataSWR(
    "brands/sustainability/numbers"
  );
  const { fetchdata: leadershipData, isError: isErrorLeadershipData } =
    fetchDataSWR("brands/sustainability/leadership");
  const { fetchdata: materialsData, isError: isErrorMaterialspData } =
    fetchDataSWR("brands/sustainability/materials");
  const { fetchdata: ctaSectionData, isError: isErrorCtaSectionData } =
    fetchDataSWR("brands/sustainability/cta-section");
  if (
    isErrorWhyBannerData ||
    isErrorFaqData ||
    isErrorCertificateData ||
    isErrorIntroductionData ||
    isErrorHelpData ||
    isErrorCaseData ||
    isErrorPortfolioData ||
    isErrorNumbersData ||
    isErrorLeadershipData ||
    isErrorMaterialspData ||
    isErrorCtaSectionData
  ) {
    return <Error />;
  }
  if (
    !bannerData ||
    !faqData ||
    !certificateData ||
    !introductionData ||
    !helpData ||
    !caseData ||
    !portfolioData ||
    !numbersData ||
    !leadershipData ||
    !materialsData ||
    !ctaSectionData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Brands", "Sustainability"]} />
      <InnerBanner bannerData={bannerData} />
      <CorePhilosophy introductionData={introductionData} />
      <WhatMakes materialsData={materialsData} />
      <ProductPortfolio portfolioData={portfolioData} />
      <OurImpact numbersData={numbersData} />
      <Certification certificateData={certificateData} />
      <OurPanels helpData={helpData} />
      <CaseStudies caseData={caseData} />
      <Leadership leadershipData={leadershipData} />
      <BuildingEvolve ctaSectionData={ctaSectionData} session={session} />
      <Faq faqData={faqData} />
    </>
  );
}
