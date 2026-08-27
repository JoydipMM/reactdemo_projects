import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { editorialImages } from "@/data/products";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const isLogin = mode === "login";
  return (
    <div className="grid min-h-[760px] lg:grid-cols-2">
      <div className="relative hidden bg-stone-100 lg:block">
        <Image alt="NOVA account editorial" className="object-cover" fill preload sizes="50vw" src={editorialImages.auth} />
      </div>
      <div className="flex items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">{isLogin ? "Welcome back" : "Create your account"}</p>
          <h1 className="mt-3 text-4xl font-semibold uppercase tracking-wide">{isLogin ? "Sign in to NOVA" : "Join NOVA"}</h1>
          <p className="mt-3 text-neutral-600">{isLogin ? "Sign in to your NOVA account." : "Create your account for a tailored shopping experience."}</p>
          <form className="mt-8 grid gap-4">
            {!isLogin ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" />
                <Field label="Last name" />
              </div>
            ) : null}
            <Field label="Email address" type="email" />
            <Field label="Password" type="password" />
            {!isLogin ? <Field label="Confirm password" type="password" /> : null}
            <div className="flex items-center justify-between gap-4 text-sm text-neutral-600">
              <label className="flex items-center gap-2">
                <input className="size-4 accent-neutral-950" type="checkbox" />
                {isLogin ? "Remember me" : "I agree to the Terms & Privacy Policy"}
              </label>
              {isLogin ? <Link className="underline" href="/login">Forgot password?</Link> : null}
            </div>
            <Button className="mt-2 w-full" type="button">{isLogin ? "Sign in" : "Create account"}</Button>
          </form>
          <div className="my-7 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-neutral-400">
            <span className="h-px flex-1 bg-stone-200" /> Or <span className="h-px flex-1 bg-stone-200" />
          </div>
          <Button className="w-full" variant="outline" type="button">Continue with Google</Button>
          <p className="mt-7 text-center text-sm text-neutral-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link className="font-semibold text-neutral-950 underline" href={isLogin ? "/register" : "/login"}>
              {isLogin ? "Create an account" : "Sign in"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  const id = label.toLowerCase().replaceAll(" ", "-");
  return (
    <label className="grid gap-2 text-sm font-medium text-neutral-800" htmlFor={id}>
      {label}
      <input className="input" id={id} type={type} />
    </label>
  );
}
