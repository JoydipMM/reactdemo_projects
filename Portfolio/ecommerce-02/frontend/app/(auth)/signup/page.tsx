"use client";
import { Button, Input } from '@/app/components'
import { FcGoogle } from "react-icons/fc";
import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signUpSchema = z.object({
    fullname: z.string().min(5, { message: "Name must be at least 5 characters" }),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }).max(20, { message: "Password must be at most 20 characters" }),
})

type SignupFormValues = z.infer<typeof signUpSchema>;

export default function SignUpPage() {

    const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm<SignupFormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            fullname: "",
            email: "",
            password: "",
        },
    });

    const onSubmitHandler = async (data: SignupFormValues) => {
        console.log(data);
    }



  return (
    <div className="w-full max-w-md">


      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">Create Account</h1>
        <p className="mt-3 text-muted-foreground">
          Join us and start shopping your favorite styles.
        </p>
      </div>

      <form className="mt-8 space-y-5 mb-5" onSubmit={handleSubmit(onSubmitHandler)}>
        <Input label="Full Name" type="text" placeholder="Full Name" {...register("fullname")} error={errors.fullname?.message} />
        <Input label="Email" type="email" placeholder="Email" {...register("email")} error={errors.email?.message} />
        <Input label="Password" type="password" placeholder="Password" {...register("password")} error={errors.password?.message} />
        <Button variant="primary" fullWidth disabled={isSubmitting}>{isSubmitting ? "Creating Account..." : "Create Account"}</Button>
      </form>
        <Button variant="outline" fullWidth leftIcon={<FcGoogle size={20} />}>Continue with Google</Button>

      <p className='mt-8 text-center text-sm text-muted-foreground'>
        Already have an account? <Link href="/signin" className='font-semibold text-primary hover:underline'>Sign In</Link>
      </p>


    </div>
  )
}
