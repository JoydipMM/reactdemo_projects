import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
    </section>
  )
}
