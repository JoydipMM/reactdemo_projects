import { useQuery, useQueries } from "@tanstack/react-query";
import { queryKeys } from "@/shared/constants/querykeys";
import { fetchMoviesGenres, fetchTvGenres } from "@/services/tmdb/genre.service";

interface MultipleGenres{
    id: string;
    genres: [];
}

export const useMoviesGenresQuery = () => {
    return useQuery({
        queryKey: queryKeys.genre.movies,
        queryFn: fetchMoviesGenres,
    })
};

export const useTvGenresQuery = () => {
    return useQuery({
        queryKey: queryKeys.genre.tv,
        queryFn: fetchTvGenres,
    })
};

export const useAllGenresQuery = () => {
    const [ movieGenreQuery, tvGenreQuery ]: any = useQueries({
        queries:[
            {
                queryKey: queryKeys.genre.movies,
                queryFn: fetchMoviesGenres,
            },
            {
                queryKey: queryKeys.genre.tv,
                queryFn: fetchTvGenres,
            }
        ]
    })

    // combine all genres from movies and tv
    const allGenres = [
        ...(movieGenreQuery.data ?? []),
        ...(tvGenreQuery.data ?? []),
    ];

    // this is for create new map to remove duplicates entries
    const uniqueGenres = Array.from(
        new Map(allGenres.map((genre: MultipleGenres) => [genre.id, genre])).values()
    )

    return{
        data: uniqueGenres,
        isLoading: movieGenreQuery.isLoading || tvGenreQuery.isLoading,
        isError: movieGenreQuery.isError || tvGenreQuery.isError,
        error: movieGenreQuery.error ?? tvGenreQuery.error,
    }
};