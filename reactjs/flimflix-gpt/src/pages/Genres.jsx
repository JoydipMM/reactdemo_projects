import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trandingMoviesFetch } from '../store/moviesSlice';
import GenresMovieListSection from '../components/genresMovieKistSection';

const Genres = () => {
    const dispatch = useDispatch();
    const getTrandingMovies = useSelector((store) => store.movies?.trandingMovies);
    const getGenres = useSelector((store)=>store.movies?.genres);

    //useGetTrandingMovies();

    const moviesByGenre = getGenres?.map((genre) => {
    const movies = getTrandingMovies?.filter((movie) =>
        movie.genre_ids.includes(genre.id)
    );
    return {
        genreName: genre.name,
        movies: movies,
    };
    }) || [];

    useEffect(()=>{
        dispatch(trandingMoviesFetch());
    }, [])

  return (
    <>
      <section style={{width:"100%", position:"relative", padding:"200px 0px"}}>
        <div className='common_container'>
          <h4>Tranding Movies by Genres</h4>
          <div>
            {/* {movie?.movies?.length} */}
            {moviesByGenre?.map((movie) => (
                <div key={movie.genreName}>
                    {movie?.movies?.length > 0 && <GenresMovieListSection title={movie.genreName} movies={movie.movies} /> }
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Genres
