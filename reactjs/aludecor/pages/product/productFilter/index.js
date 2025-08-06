import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Productsteps from "@/components/Home/productSteps/productSteps";
import Beinterested from "@/components/shadeListing/beInterested/beInterested";
import FilterPrd from "@/components/shadeListing/filter-product/filterprd";
import Innerbanner from "@/components/shadeListing/innerbanner/innerbanner";
import Productcontent from "@/components/shadeListing/productContent/productContent";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function ProductFilter() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: productFilterData, isError: isErrorProductFilter } =
    fetchDataSWR("global/product/categories");
  const { fetchdata: productSelectData, isError: isErrorProductSelect } =
    fetchDataSWR("product/filter/preset");
  const { fetchdata: productAdvertiseData, isError: isErrorAdvertise } =
    fetchDataSWR("product/filter/advertisement");
  const { fetchdata: bannerData, isError: isErrorBannerData } = fetchDataSWR(
    "global/banner?slug=product-filter"
  );
  const { fetchdata: productSeries, isError: isErrorProductSeries } =
    fetchDataSWR("global/product-series");
  if (
    !productFilterData ||
    !productSelectData ||
    !bannerData ||
    !productAdvertiseData ||
    !productSeries
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  if (
    isErrorProductFilter ||
    isErrorProductSelect ||
    isErrorBannerData ||
    isErrorAdvertise ||
    isErrorProductSeries
  ) {
    return <Error />;
  }
  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "ProductFilter"]} />
      <Innerbanner bannerData={bannerData} />
      <FilterPrd productFilterData={productSelectData} />
      <Beinterested productSeries={productSeries} />
      {/* <Productsteps productFilterData={productFilterData} /> */}
      <Productcontent productAdvertiseData={productAdvertiseData} />
    </>
  );
}
