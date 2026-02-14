import React from 'react'
import MovieCard from './MovieCard'

const MovieListSections = ({title="", movies}) => {
  return (
    <>
    {title && <h3>{title}</h3> }<br/>
    <div style={{width:"100%", display:"flex", overflow:"hidden", overflowX:"auto", marginBottom:"30px"}}>
        {movies && movies.map((movie) => 
            <MovieCard key={movie.id} movie={movie} />
        )}
    </div>
    </>
  )
}

export default MovieListSections
