"use client";
import { Button, Input } from '@/app/components'
import { FcGoogle } from "react-icons/fc";
import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '@/services/signInWithGoogle';

const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }).max(20, { message: "Password must be at most 20 characters" }),
})

type SigninFormValues = z.infer<typeof signInSchema>;

export default function SignInPage() {

  const router = useRouter();

  const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm<SigninFormValues>({
      resolver: zodResolver(signInSchema),
      defaultValues: {
          email: "",
          password: "",
      },
  });

  const onSubmitHandler = async (data: SigninFormValues) => {
      console.log(data);
      const {error} = await authClient.signIn.email({
          email: data.email,
          password: data.password
        })

        if(error){
          toast.error(error.message as string);
          return
        }

        toast.success("Login Successful!!");
        router.replace("/account")
  }
  
  return (
    <div className="w-full max-w-md">


      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
        <p className="mt-3 text-muted-foreground">
          Sign in to your account to continue shopping.
        </p>
      </div>

      <form className="mt-8 space-y-5 mb-5" onSubmit={handleSubmit(onSubmitHandler)}>
        <Input label="Email" type="email" placeholder="Email" {...register("email")} error={errors.email?.message} />
        <Input label="Password" type="password" placeholder="Password" {...register("password")} error={errors.password?.message} />
        <Button variant="primary" fullWidth disabled={isSubmitting}>{isSubmitting ? "Signing in..." : "Sign In"}</Button>
      </form>
        <Button variant="outline" fullWidth leftIcon={<FcGoogle size={20} />} onClick={signInWithGoogle}>Continue with Google</Button>

      <p className='mt-8 text-center text-sm text-muted-foreground'>
        Don&apos;t have an account? <Link href="/signup" className='font-semibold text-primary hover:underline'>Create Account</Link>
      </p>


    </div>
  );
}
