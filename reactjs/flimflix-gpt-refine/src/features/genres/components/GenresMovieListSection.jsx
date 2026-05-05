import React from 'react'
import MovieCard from '../../../shared/components/movie-cards/MovieCard';

const GenresMovieListSection = ({title="", className="", movies}) => {
  return (
    <div>
      {title && <h3>{title}</h3> }<br/>
      <div style={{width:"100%", display:"flex", overflow:"hidden", overflowX:"auto", marginBottom:"30px"}}>
          {movies && movies.map((movie) => 
              <MovieCard className={className? className : ""} key={movie.id} movie={movie} />
          )}
      </div>
    </div>
  )
}

export default GenresMovieListSection

