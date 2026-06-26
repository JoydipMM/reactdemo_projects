import React from 'react';
import { useMoviesGenresQuery, useTvGenresQuery, useAllGenresQuery } from '@/features/genres';

const GenreList = () => {

    const {
        data: genres,
        isLoading: isLoadingGenres,
        isError: isErrorGenres,
    } = useAllGenresQuery();
  return (
    <>
     <h3>Genres</h3>
      {isLoadingGenres && <div>Loading...</div>}
      {isErrorGenres && <div>Error</div>}
      {genres && genres.map((item : any) => (
        <div key={item.id}>{item.id} -{item.name}</div>
      ))} 
    </>
  )
}

export default GenreList
