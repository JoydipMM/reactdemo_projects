export const queryKeys = {
    home: {
        banner: ["homeBanner"] as const,
        trendingMovies: ["trendingMovies"] as const,
    },
    genre:{
        movies: ["moviesGenres"] as const,
        tv: ["tvGenres"] as const,
        all: ["allGenres"] as const,
    },
    discover: {
        movieList: (params: {
        genreId?: number;
        page?: number;
        sortBy?: string;
        year?: number;
        }) =>
            [
                "discover",
                "movie",
                params.genreId,
                params.page ?? 1,
                params.sortBy,
                params.year,
            ] as const,

        tvList: (params: {
        genreId?: number;
        page?: number;
        sortBy?: string;
        }) =>
        [
            "discover",
            "tv",
            params.genreId,
            params.page ?? 1,
            params.sortBy,
        ] as const,
    },
    movies: {
        popular: ["movies", "popular"] as const,

        details: (movieId: number) =>
        ["movies", "details", movieId] as const,

        byGenre: (genreId: number, page = 1) =>
        ["movies", "genre", genreId, page] as const,
    },
    tv: {
        details: (tvId: number) =>
        ["tv", "details", tvId] as const,

        byGenre: (genreId: number, page = 1) =>
        ["tv", "genre", genreId, page] as const,
    },
} as const;