"use client";
import { Button, Input } from '@/app/components'
import { FcGoogle } from "react-icons/fc";
import React from 'react'
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="w-full max-w-md">


      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">Create Account</h1>
        <p className="mt-3 text-muted-foreground">
          Join us and start shopping your favorite styles.
        </p>
      </div>

      <form className="mt-8 space-y-5">
        <Input label="Full Name" type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button variant="primary" fullWidth>Create Account</Button>
        <Button variant="outline" fullWidth leftIcon={<FcGoogle size={20} />}>Continue with Google</Button>
      </form>

      <p className='mt-8 text-center text-sm text-muted-foreground'>
        Already have an account? <Link href="/signin" className='font-semibold text-primary hover:underline'>Sign In</Link>
      </p>


    </div>
  )
}
