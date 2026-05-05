import React from 'react'
import Header from '../shared/components/Header';
import useGetTrandingMovies from '../features/movies/queries/useGetTrandingMovies';
import useGenres from '../features/genres/queries/useGenres';
import GenresMovieListSection from '../features/genres/components/GenresMovieListSection';
import { useFormattedMoviesByGenre } from '../features/movies/queries/useFormattedMoviesByGenre';
import Loader from '../shared/components/Loader';
import ErrorState from '../shared/components/ErrorState';
import EmptyState from '../shared/components/EmptyState';

const Genres = () => {
    const { data: getTrandingMovies, isLoading: isMoviesLoading, isError: isMoviesError } = useGetTrandingMovies();
    const { genres: getGenres, isLoading: isGenresLoading, isError: isGenresError } = useGenres();

    const moviesByGenre = useFormattedMoviesByGenre(getGenres, getTrandingMovies);

  return (
    <>
      <Header />

      <section className='browse-page-body-area-section inner_page_layout'>
        <div className='common_container'>
          
          <div className='browse_banner_section pt-10 pb-5'>
                <h1>Browse by Genres</h1>
          </div>

          {(isMoviesLoading || isGenresLoading) && <Loader />}
          {(isMoviesError || isGenresError) && <ErrorState message="Could not load genres successfully." />}

          {(!isMoviesLoading && !isGenresLoading && (!moviesByGenre || moviesByGenre.length === 0)) && 
            <EmptyState message="No genre data available." />
          }

          {moviesByGenre?.map((movie) => (
             <div className='browse_genre_section_col' key={movie.genreName}>
                <GenresMovieListSection title={movie.genreName} movies={movie.movies} />
             </div>
          ))}
          
        </div>
      </section>
      
    </>
  )
}

export default Genres

