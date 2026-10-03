import { Button } from '@/app/components'
import Link from 'next/link'
import React from 'react'

export default function EmptyCart() {
  return (
    <section className='mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-6 text-center'>
        <div className='flex h-24 w-24 items-center justify-center rounded-full bg-surface'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-muted-foreground" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16"></path></svg>
        </div>
        <h1 className="mt-8 text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-3 max-w-md text-muted-foreground">You haven't added any products to your cart yet. Browse our latest collection and start shopping.</p>
        <Link href="/shop" className="mt-8">
            <Button>Continue Shopping</Button>
        </Link>
    </section>
  )
}
