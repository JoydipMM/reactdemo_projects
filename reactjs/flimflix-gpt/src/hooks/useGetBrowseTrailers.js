import React, { useEffect } from "react";
import { TMDB_API_OPTION, API_BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useGetBrowseTrailers = (movieID) => {
  const dispatch = useDispatch();
  const movieVideoApi = async () => {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieID}/videos`,
      TMDB_API_OPTION,
    );
    const movieVideoData = await response.json();
    //console.log(movieVideoData);

    //const videosFilter = movieVideoData.results.filter((item) => item.type === "Trailer");
    //console.log(videosFilter);
    // const trailer =  videosFilter.length ? videosFilter[0]?.key : movieVideoData.results[0]?.key;
    // console.log(trailer);
    // setTrailerID(trailer);

    const trailerVideos = movieVideoData.results.filter(
      (item) => item.type === "Trailer" && item.site === "YouTube",
    );

    //setTrailers(trailerVideos[0]);
    dispatch(addTrailer(trailerVideos[0]));
  };

  useEffect(() => {
    movieVideoApi(movieID);
  }, [movieID]);
  
};

export default useGetBrowseTrailers;
