import React from 'react';
import { useMoviesGenresQuery, useTvGenresQuery, useAllGenresQuery } from '@/features/genres';
import MoviesByGenre from '@/features/genres/components/MoviesByGenre';

interface Geners{
    id: number;
    name: string;
}

const GenreList = () => {

    const {
        data: genres,
        isLoading: isLoadingGenres,
        isError: isErrorGenres,
    } = useMoviesGenresQuery();
  return (
    <>
     <h3>Genres</h3>
      {isLoadingGenres && <div>Loading...</div>}
      {isErrorGenres && <div>Error</div>}
      {genres && genres.map((item : Geners) => (
        // <div key={item.id}>{item.id} -{item.name}</div>
        <MoviesByGenre key={item.id} genre={item} />
      ))} 
    </>
  )
}

export default GenreList
