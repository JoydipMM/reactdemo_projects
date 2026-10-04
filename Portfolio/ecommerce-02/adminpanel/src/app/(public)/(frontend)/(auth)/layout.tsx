import { getCurrentUser } from '@/server-actions/auth/getCurrentUser'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function AuthLayout({children}: { children : React.ReactNode}) {

  const currentUser = await getCurrentUser();
  if(currentUser){
    redirect("/account");
  }
  
  return (
    <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[70vh] items-start justify-center py-16">
            {children}
        </div>
    </section>
  )
}
