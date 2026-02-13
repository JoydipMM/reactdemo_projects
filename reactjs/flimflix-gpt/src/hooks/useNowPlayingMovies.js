import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TMDB_API_OPTION } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {
  const moviesDispatch = useDispatch();

  const nowPlayingMovieList = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_API_OPTION,
    );
    const data = await response.json();
    //console.log(data.results);
    moviesDispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    nowPlayingMovieList();
  }, []);
};

export default useNowPlayingMovies;