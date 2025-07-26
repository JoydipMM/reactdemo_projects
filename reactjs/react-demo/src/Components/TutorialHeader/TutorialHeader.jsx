import React from 'react'
import { Link } from 'react-router-dom'

const TutorialHeader = ({currentpath}) => {
  return (
    <>
      Tutorial Header
      <hr/>
      <Link to='' >All Tutorials</Link> {currentpath !==""? currentpath : null }
      <hr/>
    </>
  )
}

export default TutorialHeader
