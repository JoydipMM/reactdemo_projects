import React from 'react'
import { Link } from 'react-router-dom'

const TutorialHeader = () => {
  return (
    <>
      Tutorial Header
      <hr/>
      <Link to={'/'} >All Tutorials</Link>
      <hr/>
    </>
  )
}

export default TutorialHeader
