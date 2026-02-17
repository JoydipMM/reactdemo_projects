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
    <section className='browse_top_banner_section'>
      {/* <div>current movie: {singleMovieData.id}</div>
      <div>next movie: {nextMovieIndex}</div> */}
      <div className={`browse_top_bnnr_cnt_wrap`}>
        <div className='common_container'>
          <div className='browse_top_bnnr_cnt_row'>
            <div className='browse_top_bnnr_cnt_lft'>
              <VideoTitle data={singleMovieData}/>
            </div>
            <div className='browse_top_bnnr_cnt_rgt'>
              <VideoBackground movieID={singleMovieData.id} backdrop={backdrop_path} poster={poster_path}/>
            </div>
          </div>
        </div>
      </div>
      <img className='banner_backdrop' src={`https://image.tmdb.org/t/p/w1920${singleMovieData.backdrop_path}`} />
    </section>
    </>
  )
}

export default TopBannerSection
