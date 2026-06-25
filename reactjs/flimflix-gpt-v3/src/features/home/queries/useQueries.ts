import { useQuery } from "@tanstack/react-query";
import { fetchHomeBannerData } from "../hooks/useHomeData";

export const useHomeBannerQuery = () => {
  return useQuery({
    queryKey: ["homeBanner"],
    queryFn: fetchHomeBannerData,
  });
};