import React from 'react'
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold">Oops!</h1>
          <p className="mt-2">
            {error.status} — {error.statusText}
          </p>
          {error.data && (
            <p className="mt-1 text-gray-500">{error.data}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-red-500">
          {error?.message || "Unknown error"}
        </p>
      </div>
    </div>
    </>
  )
}

export default Error

