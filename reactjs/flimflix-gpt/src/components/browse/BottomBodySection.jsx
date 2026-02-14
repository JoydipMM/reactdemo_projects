import React, { useEffect } from 'react';
import useGetTrandingMovies from '../../hooks/useGetTrandingMovies';
import { useSelector } from 'react-redux';
import MovieListSections from './MovieListSections';


const BottomBodySection = () => {
  const getTrandingMovies = useSelector((store) => store.movies?.trandingMovies);

  useGetTrandingMovies();

  return (
    <>
      <h2>Bottom banner section</h2>
      {/* 
      list of movie list by categories
      - multiple movie cards
      */}
      <MovieListSections title="Trending Movies" movies={getTrandingMovies} />
    </>
  )
}

export default BottomBodySection
