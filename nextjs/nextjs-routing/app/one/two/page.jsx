import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      Two Component<br/>
      <Link href="/four">Go to Four [Two Level Interceptor]</Link>
    </div>
  )
}

export default page
