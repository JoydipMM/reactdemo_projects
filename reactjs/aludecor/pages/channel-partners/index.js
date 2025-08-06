import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import ExpandBusiness from "@/components/channelPartners/expandBusiness/expandBusiness";
import WhyPartner from "@/components/channelPartners/whyPartner/whyPartner";
import BussGrowth from "@/components/channelPartners/bussGrowth/bussGrowth";
import DealerBenefits from "@/components/channelPartners/dealerBenefits/dealerBenefits";
import ProductPortfolio from "@/components/channelPartners/productPortfolio/productPortfolio";
import Testimonials from "@/components/channelPartners/testimonials/testimonials";
import Faq from "@/components/acpLouvers/faq/faq";
import BecomePartner from "@/components/channelPartners/becomePartner/becomePartner";
import { useState } from "react";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import fetchDataSWR from "@/helper/fetchDataSWR";
import VideoSection from "@/components/designAssist/transformed/videosection";

export default function ChannelPartners() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: introductionData, isError: isErrorIntroductionData } =
    fetchDataSWR("channel-partners/landing/introduction");
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "fabricator/landing/faqs"
  );
  const { fetchdata: featuresData, isError: isErrorFeaturesData } =
    fetchDataSWR("channel-partners/landing/features");
  const { fetchdata: opportunitiesData, isError: isErrorOpportunitiesData } =
    fetchDataSWR("channel-partners/landing/opportunities");
  const { fetchdata: dealerData, isError: isErrorDealerData } = fetchDataSWR(
    "channel-partners/landing/dealer-benefits"
  );
  const { fetchdata: productsData, isError: isErrorProductsData } =
    fetchDataSWR("channel-partners/landing/products");
  const { fetchdata: stepsData, isError: isErrorStepsData } = fetchDataSWR(
    "channel-partners/landing/steps"
  );
  const { fetchdata: videoData, isError: isErrorVideoData } = fetchDataSWR(
    "channel-partners/landing/video-testimonials"
  );

  if (
    isErrorFaqData ||
    isErrorIntroductionData ||
    isErrorFeaturesData ||
    isErrorOpportunitiesData ||
    isErrorDealerData ||
    isErrorProductsData ||
    isErrorStepsData ||
    isErrorVideoData
  ) {
    return <Error />;
  }
  if (
    !faqData ||
    !introductionData ||
    !featuresData ||
    !opportunitiesData ||
    !dealerData ||
    !productsData ||
    !stepsData ||
    !videoData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Channel Partners"]} />
      <ExpandBusiness introductionData={introductionData} />
      <WhyPartner featuresData={featuresData} />
      <BussGrowth opportunitiesData={opportunitiesData} />
      <DealerBenefits dealerData={dealerData} />
      <ProductPortfolio productsData={productsData} />
      <BecomePartner stepsData={stepsData} />
      <VideoSection videoData={videoData} />
      <Faq faqData={faqData} />
    </>
  );
}
