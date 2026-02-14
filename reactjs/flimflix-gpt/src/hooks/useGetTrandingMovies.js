import React, { useEffect } from 'react';
import { TMDB_API_OPTION, API_BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { trandingMovies } from '../utils/moviesSlice';

const useGetTrandingMovies = () => {

    const dispatch = useDispatch();

    const getMoviesByOptions = async () =>{
        const response = await fetch(`${API_BASE_URL}/trending/movie/day?language=en-US&page=1`, TMDB_API_OPTION);
        const data = await response.json();
        //console.log("sdfsf ");
        //console.log(data.results);
        dispatch(trandingMovies(data.results));
        //return data.results;
    }


    useEffect(() => {
        getMoviesByOptions();
      },[]);
  
}

export default useGetTrandingMovies;
