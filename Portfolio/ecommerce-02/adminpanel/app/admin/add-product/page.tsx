"use client"

import { Input, Button } from "@/app/components";
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
    const [sizes, setSizes] = useState<string[]>([]);
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

    const toggleSizes = (size: string) => {
        setSizes((prev) => prev.includes(size) ? prev.filter((s)=> s !== size) : [...prev, size]);
    }

    const toggleColor = (color:string) => {
        console.log(color)
        setSelectedColor((prev) => prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color])
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
                        <div className="flex flex-col items-center justify-center relative aspect-square overflow-hidden rounded-xl border-2 border-border border-dashed transition cursor-pointer hover:border-primary hover:bg-surface" onClick={()=>inputRef.current?.click()}>
                            <LuPlus size={30} className="text-muted-foreground" />
                            <span className="mt-3 text-sm text-muted-foreground font-semibold">Upload Image</span>
                        </div>
                        )}
                </div>
            ))}
        </div>
        <input type="file" multiple accept="image/*" onChange={handleImageChange} ref={inputRef} hidden />
      </section>

    {/* product information */}
      <section className="rounded-2xl border border-border bg-background p-6">
        <h2 className="text-lg font-semibold mb-5">Product Information</h2>
         <div>
            <Input label="Product Name" placeholder="Enter product name" />
            <Input label="Product Description" placeholder="Enter product description" />
            <div className="grid gap-5 md:grid-cols-3">
                <Input label="Product Price" placeholder="price" />
                <Input label="Quantity" placeholder="quantity" />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
                <div>
                    <label className="mb-2 block text-sm font-medium">Category</label>
                    <select className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none transition focus:border-primary">
                        <option value="">Select Category</option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Children</option>

                    </select>
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium">Product Type</label>
                    <select className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none transition focus:border-primary">
                        <option value="">Select Product Type</option>
                        <option>Hoodies</option>
                        <option>T-Shirts</option>
                        <option>Pants</option>
                        <option>Jackets</option>
                    </select>
                </div>
            </div>
         </div>
    </section>

    {/* Product Sizes */}
    <section className="rounded-2xl border border-border bg-background p-6">
        <h2 className="text-lg font-semibold mb-5">Product Sizes</h2>

        <div className="flex flex-wrap gap-3">
            {availableSizes.map((size) => {
                const selected = sizes.includes(size);
                return(
                <button type="button" key={size} onClick={() => toggleSizes(size)} className={`h-11 w-16 rounded-lg border border-border font-medium transition ${selected ? 'bg-primary text-white' : 'bg-background text-foreground'}`}>
                    {size}
                </button>
            )
            })} 
        </div>
    </section>


    {/* Product colors */}
    <section className="rounded-2xl border border-border bg-background p-6">
        <h2 className="text-lg font-semibold mb-5">Product Colors</h2>
        <div className="flex flex-wrap gap-3">
            {availableColors.map((color)=>{
                const selected = selectedColor.includes(color.name);
                return(
                    <button key={color.name} type="button" className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition ${selected ? " border-primary bg-primary/20" : "border-border hover:border-primary"}`} onClick={()=> toggleColor(color.name)}>
                        <span className="h-6 w-6 rounded-full border border-border" style={{ backgroundColor: color.value }}/>
                        <span className="font-medium">{color.name}</span>
                    </button>
                )
            })}
        </div>
    </section>


    {/* Product options */}
    <section className="rounded-2xl border border-border bg-background p-6">
        <h2 className="text-lg font-semibold mb-5">Product options</h2>
        <div className="space-y-4">
            <label className="flex cursor-pointer items-center gap-3">
                <input type="checkbox" checked={bestSeller} className="w-5 h-5 accent-primary" onChange={(e) => setBestSeller(e.target.checked)} />
                <span className="font-medium">Mark as Best Seller</span>
            </label>
        </div>
    </section>


    <div>
            <Button>Save</Button>
    </div>

            test

    </>
  )
}
