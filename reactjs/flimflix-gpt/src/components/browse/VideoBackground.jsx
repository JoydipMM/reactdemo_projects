import React, { useEffect, useState } from 'react'
import YouTube from "react-youtube";
import { TMDB_API_OPTION } from '../../utils/constants';

const VideoBackground = ({movieID, backdrop, poster, videoloop}) => {

    // const [ trailerID, setTrailerID ] = useState(null);
    const posterUrl = `https://image.tmdb.org/t/p/w500${poster}`;
    const backdropUrl = `https://image.tmdb.org/t/p/w1920${backdrop}`;

    const [trailers, setTrailers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    

    const movieVideoApi = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos`, TMDB_API_OPTION);
        //console.log(response);
        const movieVideoData = await response.json();
        //console.log(movieVideoData);

        //const videosFilter = movieVideoData.results.filter((item) => item.type === "Trailer");
        //console.log(videosFilter);
        // const trailer =  videosFilter.length ? videosFilter[0]?.key : movieVideoData.results[0]?.key;
        // console.log(trailer);
        // setTrailerID(trailer);

        const trailerVideos = movieVideoData.results.filter((item) => item.type === "Trailer" && item.site === "YouTube");
        setTrailers(trailerVideos);
        setCurrentIndex((prev)=> prev++);

    }

    // video end event
    const handleVideoEnd = () => {
        setCurrentIndex((prev) => {
            const nextIndex = (prev + 1) % trailers.length;
            videoloop(nextIndex); // send updated index to parent
            return nextIndex;
        });
    };

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

    useEffect(() => {
        movieVideoApi();
    }, [movieID]);

  return (
    <div>
       {currentIndex} 
      {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerID}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
      {trailers.length > 0 && (
        <YouTube
          videoId={trailers[currentIndex]?.key}
          opts={opts}
          onEnd={handleVideoEnd}
        />
      )}
      <img src={backdropUrl} />
    </div>
  )
}

export default VideoBackground
