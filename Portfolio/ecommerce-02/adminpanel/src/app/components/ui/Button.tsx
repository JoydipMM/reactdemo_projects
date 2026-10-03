import React, { ButtonHTMLAttributes } from 'react'

// button version typs [exp: solid(primary), outline]
type ButtonVarient = "primary" | "outline"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode,
    variant?: ButtonVarient,
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
    fullWidth?: boolean,
    paddingX?: string,
    paddingY?: string,
    minWidth?: string,
}

const variants : Record<ButtonVarient, string> = {
    primary: "bg-primary text-white",
    outline: "border border-primary text-primary"
} 

export default function Button({ children, variant = "primary", leftIcon, rightIcon, fullWidth=false, value, className="", paddingX="px-4", paddingY="py-2", minWidth="min-w-[100px]", ...props}: ButtonProps) {
  return (
    <button 
    className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg font-medium transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${ fullWidth ? "w-full" : "w-fit" } ${ variants[variant] } ${ className ? className : "" } ${ paddingX } ${ paddingY } ${minWidth}`}
    {...props}
    >
      {leftIcon && <span className='flex items-center gap-2'>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className='flex items-center gap-2'>{rightIcon}</span>}
    </button>
  )
}
