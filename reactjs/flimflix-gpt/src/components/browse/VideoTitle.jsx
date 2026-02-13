import React from 'react'

const VideoTitle = ({data}) => {

    const {id, original_title, title, overview} = data;
  return (
    <div>
      <h2>{title}</h2>
      <h3>{original_title}</h3>
      <p>{overview}</p>
    </div>
  )
}

export default VideoTitle
