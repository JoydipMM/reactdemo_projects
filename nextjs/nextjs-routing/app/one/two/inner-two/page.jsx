import Link from 'next/link'
import React from 'react'

const InnerTwoPage = () => {
  return (
    <div>
        InnerTwoPage<br/>
        <Link href="/final">Go to Final Page [root level interceptor]</Link>

        {/* parallel routes allow you to simultaneously or conditionally render one or multiple pages at the same level with in the same layout. They are useful for scenarios where you want to display different content or components based on user interactions or specific conditions without navigating away from the current page. With parallel routes, you can have multiple routes active at the same time, allowing for a more dynamic and responsive user experience. 
        
        parallal routes are created using name slots. Slots are defined with @folder convention. For example, if you have a folder named @dashboard, you can create a parallel route for it by placing the corresponding page component inside that folder. This allows you to render the dashboard content alongside other components without navigating away from the current page. 
        */}
    </div>
  )
}

export default InnerTwoPage