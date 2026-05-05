import { useMemo } from 'react';

export const useFormattedMoviesByGenre = (genres, movies) => {
  return useMemo(() => {
    if (!genres || !movies) return [];
    
    return genres.map((genre) => {
      const filteredMovies = movies.filter((movie) =>
        movie.genreIds?.includes(genre.id)
      );
      return {
        genreName: genre.name,
        movies: filteredMovies,
      };
    });
  }, [genres, movies]);
};

