import React, { useEffect } from 'react';
import useGetTrandingMovies from '../../hooks/useGetTrandingMovies';
import { useDispatch, useSelector } from 'react-redux';
import MovieListSections from './MovieListSections';
import { trandingMoviesFetch } from '../../store/moviesSlice';
import { Link } from 'react-router-dom';


const BottomBodySection = () => {
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
      {/* <h2>Bottom banner section</h2> */}
      <section style={{width:"100%", position:"relative"}}>
        <div className='common_container'>
          <h4>Tranding Movies by Genres</h4>
          <Link to="/genres">View all genres</Link>
          <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            {moviesByGenre?.slice(0,4).map((movie) => (
                <div key={movie.genreName}>
                  <MovieListSections title={movie.genreName} movies={movie.movies?.slice(0,2)} />
                </div>
            ))}
          </div>
        </div>
      </section>
      {/* <MovieListSections title="Trending Movies" movies={getTrandingMovies} /> */}
    </>
  )
}

export default BottomBodySection
