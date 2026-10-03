import React from 'react'

export default function HeaderShimmer() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="loading-skeleton h-8 w-28 rounded-md" />

            <nav className="hidden items-center gap-8 md:flex">
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="loading-skeleton h-4 w-16 rounded-md" />
            ))}
            </nav>

            <div className="flex items-center gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="loading-skeleton h-5 w-5 rounded-full" />
            ))}
            </div>
        </div>
    </header>
  )
}
