"use client";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FabricatorSearch from "@/components/findFabricator/fabricatorSearch/fabricatorSearch";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";

import Achivement from "@/components/recognition/achivement/achivement";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function Findfabricator() {
  const [loading, setLoading] = useState(true);
  const { fetchdata: achievementsData, isError: isErrorAchievementsData } =
    fetchDataSWR("dealers/achievements");
  const { fetchdata: dealersData, isError: isErrorDealersData } = fetchDataSWR(
    "authorized/dealers?page=1"
  );
  if (isErrorAchievementsData || isErrorDealersData) {
    return <Error />;
  }
  if (!achievementsData || !dealersData) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Find Users"]} />
      <FabricatorSearch dealersData={dealersData} />
      <Achivement achievementsData={achievementsData} />
    </>
  );
}
