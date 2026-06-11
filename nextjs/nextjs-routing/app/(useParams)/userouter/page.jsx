import React from 'react'

const page = () => {
  return (
    <div>
        <h2>useRouter Hook page</h2>
        <p><b>useRouter</b> is a hook allow us to programmatically change routes inside <b>client component</b> </p>
        <br/>
        <br/>
        <h2>Method of useRouter:</h2>
        <ol>
            <li><b>router.push()</b> method navigates to a new route and adds it to the browser history stack. So if we navigate back using the browser's back button, the previous route will be restored. </li>
            <li><b>router.replace()</b> method navigates to a new route but does not add it to the browser history stack.</li>
            <li><b>router.refresh()</b> method re-fetches the server data and re-renders the current page without reloading the entire page.</li>
            <li><b>router.back()</b> method navigates to the previous route in the browser history stack.</li>
            <li><b>router.forward()</b> method navigates to the next route in the browser history stack.</li>
        </ol>

        <br/>
        <br/>
        <h2>redirect function: use in server component</h2>
        <p>redirect() method is used to redirect the user to a another route on the server</p>
        <p>it stop the execution of the current page and send the user to another route</p>
        <h3>It is commonly used for:</h3>
        <ul>
            <li>Authentication checks</li>
            <li>Protecting routes</li>
            <li>Redirect to a specific page after action</li>
        </ul>
    </div>
  )
}

export default page