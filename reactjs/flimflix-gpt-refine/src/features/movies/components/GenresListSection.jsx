import React from 'react'
import MovieCard from './MovieCard'

const GenresMovieListSection = ({title="", className="", movies}) => {
  return (
    <>
    <div className='cat_card_box'>
      <div className='movie_list_wrap'>
          {movies && movies.map((movie) => 
              <MovieCard className={className? className : ""} key={movie.id} movie={movie} />
            )}
      </div>
        {title && <h3>{title}</h3> }<br/>
    </div>
    </>
  )
}

export default GenresMovieListSection

