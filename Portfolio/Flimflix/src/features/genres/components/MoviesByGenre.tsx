import React from 'react';
import { discoverMovieList } from '@/features/movies/queries/useDiscoverQuery';

interface Genre{
    id: number;
    name: string;
}

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