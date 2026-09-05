"use client";
import Image from "next/image";
import { useState } from "react";

interface productDetails {
  pid: string;
}

interface ProductDetailsProps {
  productDetails: productDetails;
}

const dummyImageGallery = [
  { id: 1, src: "piim-01.webp" },
  { id: 2, src: "piim-02.webp" },
  { id: 3, src: "piim-03.webp" },
  { id: 4, src: "piim-04.webp" },
];

const sizes = [
  { id: 1, size: "S" },
  { id: 2, size: "M" },
  { id: 3, size: "L" },
  { id: 4, size: "XL" },
]

const colors = [
  { id: 1, color: "Red" },
  { id: 2, color: "Blue" },
  { id: 3, color: "Green" },
  { id: 4, color: "Yellow" },
]

export default function ProductDetails({
  productDetails,
}: ProductDetailsProps) {
  const { pid } = productDetails;
  const [productImageGallery, setProductImageGallery] = useState( dummyImageGallery[0]);
  const [productSize, setProductSize] = useState(sizes[0]);
  const [productColor, setProductColor] = useState(colors[0]);

  return (
    <div className="mx-auto w-full">
      <div className="mt-8 flex flex-col gap-8 md:flex-row">
        {/* Product Image Gallery column start */}
        <div className="flex flex-col-reverse gap-4 md:flex-row w-4/4 md:w-1/2 lg:w-2/4 lg:sticky lg:top-24 lg:h-fit">
          <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
            {dummyImageGallery.map((image) => (
              <button
                className={`shrink-0 overflow-hidden rounded-xl border-2 transition hover:border-gray-700 cursor-pointer w-20 h-25 ${image.id === productImageGallery.id ? "border-gray-700" : "border-gray-200"}`}
                key={image.id}
                onClick={() => setProductImageGallery(image)}
              >
                <Image
                  src={`/demo/products/${image.src}`}
                  alt="Product Image"
                  width={90}
                  height={100}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </button>
            ))}
          </div>
          <div className="relative w-full overflow-hidden rounded-xl border-2 border-gray-700">
            <Image
              loading="eager"
              src={`/demo/products/${productImageGallery.src}`}
              alt="Product Image"
              fill
              sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 33vw"
              className="object-cover"
            />
          </div>
        </div>
        {/* Product Image Gallery column ended */}

        {/* Product Details column start */}
        <div className="w-4/4 md:w-1/2 lg:w-2/4">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Classic Jean Jacket
          </h1>
          <p className="text-gray-400">Product ID: {pid}</p>
          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">$40.00</h2>
          <p className="mt-2 font-medium text-green-600">
            In Stock (30 available)
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">
            Classic Jean Jacket for women
          </p>

          {/* Select Size */}
          <div className="mt-8">
            <p className="mb-3 font-semibold">Select Size</p>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  className={`flex h-11 w-11 items-center justify-center rounded-lg border font-medium transition border-border hover:border-primary ${
                    size.id === productSize.id
                      ? "bg-gray-900 text-white"
                      : "cursor-pointer"
                  }`}
                  key={size.id}
                  onClick={() => setProductSize(size)}
                >
                  {size.size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 font-semibold">Select Color</p>
            <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    title={color.color}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border transition ring-2 ${ color.id === productColor.id ? "ring-gray-500 border-gray-100" : "ring-gray-100 border-gray-100 hover:border-gray-100 hover:ring-gray-500 cursor-pointer" }`}
                    onClick={() => setProductColor(color)}
                  >
                    <span
                      className="h-6 w-6 rounded-full"
                      style={{ backgroundColor: color.color }}
                    ></span>
                  </button>
                ))}
            </div>
          </div>
        </div>
        {/* Product Details column ended */}
      </div>
    </div>
  );
}
