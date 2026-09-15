import React from 'react'

export default function SingleCardShimmer() {
  return (
    <div className="loading-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="loading-skeleton h-64 w-full" />

        <div className="space-y-3 p-5">
        <div className="loading-skeleton h-4 w-20 rounded-md" />
        <div className="loading-skeleton h-6 w-4/5 rounded-md" />
        <div className="loading-skeleton h-4 w-full rounded-md" />
        <div className="loading-skeleton h-4 w-5/6 rounded-md" />

        <div className="flex items-center gap-3 pt-2">
            <div className="loading-skeleton h-7 w-20 rounded-md" />
            <div className="loading-skeleton h-4 w-14 rounded-md" />
        </div>

        <div className="loading-skeleton h-11 w-full rounded-xl" />
        </div>
    </div>
  )
}
