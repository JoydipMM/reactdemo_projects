import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div>
        <h2>Error page : {error.status}: </h2>
        <p>{error.statusText}</p>
      
    </div>
  )
}

export default ErrorPage


/*
ErrorResponseImpl {status: 404, statusText: 'Not Found', internal: true, data: 'Error: No route matches URL "/cart/hfghfg"', error: Error: No route matches URL "/cart/hfghfg" at getInternalRouterError (http://localhost:5173/nod…}
data: "Error: No route matches URL \"/cart/hfghfg\""
error: Error: No route matches URL "/cart/hfghfg" at getInternalRouterError (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=e40dbc53:5486:5) at createRouter (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=e40dbc53:1782:17) at createBrowserRouter (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=e40dbc53:9914:10) at http://localhost:5173/src/App.jsx?t=1764851677743:66:26
internal: true
status: 404
statusText: "Not Found"
[[Prototype]]: Object
*/
