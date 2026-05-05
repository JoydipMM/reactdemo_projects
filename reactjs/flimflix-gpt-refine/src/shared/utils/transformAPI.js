/**
 * Transforms a raw TMDB movie object into a normalized client-side model.
 * This prevents raw API shapes from leaking into the UI layer.
 */
export const transformMovie = (data) => ({
  id: data.id,
  title: data.title || data.name || '',
  originalTitle: data.original_title || data.original_name || '',
  originalLanguage: data.original_language || '',
  overview: data.overview || '',
  poster: data.poster_path || null,
  backdrop: data.backdrop_path || null,
  genreIds: data.genre_ids || [],
  releaseDate: data.release_date || data.first_air_date || '',
  voteAverage: data.vote_average || 0,
  popularity: data.popularity || 0,
});

/**
 * Transforms a raw TMDB trailer/video object into a normalized model.
 */
export const transformTrailer = (data) => ({
  id: data.id,
  key: data.key,
  name: data.name,
  type: data.type,
  site: data.site,
  official: data.official,
});

/**
 * Transforms a raw TMDB genre object.
 */
export const transformGenre = (data) => ({
  id: data.id,
  name: data.name,
});
