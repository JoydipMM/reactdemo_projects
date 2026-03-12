import React from 'react'
import { TMDB_IMG_PATH } from '../../utils/constants'

const MovieCard = ({movie, className=""}) => {
    //console.log(movie);
    if(!movie.poster_path) return null;
  return (
    <div className={className? className : ""} style={{flexShrink:"0"}}>
      {movie.title}
      <img src={`${TMDB_IMG_PATH}${movie.poster_path}`} alt="" width={"100px"} />
      <br/>
      <hr/>
    </div>
  )
}

export default MovieCard
