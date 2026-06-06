import React from 'react'
import Link from 'next/link'

const AboutInnerPage = () => {
  return (
    <div style={{background: 'pink'}}>
      AboutInnerPage <br/>
      <Link href="/parallal-route/">Back</Link>
      </div>
  )
}

export default AboutInnerPage