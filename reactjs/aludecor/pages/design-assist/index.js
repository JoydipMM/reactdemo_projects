import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import HowAludecor from "@/components/designAssist/howAludecor/howAludecor";
import Questions from "@/components/designAssist/questions/questions";

import Transformed from "@/components/designAssist/transformed/transformed";

import TransformVision from "@/components/designAssist/transformVision/transformVision";

import Visualize from "@/components/designAssist/visualize/visualize";
import WhyChoose from "@/components/designAssist/whyChoose/whyChoose";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Faq from "@/components/acpLouvers/faq/faq";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";
import VideoSection from "@/components/designAssist/transformed/videosection";

export default function DesignAssist() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: formContentData, isError: isErrorFormContentData } =
    fetchDataSWR("design-assist/section/form");
  const { fetchdata: strugglingData, isError: isErrorStrugglingData } =
    fetchDataSWR("design-assist/section/struggling");
  const { fetchdata: assistData, isError: isErrorAssistData } = fetchDataSWR(
    "design-assist/section/assist-works"
  );
  const { fetchdata: whyChooseData, isError: isErrorWhyChooseData } =
    fetchDataSWR("design-assist/section/why-choose");
  const { fetchdata: transformData, isError: isErrorTransformData } =
    fetchDataSWR("design-assist/section/transform-project");
  const { fetchdata: videoData, isError: isErrorVideoData } = fetchDataSWR(
    "design-assist/section/video-testimonial"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "design-assist/section/faqs"
  );
  if (
    isErrorFormContentData ||
    isErrorStrugglingData ||
    isErrorAssistData ||
    isErrorWhyChooseData ||
    isErrorFaqData ||
    isErrorTransformData ||
    isErrorVideoData
  ) {
    return <Error />;
  }
  if (
    !formContentData ||
    !strugglingData ||
    !assistData ||
    !whyChooseData ||
    !faqData ||
    !videoData ||
    !transformData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Design Assist"]} />
      <TransformVision formContentData={formContentData} />
      <Visualize strugglingData={strugglingData} />
      <HowAludecor assistData={assistData} />
      <WhyChoose whyChooseData={whyChooseData} />
      <Transformed transformData={transformData} />
      <VideoSection videoData={videoData} />
      <Faq faqData={faqData} />
    </>
  );
}
