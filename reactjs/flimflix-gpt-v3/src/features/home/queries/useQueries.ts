import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../shared/constants/querykeys";
import { fetchHomeBannerData } from "../../../services/tmdb/homBanner.service";

export const useHomeBannerQuery = () => {
  return useQuery({
    queryKey: queryKeys.homeBanner,
    queryFn: fetchHomeBannerData,
  });
};