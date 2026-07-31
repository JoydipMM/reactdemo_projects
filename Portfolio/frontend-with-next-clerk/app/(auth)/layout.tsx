import React from 'react'


const AfterAuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <h1>After Auth Layout</h1>
      {children}
    </div>
  )
}

export default AfterAuthLayout