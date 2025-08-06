import { useState, lazy, Suspense } from "react";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import fetchDataSWR from "@/helper/fetchDataSWR";
import SectionLoader from "@/components/SectionLoader/SectionLoader";

// Lazy load all components
const Productsteps = lazy(
  () => import("@/components/Home/productSteps/productSteps")
);
const Faq = lazy(() => import("@/components/Product/faq/faq"));
const Innerbanner = lazy(
  () => import("@/components/Product/innerbanner/innerbanner")
);
const Metalpanels = lazy(
  () => import("@/components/Product/metalPanels/metalPanels")
);
const Productcontent = lazy(
  () => import("@/components/Product/productContent/productContent")
);

export default function Shippingaddress() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: productBannerData, isError: isErrorProductBannerData } =
    fetchDataSWR("global/banner?slug=products");
  const { fetchdata: productFilterData, isError: isErrorProductFilter } =
    fetchDataSWR("global/product/categories");
  const { fetchdata: productContentData, isError: isErrorproductContentData } =
    fetchDataSWR("products/series");
  const { fetchdata: productSeries, isError: isErrorProductSeries } =
    fetchDataSWR("global/product-series");
  const { fetchdata: productFaq, isError: isErrorFaq } =
    fetchDataSWR("products/faq");

  if (
    !productFilterData ||
    !productContentData ||
    !productBannerData ||
    !productSeries ||
    !productFaq
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  if (
    isErrorProductFilter ||
    isErrorProductBannerData ||
    isErrorproductContentData ||
    isErrorProductSeries ||
    isErrorFaq
  ) {
    setLoading(false);
    return <Error />;
  }

  return (
    <>
      {/* Breadcrumb loads immediately */}
      <Breadcrumb pagehierarchy={["Product"]} />

      {/* Lazy loaded sections with Suspense */}
      <Suspense fallback={<SectionLoader height="500px" />}>
        <Innerbanner bannerProduct={productBannerData} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Metalpanels productSeries={productSeries} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Productcontent productContentData={productContentData} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Productsteps productFilterData={productFilterData} />
      </Suspense>

      <Suspense fallback={<SectionLoader height="600px" />}>
        <Faq faqData={productFaq} />
      </Suspense>
    </>
  );
}
