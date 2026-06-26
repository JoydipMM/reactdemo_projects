import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/shared/constants/querykeys";
import { fetchTradingMovies } from "@/services/tmdb/trandingmovie.service";

export const useTrandingMoviesQuery = () =>{
    return useQuery({
        queryKey:queryKeys.home.trandingmovies,
        queryFn:fetchTradingMovies
    })
}