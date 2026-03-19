import React from 'react'
import { TMDB_IMG_PATH } from '../../utils/constants'
import { useSelector } from 'react-redux'

const MovieCard = ({movie, className=""}) => {
    //console.log(movie);
    const language = useSelector((state) => state.setting.language);
    if(!movie.poster_path) return null;
  return (
    <div className={className? className : ""} style={{flexShrink:"0"}}>
      {/* {movie.title} */}
      {movie.original_language === language ? movie.original_title : movie.title}
      {/* {movie.poster_path && <img src={`${TMDB_IMG_PATH}${movie.poster_path}`} alt="" width={"100px"} /> } */}
      {movie.backdrop_path && <img src={`${TMDB_IMG_PATH}${movie.backdrop_path}`} alt="" width={"100px"} /> }
      <br/>
      <hr/>
    </div>
  )
}

export default MovieCard
