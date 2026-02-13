import React from 'react'

const VideoTitle = ({data}) => {

    const {id, original_title, overview} = data;
  return (
    <div>
      <h2>{original_title}</h2>
      <p>{overview}</p>
    </div>
  )
}

export default VideoTitle
