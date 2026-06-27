import React from 'react';
import { Genre } from '../types/genre.types';
import { discoverMovieList } from '@/features/movies/queries/useDiscoverQuery';

const MoviesByGenre = ({genre}: {genre: Genre}) => {
    const { id, name } = genre;
    const { data, isLoading, isError } = discoverMovieList({genreId: id});

  return (
    <>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}
        <h5> genre name: {name}</h5>
        {data && data.slice(0, 4).map((item: any) => (
            <div key={item.id}>
                {item.id} - {item.title}
            </div>
        ))}
        {/* ddddd {genre.name} - {id} */}
    </>
  )
}

export default MoviesByGenre