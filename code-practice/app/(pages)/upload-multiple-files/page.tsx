"use client"
import React, { useState } from 'react'
import { FiX } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";

export default function UploadMultipleFilePage() {

    const [productImages, setProductImages] = useState<File[]>([]);


  return (
    <div className="mx-auto w-full px-4 py-5">
        <section className="rounded-2xl border border-border bg-background p-6">
            <h2 className="text-lg font-semibold mb-5">Images</h2>

            <div className='grid grid-cols-2 gap-5 md:grid-cols-6'>
                {Array.from({length:4}).map((_,index)=>(
                    <div key={index}>
                        {productImages[index] ? 
                        (
                        <div className="relative aspect-square overflow-hidden rounded-xl border border-border">
                            <img src={URL.createObjectURL(productImages[index])} alt="selectedimage" className="h-full w-full object-cover" />
    
                            <button type="button" className="absolute top-2 right-2 flex w-8 h-8 z-10 items-center justify-center rounded-full bg-background hover:bg-destructive hover:text-white"><FiX size={20} /></button>
                        </div>
                        ) : 
                        (
                        <div className="flex flex-col items-center justify-center relative aspect-square overflow-hidden rounded-xl border-2 border-border border-dashed transition cursor-pointer hover:border-primary hover:bg-surface">
                            <LuPlus size={30} className="text-muted-foreground" />
                            <span className="mt-3 text-sm text-muted-foreground font-semibold">Upload Image</span>
                        </div>
                        )
                    }
                    </div>
                ))}

                {/* <div className="relative aspect-square overflow-hidden rounded-xl border border-border">
                    <img src={``} alt="selectedimage" className="h-full w-full object-cover" />
                    <button type="button" className="absolute top-2 right-2 flex w-8 h-8 z-10 items-center justify-center rounded-full bg-background hover:bg-destructive hover:text-white"><FiX size={20} /></button>
                </div> */}


                {/* <div className="flex flex-col items-center justify-center relative aspect-square overflow-hidden rounded-xl border-2 border-border border-dashed transition cursor-pointer hover:border-primary hover:bg-surface">
                    <LuPlus size={30} className="text-muted-foreground" />
                    <span className="mt-3 text-sm text-muted-foreground font-semibold">Upload Image</span>
                </div> */}



            </div>
        </section>
    </div>
  )
}
