import React from 'react'
import { useSelector } from 'react-redux';
import MovieListSections from '../browse/MovieListSections';

const GptMovieSuggestions = () => {

  const gpt = useSelector((store) => store.gpt);
  console.log("gpt", gpt)
  const { movieNames, searchResult, searchContent } = gpt;
  if(!movieNames) return null;

  return (
    <div>
      <h2>Based on your search: {searchContent}</h2>
      {movieNames && movieNames.map((movieName, index) => 
        <>
        <h2><b>{movieName}</b></h2>
        {searchResult?.[index]?.length > 0 ? <MovieListSections key={searchResult[index][0].id} movies={searchResult[index]} /> : "No Preview Avalable"}
        </>
      )}
    </div>
  )
}

export default GptMovieSuggestions
