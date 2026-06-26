export const queryKeys : Record<string, Record<string, string[]>> = {
    home: {
        banner: ["homeBanner"],
        trandingmovies: ["trandingmovies"],
    },
    genre:{
        movies: ["moviesgenres"],
        tv: ["tvgenres"],
        all: ["moviesgenres", "tvgenres"],
    }
}