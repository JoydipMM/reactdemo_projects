import React from 'react'
import { BreadCrumbs, Button } from '@/app/components'

const breadCrumps = [
  { label: "Home", href: "/" },
  { label: "Account" },
]

export default function UserAccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="w-full flex items-center mb-3">
            <div className="flex-1">
              <BreadCrumbs items={breadCrumps}/>
            </div>
            <div className="flex">
              <Button variant="outline">Logout</Button>
            </div>
              
          </div>

          {children}
        </div>
    </section>
  )
}
