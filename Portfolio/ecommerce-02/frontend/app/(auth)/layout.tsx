import React from 'react'

export default function AuthLayout({children}: { children : React.ReactNode}) {
  return (
    <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[70vh] items-center justify-center py-16">
            {children}
        </div>
    </section>
  )
}
