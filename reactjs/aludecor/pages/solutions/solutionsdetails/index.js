import Bradecumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Banner from "@/components/Solutionsdetails/banner/banner";
import Casestudy from "@/components/Solutionsdetails/casestudy/casestudy";
import Relevantprojects from "@/components/Solutionsdetails/relevantprojects/relevantprojects";
import Solutiondetailscontent from "@/components/Solutionsdetails/solutiondetailscontent/solutiondetailscontent";
import Solutions from "@/components/Solutionsdetails/solutions/solutions";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Solutionsdetails() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { project_slug } = router.query;
  // Check if product_id is missing or null
  if (!project_slug) {
    return <Error />;
  }
  const { fetchdata: bannerData, isError: isErrorBannerData } = fetchDataSWR(
    project_slug ? `project/banner?project_slug=${project_slug}` : null
  );
  const { fetchdata: highlightData, isError: isErrorHighlightData } =
    fetchDataSWR(
      project_slug ? `project/highlights?project_slug=${project_slug}` : null
    );
  const { fetchdata: tabHighlightData, isError: isErrorTabHighlightData } =
    fetchDataSWR(
      project_slug
        ? `project/tab-highlights?project_slug=${project_slug}`
        : null
    );
  const { fetchdata: transformatingData, isError: isErrorTransformatingData } =
    fetchDataSWR(
      project_slug ? `project/transforming?project_slug=${project_slug}` : null
    );
  const { fetchdata: relProjectData, isError: isErrorRelProjectData } =
    fetchDataSWR(
      project_slug
        ? `project/related-projects?project_slug=${project_slug}`
        : null
    );
  const { fetchdata: contactCtaData, isError: isErrorContactCtaData } =
    fetchDataSWR(`project/contacct-cta`);
  if (
    isErrorBannerData ||
    isErrorHighlightData ||
    isErrorTabHighlightData ||
    isErrorTransformatingData ||
    isErrorRelProjectData ||
    isErrorContactCtaData
  ) {
    return <Error />;
  }
  if (
    !bannerData ||
    !highlightData ||
    !tabHighlightData ||
    !transformatingData ||
    !relProjectData ||
    !contactCtaData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Bradecumb pagehierarchy={["Project", "Projectdetails"]} />
      <Banner bannerData={bannerData} />
      <Casestudy
        highlightData={highlightData}
        contactCtaData={contactCtaData}
      />
      <Solutions tabHighlightData={tabHighlightData} />
      <Relevantprojects relProjectData={relProjectData} />
      <Solutiondetailscontent transformatingData={transformatingData} />
    </>
  );
}
