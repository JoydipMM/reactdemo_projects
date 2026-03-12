import React from 'react'
import { useSelector } from 'react-redux';

const VideoTitle = ({data}) => {
  const language = useSelector((state) => state.setting.language);
    const {id, original_title, original_language, title, overview} = data;
  return (
    <>
      {/* <h2>{title}</h2> */}
      <h2>{original_language === language ? original_title : title}</h2>
      <p>{overview}</p>
    </>
  )
}

export default VideoTitle
