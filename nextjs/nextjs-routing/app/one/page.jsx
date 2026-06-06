import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      One Component <br/>
      <Link href="/one/two">Go to Two [Same Level Interceptor]</Link>
      <Link href="/three">Go to Three [One Level Interceptor]</Link>
    </div>
  )
}

export default page
