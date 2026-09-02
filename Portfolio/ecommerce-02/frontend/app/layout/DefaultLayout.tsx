import React from 'react'
import { ViewTransition } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export default function DefaultLayout({children}: {children:React.ReactNode}) {
  return (
    <>
    <Header />
    <ViewTransition default="page">
        <main className="page-transition-wrapper">
            {children}
        </main>
    </ViewTransition>
    <Footer />
    </>
  )
}
