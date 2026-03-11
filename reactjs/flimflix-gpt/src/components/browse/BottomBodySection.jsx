import React, { useEffect } from 'react';
import useGetTrandingMovies from '../../hooks/useGetTrandingMovies';
import { useDispatch, useSelector } from 'react-redux';
import MovieListSections from './MovieListSections';
import { trandingMoviesFetch } from '../../store/moviesSlice';


const BottomBodySection = () => {
  const dispatch = useDispatch();
  const getTrandingMovies = useSelector((store) => store.movies?.trandingMovies);

  //useGetTrandingMovies();

  useEffect(()=>{
    dispatch(trandingMoviesFetch());
  }, [])

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
