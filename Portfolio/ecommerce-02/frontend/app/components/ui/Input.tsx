import React, { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputVariant = 'input' | 'textarea';
interface BaseProps{
    label?: string,
    variant?: InputVariant,
    className?: string,
    error?: string,
}

// create type Script intersection between input type and react html input types
type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({ label, variant = 'input', type = 'text', className, error, ...props }, ref) => {

    const inputClasses = `w-full rounded-lg bg-background text-foreground placeholder:text-muted-foreground outline-none transition-colors mt-1
${error ? 'border border-red-500 focus:border-destructive' : 'border border-border focus:border-primary'} 
${variant === 'textarea' ? 'px-4 py-3 resize-none' : 'h-12 px-4'}
${className ? className : ''}
`;


  return (
    <div className="w-full space-y-2">
        {label && <label className="text-sm font-medium text-foreground">{label}</label> }
        {variant === 'textarea' ? (
            <textarea 
                ref={ref as React.Ref<HTMLTextAreaElement>} 
                rows={5} 
                {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)} 
                className={inputClasses} 
            />
        ) : (
            <input 
                ref={ref as React.Ref<HTMLInputElement>} 
                type={type} 
                {...(props as InputHTMLAttributes<HTMLInputElement>)} 
                className={inputClasses}
            />
        )
        }
        {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
})

Input.displayName = 'Input';

export default Input

