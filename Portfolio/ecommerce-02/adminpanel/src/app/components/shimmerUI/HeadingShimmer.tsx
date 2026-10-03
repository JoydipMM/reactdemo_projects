import React from 'react'

export default function HeadingShimmer() {
  return (
    <div className="mb-10 space-y-3">
        <div className="loading-skeleton h-8 w-56 rounded-lg" />
        <div className="loading-skeleton h-4 w-80 rounded-md" />
    </div>
  )
}
