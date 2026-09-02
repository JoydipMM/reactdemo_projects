import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'

export default function AppProvider({children}: {children:React.ReactNode}) {
  return (
    <>
    <DefaultLayout>
      {children}
    </DefaultLayout>
    </>
  )
}
