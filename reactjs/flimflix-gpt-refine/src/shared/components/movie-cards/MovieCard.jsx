import React from 'react'
import { TMDB_IMG_PATH } from '../../constants/constants'
import { useSelector } from 'react-redux'

const MovieCard = ({ movie, className = "" }) => {
  const language = useSelector((state) => state.setting.language);
  if (!movie.backdrop) return null;

  return (
    <div className={className || ""} style={{ flexShrink: "0" }}>
      {movie.originalLanguage === language ? movie.originalTitle : movie.title}
      {movie.backdrop && <img src={`${TMDB_IMG_PATH}${movie.backdrop}`} alt={movie.title} width={"100px"} />}
      <br />
      <hr />
    </div>
  )
}

export default MovieCard
