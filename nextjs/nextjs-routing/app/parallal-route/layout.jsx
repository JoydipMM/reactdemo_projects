import React from 'react'

const ParalallLayout = ({children, team, testimonial, about}) => {
  return (
    <div>
        <h2>Parallal Route Header</h2>
        {children}<br/>
        {team}<br/>
        {testimonial}<br/>
        {about}<br/>
        <h2>Parallal Route Footer</h2>
    </div>
  )
}

export default ParalallLayout;