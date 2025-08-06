import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Productsteps from "@/components/Home/productSteps/productSteps";
import Features from "@/components/metalDetailsPage/features/features";
import Innerbanner from "@/components/metalDetailsPage/innerbanner/innerbanner";
import ProjectsRelated from "@/components/metalDetailsPage/projectsRelated/projectsRelated";
import Residency from "@/components/metalDetailsPage/residency/residency";
import Resources from "@/components/metalDetailsPage/resources/resources";
import Specifications from "@/components/metalDetailsPage/specifications/specifications";
import ViewShades from "@/components/metalDetailsPage/viewShades/viewShades";
import Faq from "@/components/Product/faq/faq";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";
import { authLogin } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

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

export default function SeriesDetailsPage() {
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();
  const { product_series } = router.query;

  // Check if product_id is missing or null
  if (!product_series) {
    return <Error />;
  }
  // console.log("product_id", product_id);
  const { fetchdata: productBannerData, isError: isErrorProductBannerData } =
    fetchDataSWR(
      product_series
        ? `products/product-series/banner-section?product_series=${product_series}`
        : null
    );
  const {
    fetchdata: productFeaturesData,
    isError: isErrorProductFeaturesData
  } = fetchDataSWR(
    product_series
      ? `products/product-series/features?product_series=${product_series}`
      : null
  );
  const { fetchdata: productRelatedData, isError: isErrorProductRelatedData } =
    fetchDataSWR(
      product_series
        ? `products/product-series/related-projects?product_series=${product_series}`
        : null
    );
  const { fetchdata: productAoaData, isError: isErrorProductAoaData } =
    fetchDataSWR(
      product_series
        ? `products/product-series/ace-of-acps?product_series=${product_series}`
        : null
    );
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    product_series
      ? `products/product-series/faq?product_series=${product_series}`
      : null
  );
  const { fetchdata: specificationData, isError: isErrorSpecificationData } =
    fetchDataSWR(
      product_series
        ? `products/product-series/specifications?product_series=${product_series}`
        : null
    );
  const { fetchdata: productFilterData, isError: isErrorProductFilter } =
    fetchDataSWR("global/product/categories");
  const { fetchdata: downloadableSeries, isError: isErrorDownloadableSeries } =
    fetchDataSWR("global/downloadable-resources");
  const { fetchdata: shadesSeries, isError: isErrorShadesSeries } =
    fetchDataSWR("product/filter?per_page=6", {
      method: "POST",
      body: { series: [product_series] }
    });

  if (
    isErrorProductFilter ||
    isErrorDownloadableSeries ||
    isErrorProductBannerData ||
    isErrorProductFeaturesData ||
    isErrorProductRelatedData ||
    isErrorProductAoaData ||
    isErrorFaqData ||
    isErrorSpecificationData ||
    isErrorShadesSeries
  ) {
    return <Error />;
  }
  if (
    !productFilterData ||
    !downloadableSeries ||
    !productBannerData ||
    !productFeaturesData ||
    !productRelatedData ||
    !productAoaData ||
    !faqData ||
    !specificationData ||
    !shadesSeries
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  // 5. (Optional) Validate response structure
  // console.log(productBannerData);
  if (!productBannerData.data || productBannerData.data.status === 400) {
    return <Error />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "Series details"]} />
      <Innerbanner bannerData={productBannerData} />
      <Features productFeaturesData={productFeaturesData} />
      <ProjectsRelated projectData={productRelatedData} />
      <Residency productAoaData={productAoaData} />
      <Specifications specificationData={specificationData} />
      <ViewShades product_series={product_series} shadesSeries={shadesSeries} />
      <Resources downloadableSeries={downloadableSeries} session={session} />
      <Productsteps productFilterData={productFilterData} />
      <Faq faqData={faqData} />
    </>
  );
}
