import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/shared/constants/querykeys";
import { discoverMovies, discoverTV } from "@/services/tmdb/discover.sevice";

export const discoverMovieList = ({genreId, page=1}:{ genreId?:number, page?:number }) => {
    return useQuery({
        queryKey: queryKeys.discover.movieList({
        genreId,
        page,
        }),
        queryFn: () => discoverMovies({genreId, page}),
    })
}

export const discoverTVList = ({genreId, page=1}:{ genreId?:number, page?:number }) => {
    return useQuery({
        queryKey: queryKeys.discover.tvList({
        genreId,
        page,
        }),
        queryFn:  () => discoverTV({genreId, page}),
    })
}