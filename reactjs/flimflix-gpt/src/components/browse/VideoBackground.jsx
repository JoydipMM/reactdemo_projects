import React, { useEffect, useState } from 'react'
import YouTube from "react-youtube";
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentBrowseMovieIndex } from '../../store/moviesSlice';
import useGetBrowseTrailers from '../../hooks/useGetBrowseTrailers';


const VideoBackground = ({ movieID, backdrop, poster }) => {

  const dispatch = useDispatch();

  //console.log(movieID);

  // const [ trailerID, setTrailerID ] = useState(null);
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w1920${backdrop}`;

  //const [trailers, setTrailers] = useState(null);
  const trailers = useSelector((store) => store.movies?.trailer);
  const [currentIndex, setCurrentIndex] = useState(useSelector((store) => store.movies?.currentBrowseMovieIndex));


  useGetBrowseTrailers(movieID);


  // useEffect(() => {
  //     movieVideoApi(movieID);
  // }, [movieID]);


  // youtube options
  const opts = {
    height: "300",
    width: "500",
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  // video end event
  const handleVideoEnd = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      dispatch(updateCurrentBrowseMovieIndex(nextIndex));
      return nextIndex;
    });
  };



  return (
    <div className={`browse_top_bnnr_video_wrap`}>
      {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerID}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
      {trailers && (
          <YouTube
          className='banner_post_frame'
            videoId={trailers?.key}
            opts={opts}
            onEnd={handleVideoEnd}
          />
        )}
      {/* <img className='banner_backdrop' src={backdropUrl} /> */}
    </div>
  )
}

export default VideoBackground
