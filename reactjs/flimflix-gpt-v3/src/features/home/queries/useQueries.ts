import { useQuery } from "@tanstack/react-query";
import { fetchHomeBannerData } from "../../../services/tmdb/homBanner.service";

export const useHomeBannerQuery = () => {
  return useQuery({
    queryKey: ["homeBanner"],
    queryFn: fetchHomeBannerData,
  });
};