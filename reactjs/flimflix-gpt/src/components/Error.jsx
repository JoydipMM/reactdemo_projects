import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
  return (
    <>
      { error.Error() }<br/>{ error.message}
    </>
  )
}

export default Error
