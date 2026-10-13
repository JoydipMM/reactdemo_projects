"use client"
import React from 'react'

export default function MultiSelectItemPage() {

    const availableSizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
    const [sizes, setSizes] = React.useState<string[]>([]);
    const toggleSizes = (size: string) => {
        console.log(size);
        //setSizes((prev) => prev.includes(size) ? prev.filter((s)=> s !== size) : [...prev, size]);
        
    }

    return (
        <div>
            <h1>MultiSelectItemPage</h1>
            <div className="flex flex-wrap gap-3">
                {availableSizes.map((size) => {
                    const selected = sizes.includes(size);
                    return(
                    <button type="button" key={size} onClick={() => toggleSizes(size)} className={`h-11 w-16 rounded-lg border border-border font-medium transition cursor-pointer ${selected ? 'bg-black text-white' : 'bg-background text-foreground'}`}>
                        {size}
                    </button>
                )
                })} 
            </div>
        </div>
    )
}
