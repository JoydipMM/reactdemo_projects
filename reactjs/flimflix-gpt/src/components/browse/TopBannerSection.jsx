import React, {useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const TopBannerSection = () => {

    const [loopCount, setLoopCount] = useState(0);
    const [nextMovide, setNextMovie] = useState(0);

    const getMovies = useSelector((store) => store.movies?.nowPlayingMovies);
    //console.log(getMovies);

    //if(getMovies === null) return; //option - 01  also known as early return
    if(!getMovies) return; // option - 02  also known as early return

    const singleMovieData = getMovies?.[nextMovide];
    console.log(singleMovieData);
    const {id, backdrop_path, poster_path} = singleMovieData;

     const handleLoopCount = (count) => {
        setLoopCount(count);
        console.log("Video loop index:", count);
        setNextMovie(count);
    };

  return (
    <>
    {loopCount}
    <VideoTitle data={singleMovieData}/>
    <VideoBackground movieID={id} backdrop={backdrop_path} poster={poster_path} videoloop={handleLoopCount}/>
    </>
  )
}

export default TopBannerSection
