import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div style={{background: 'red'}}>
        AboutPage<br/>
        <Link href="/parallal-route/about-inner">Go to About Inner</Link>
    </div>
  )
}

export default AboutPage