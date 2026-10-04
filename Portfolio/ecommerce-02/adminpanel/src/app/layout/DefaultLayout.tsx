import React from 'react'
import { ViewTransition } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export default function DefaultLayout({children}: {children:React.ReactNode}) {
  return (
    <>
    <Header />
    {/* <ViewTransition default="page"> */}
        <main className="page-transition-wrapper">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
    {/* </ViewTransition> */}
    <Footer />
    </>
  )
}
