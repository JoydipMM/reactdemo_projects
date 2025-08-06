import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Guide from "@/components/ProductHandlingGuide/guide/guide";
import Faq from "@/components/acpLouvers/faq/faq";
import NeedHelp from "@/components/fabricationGuide/needHelp/needHelp";
import { useState } from "react";
import fetchDataSWR from "@/helper/fetchDataSWR";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Innerbanner from "@/components/downloads/innerbanner/innerbanner";

export default function ProductHandlingGuide() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: bannerData, isError: isErrorWhyBannerData } = fetchDataSWR(
    "global/banner?slug=product-handling-guide"
  );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "support/product-handling-guide/faq"
  );
  const { fetchdata: helpData, isError: isErrorHelpData } = fetchDataSWR(
    "support/product-handling-guide/help-section"
  );
  const {
    fetchdata: productHandlingData,
    isError: isErrorProductHandlingData
  } = fetchDataSWR("support/product-handling-guide/product-handling");
  if (
    isErrorWhyBannerData ||
    isErrorFaqData ||
    isErrorHelpData ||
    isErrorProductHandlingData
  ) {
    return <Error />;
  }
  if (!bannerData || !faqData || !helpData || !productHandlingData) {
    return <FullScreenLoader isLoading={loading} />;
  }
  return (
    <>
      <Breadcrumb
        pagehierarchy={["Support", "MCPedia", "Product Handling Guide"]}
      />
      <Innerbanner bannerData={bannerData} />
      <Guide productHandlingData={productHandlingData} />
      <NeedHelp ctaData={helpData} />
      <Faq faqData={faqData} />
    </>
  );
}
