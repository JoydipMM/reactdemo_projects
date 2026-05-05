import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <>
    <hr/>
      GPT Search<br/>
      <GptSearchBar />
      <GptMovieSuggestions />
    <hr/>
    </>
  )
}

export default GptSearch

