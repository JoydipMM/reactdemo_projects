import React from 'react'
import { Link } from 'react-router-dom'

const TutorialHeader = () => {
  return (
    <>
      Tutorial Header
      <hr/>
      <Link to='' >All Tutorials</Link>
      <Link to='simple-counter' >Simple Counter</Link>
      <hr/>
    </>
  )
}

export default TutorialHeader
