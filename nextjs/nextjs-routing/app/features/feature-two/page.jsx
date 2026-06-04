import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      Feature Two page<br/>
      <Link href="/features/feature-one">Go to Feature One</Link>
    </div>
  )
}

export default page
