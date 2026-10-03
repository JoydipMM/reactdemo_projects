"use client";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
}

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    category: "Jackets",
    price: 79.99,
    stock: 18,
    image: "/demo/products/piim-01.webp",
  },
  {
    id: 2,
    name: "Premium Hoodie",
    category: "Hoodies",
    price: 59.99,
    stock: 8,
    image: "/demo/products/piim-02.webp",
  },
  {
    id: 3,
    name: "Oversized T-Shirt",
    category: "T-Shirts",
    price: 34.99,
    stock: 0,
    image: "/demo/products/piim-03.webp",
  },
  {
    id: 4,
    name: "Leather Sneakers",
    category: "Shoes",
    price: 99.99,
    stock: 25,
    image: "/demo/products/piim-04.webp",
  },
];

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>(dummyProducts);
    const handleDelete = (id: number) => {
        setProducts((prev) => prev.filter((product) => product.id !== id));
    };

  return (
    <>
    <div>
        <h2 className="text-3xl font-semibold">Products</h2>
        <p className='mt-2 text-muted-foreground'>your store</p>
      </div>


    <div className="w-full overflow-hidden rounded-2xl border border-border bg-background">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[850px] border-collapse text-left">
          <thead className="bg-muted/60">
            <tr className="border-b border-border">
              <th className="px-7 py-5 text-sm font-semibold">Product</th>
              <th className="px-6 py-5 text-sm font-semibold">Category</th>
              <th className="px-6 py-5 text-sm font-semibold">Price</th>
              <th className="px-6 py-5 text-sm font-semibold">Stock</th>
              <th className="px-6 py-5 text-sm font-semibold">Status</th>
              <th className="px-6 py-5 text-center text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              const inStock = product.stock > 0;

              return (
                <tr
                  key={product.id}
                  className="border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors"
                >
                  {/* Product */}
                  <td className="px-7 py-5">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-muted">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>

                      <span className="whitespace-nowrap text-sm font-semibold">
                        {product.name}
                      </span>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-5 text-sm">
                    {product.category}
                  </td>

                  {/* Price */}
                  <td className="px-6 py-5 text-sm font-semibold">
                    ${product.price.toFixed(2)}
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-5 text-sm">
                    {product.stock}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex whitespace-nowrap items-center rounded-full px-3 py-1.5 text-xs font-semibold ${
                        inStock
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-rose-100 text-rose-600"
                      }`}
                    >
                      {inStock ? "Active" : "Out of Stock"}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-5 text-center">
                    <button
                      type="button"
                      onClick={() => handleDelete(product.id)}
                      aria-label={`Delete ${product.name}`}
                      title="Delete product"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50 hover:text-red-700"
                    >
                      <FiTrash2 size={19} />
                    </button>
                  </td>
                </tr>
              );
            })}

            {products.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-12 text-center text-sm text-muted-foreground"
                >
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
