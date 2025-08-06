import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Innerbanner from "@/components/Solutionsrivets/innerbanner/innerbanner";
import Rivetscontent from "@/components/Solutionsrivets/rivetscontent/rivetscontent";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function Rivets() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: rivetsBannerData, isError: isErrorRivetsBanner } =
    fetchDataSWR("rivets/section/banner");
  const { fetchdata: rivetsHeroData, isError: isErrorRivetsHero } =
    fetchDataSWR("rivets/section/hero");
  const { fetchdata: productInfoData, isError: isErrorProductInfo } =
    fetchDataSWR("rivets/section/product-info");
  const { fetchdata: riverColorData, isError: isErrorRiverColor } =
    fetchDataSWR("rivets/section/rivets-colour");
  const { fetchdata: assembleData, isError: isErrorAssemble } = fetchDataSWR(
    "rivets/section/assembly-diagram-top"
  );
  const { fetchdata: rivetGalleryData, isError: isErrorRivetGallery } =
    fetchDataSWR("rivets/section/rivet-gallery");
  const { fetchdata: methodRivetData, isError: isErrorMethodRivetData } =
    fetchDataSWR("rivets/section/method-rivet-system");
  const { fetchdata: assembleDatabtm, isError: isErrorAssembleDatabtm } =
    fetchDataSWR("rivets/section/assembly-diagram-btm");
  const {
    fetchdata: rivetInstallationData,
    isError: isErrorrivetInstallation
  } = fetchDataSWR("rivets/section/installation-techniques");
  if (
    !rivetsBannerData ||
    !rivetsHeroData ||
    !productInfoData ||
    !riverColorData ||
    !rivetInstallationData ||
    !assembleData ||
    !rivetGalleryData ||
    !methodRivetData ||
    !assembleDatabtm
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }
  if (
    isErrorRivetsBanner ||
    isErrorRivetsHero ||
    isErrorProductInfo ||
    isErrorRiverColor ||
    isErrorrivetInstallation ||
    isErrorAssemble ||
    isErrorRivetGallery ||
    isErrorMethodRivetData ||
    isErrorAssembleDatabtm
  ) {
    return <Error />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Solutions", "Rivets"]} />
      <Innerbanner rivetsBannerData={rivetsBannerData} />
      <Rivetscontent
        rivetsHeroData={rivetsHeroData}
        productInfoData={productInfoData}
        riverColorData={riverColorData}
        rivetInstallationData={rivetInstallationData}
        assembleData={assembleData}
        rivetGalleryData={rivetGalleryData}
        methodRivetData={methodRivetData}
        assembleDatabtm={assembleDatabtm}
      />
    </>
  );
}
