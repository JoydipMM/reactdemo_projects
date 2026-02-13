import React, {useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const TopBannerSection = () => {

    const nextMovieIndex = useSelector((store) => store.movies?.currentBrowseMovieIndex);
    const getMovies = useSelector((store) => store.movies?.nowPlayingMovies);

    //if(getMovies === null) return; //option - 01  also known as early return
    if(!getMovies) return; // option - 02  also known as early return

    const singleMovieData = getMovies?.[nextMovieIndex];
    //console.log("current movie:",singleMovieData);
    const {id, backdrop_path, poster_path} = singleMovieData;

  return (
    <>
    <div>current movie: {singleMovieData.id}</div>
    <div>next movie: {nextMovieIndex}</div>
    <VideoTitle data={singleMovieData}/>
    <VideoBackground movieID={singleMovieData.id} backdrop={backdrop_path} poster={poster_path}/>
    </>
  )
}

export default TopBannerSection
