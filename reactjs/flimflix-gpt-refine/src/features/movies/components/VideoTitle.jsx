import React from 'react'
import { useSelector } from 'react-redux';

const VideoTitle = ({ data }) => {
  const language = useSelector((state) => state.setting.language);
  const { originalTitle, originalLanguage, title, overview } = data;

  return (
    <>
      <h2 className='movie_banner_title'>
        {originalLanguage === language ? originalTitle : title}
      </h2>
      <p className='movie_banner_overview'>{overview}</p>
    </>
  )
}

export default VideoTitle
