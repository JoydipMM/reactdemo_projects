import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Productsteps from "@/components/Home/productSteps/productSteps";
import Resources from "@/components/metalDetailsPage/resources/resources";
import Faq from "@/components/Product/faq/faq";
import Banner from "@/components/productDetailsPage/banner/banner";
import Hammered from "@/components/productDetailsPage/hammered/hammered";
import PrdFeatures from "@/components/productDetailsPage/prdFeatures/prdFeatures";
import RelProduct from "@/components/productDetailsPage/relProduct/relProduct";
import RequestQuote from "@/components/productDetailsPage/requestQuote/requestQuote";
import ViewShades from "@/components/productDetailsPage/viewShades/viewShades";
import Beinterested from "@/components/shadeListing/beInterested/beInterested";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { authLogin } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
// Make sure to import your Error component

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authLogin);
  //console.log("sesssssssssss", session);
  if (!session) {
    return {
      props: {}
    };
  }

  return {
    props: { session }
  };
}

export default function ProductDetails() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { product_id } = router.query;

  // All data fetching at the top level with conditional fetching
  const { fetchdata: bannerData, isError: isErrorBannerData } = fetchDataSWR(
    product_id ? "global/banner?slug=product-filter" : null
  );
  const { fetchdata: productFilterData, isError: isErrorProductFilter } =
    fetchDataSWR(product_id ? "global/product/categories" : null);
  const { fetchdata: productFeaturedData, isError: isErrorFeaturedData } =
    fetchDataSWR(
      product_id ? `products/details/features?product_id=${product_id}` : null
    );
  const { fetchdata: productSpecificationData, isError: isErrorSpecification } =
    fetchDataSWR(
      product_id
        ? `products/details/specification?product_id=${product_id}`
        : null
    );
  const { fetchdata: productRelatedProduct, isError: isErrorProductRelated } =
    fetchDataSWR(
      product_id
        ? `products/details/related_products?product_id=${product_id}`
        : null
    );
  const { fetchdata: projectData, isError: isErrorProject } = fetchDataSWR(
    product_id ? `products/details/projects?product_id=${product_id}` : null
  );
  const { fetchdata: faqData, isError: isErrorFaq } = fetchDataSWR(
    product_id ? `products/details/faq?product_id=${product_id}` : null
  );
  const { fetchdata: requestFormData, isError: isErrorRequested } =
    fetchDataSWR(
      product_id
        ? `products/details/contact_cta?product_id=${product_id}`
        : null
    );
  const { fetchdata: productSeries, isError: isErrorProductSeries } =
    fetchDataSWR(product_id ? `global/product-series` : null);
  const { fetchdata: downloadableSeries, isError: isErrorDownloadableSeries } =
    fetchDataSWR(product_id ? `global/downloadable-resources` : null);
  // Early return if no product_id
  if (!product_id) {
    return <div>No Product found</div>;
  }

  if (
    isErrorFeaturedData ||
    isErrorProductRelated ||
    isErrorSpecification ||
    isErrorFaq ||
    isErrorProject ||
    isErrorProductFilter ||
    isErrorBannerData ||
    isErrorRequested ||
    isErrorProductSeries ||
    isErrorDownloadableSeries
  ) {
    return <Error />;
  }
  // Loading state
  if (
    !productFeaturedData ||
    !productSpecificationData ||
    !productRelatedProduct ||
    !faqData ||
    !productFilterData ||
    !projectData ||
    !bannerData ||
    !requestFormData ||
    !productSeries ||
    !downloadableSeries
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  // Error state

  if (!bannerData.data || bannerData.data.status === 400) {
    return <Error />;
  }
  // Main render
  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "Productdetails"]} />
      <Banner bannerData={bannerData} />
      <PrdFeatures featuredData={productFeaturedData} session={session} />
      <RequestQuote requestFormData={requestFormData} />
      <Hammered productSpecificationData={productSpecificationData} />
      <ViewShades productRelatedProduct={productRelatedProduct} />
      <Resources downloadableSeries={downloadableSeries} session={session} />
      <RelProduct projectData={projectData} />
      <Faq faqData={faqData} />
      <Beinterested productSeries={productSeries} />
      <Productsteps productFilterData={productFilterData} />
      <div className="topadding_top"></div>
    </>
  );
}
