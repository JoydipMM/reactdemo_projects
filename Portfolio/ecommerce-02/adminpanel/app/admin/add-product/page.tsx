"use client"

import { useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";

const availableSizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
const availableColors = [
    { id: 1, name: "Black", value: "#000000" },
    { id: 2, name: "White", value: "#FFFFFF" },
    { id: 3, name: "Red", value: "#FF0000" },
    { id: 4, name: "Green", value: "#00FF00" },
    { id: 5, name: "Blue", value: "#0000FF" },
];

export default function AddProductPage() {
    const [images, setImages] = useState<File[]>([]);
    const [selectedSize, setSelectedSize] = useState<string[]>([]);
    const [selectedColor, setSelectedColor] = useState<string[]>([]);
    const [bestSeller, setBestSeller] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        if(!files.length) return;
        setImages((prev) => [...prev, ...files].slice(0,4));
        event.target.value = '';
    }

    const removeImage = (index:number) => {
        setImages((prev)=> prev.filter((_, idx)=> idx !== index));
    }


  return (
    <>


      <div>
        <h2 className="text-3xl font-semibold">Add Product</h2>
        <p className='mt-2 text-muted-foreground'>Add a new product to your store</p>
      </div>


      {/* images */}
      <section className="rounded-2xl border border-border bg-background p-6">
        <h2 className="text-lg font-semibold mb-5">Images</h2>

        <div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
            {Array.from({length:4}).map((_,index) => (
                <div key={index}>
                    {images[index] ? (
                        <div className="relative aspect-square overflow-hidden rounded-xl border border-border">
                            <img src={URL.createObjectURL(images[index])} alt="selectedimage" className="h-full w-full object-cover" />
                            <button type="button" className="absolute top-2 right-2 flex w-8 h-8 z-10 items-center justify-center rounded-full bg-background hover:bg-destructive hover:text-white" onClick={() => removeImage(index)}><FiX size={20} /></button>
                        </div>
                        ) : (
                        <div className="flex flex-col items-center justify-center relative aspect-square overflow-hidden rounded-xl border-2 border-border border-dashed transition cursor-pointer hover:border-primary hover:bg-surface" onClick={()=>inputRef.current.click()}>
                            <LuPlus size={30} className="text-muted-foreground" />
                            <span className="mt-3 text-sm text-muted-foreground font-semibold">Upload Image</span>
                        </div>
                        )}
                </div>
            ))}
        </div>


        <input type="file" multiple accept="image/*" onChange={handleImageChange} ref={inputRef} hidden />


        
      </section>







    </>
  )
}
