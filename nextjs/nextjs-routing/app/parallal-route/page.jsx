import React from 'react'

const ParallalRoutePage = () => {
  return (
    <div>
        <h1>Parallal Route Page</h1>
        <br/>
        parallel routes allow you to simultaneously or conditionally render one or multiple pages at the same level with in the same layout. They are useful for scenarios where you want to display different content or components based on user interactions or specific conditions without navigating away from the current page. With parallel routes, you can have multiple routes active at the same time, allowing for a more dynamic and responsive user experience.
        <br/>
        <br/>
        parallal routes are created using name slots. Slots are defined with @folder convention. 
        <br/>
        <br/>
        Slots are passed as props to the shared parent layout.
        <br/>
        <br/>
        Getting error<br/>
        1. When we performing a full page refresh, nextjs to lose the current state of slots.<br/>
        2. Navigating to a route that doesn't have a corresponding page in a slot.<br/>
        <br/>
        Solution:<br/>
        To handle the unmatch routes gracefully, nextjs introduces the default.jsx/tsx file with in each slots. This file serves as a fallback UI when,<br/>
        1. A slot doesn't have a matching route for the current URL.<br/>
        2. When the user performs a full page refresh and nextjs to lose the current state of a slot.<br/><br/>
    
    </div>
  )
}

export default ParallalRoutePage