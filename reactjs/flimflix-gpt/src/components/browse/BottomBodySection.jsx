import React, { useEffect } from 'react';
import useGetTrandingMovies from '../../hooks/useGetTrandingMovies';
import { useDispatch, useSelector } from 'react-redux';
import MovieListSections from './MovieListSections';
import { trandingMoviesFetch } from '../../store/moviesSlice';
import { Link } from 'react-router-dom';
import GenresMovieListSection from './GenresListSection';


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
      <section className='browse-page-body-area-section'>
        <div className='common_container'>
          <div className='section_hdng_section'>
            <div className='section_hdng_col'>
              <h4 className='section_title'>Tranding Movies by Genres</h4>
            </div>
            <div className='section_hdng_col row_view'>
              <Link to="/genres" className='common_button'>View all genres</Link>
            </div>
          </div>
          <div className='browse_genre_section'>
            {moviesByGenre?.slice(0,4).map((movie) => (
                <div className='browse_genre_section_col' key={movie.genreName}>
                  {/* <MovieListSections title={movie.genreName} movies={movie.movies?.slice(0,4)} /> */}
                  <GenresMovieListSection title={movie.genreName} movies={movie.movies?.slice(0,4)} />
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
