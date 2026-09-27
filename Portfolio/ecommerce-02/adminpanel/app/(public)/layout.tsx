import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'

export default function Frontendlayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}
