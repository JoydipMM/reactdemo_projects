export const QUERY_KEYS = {
    NOW_PLAYING: ["movies", "nowPlaying"],
    TRENDING: ["movies", "trending"],
    BROWSE_TRAILER: (movieId) => ["movies", "browseTrailer", movieId],
    DEFAULT_MOVIES: ["movies", "default"],
    GENRES: ["movies", "genres"],
    GPT_SEARCH: ["gpt", "search"]
};

