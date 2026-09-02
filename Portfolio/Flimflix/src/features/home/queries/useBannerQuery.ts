import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/shared/constants/querykeys";
import { fetchHomeBannerData } from "@/services/tmdb/hombanner.service";

export const useHomeBannerQuery = () => {
  return useQuery({
    queryKey: queryKeys.home.banner,
    queryFn: fetchHomeBannerData,
  });
};