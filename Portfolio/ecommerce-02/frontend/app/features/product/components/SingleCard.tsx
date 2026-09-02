import React from "react";

export default function SingleCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="Nike Red Shoe"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        {/* Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
          New
        </span>
      </div>

      {/* Product Content */}
      <div className="p-5">
        <p className="mb-1 text-sm font-medium text-gray-500">Nike</p>

        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          Nike Air Max Sneakers
        </h3>

        <p className="mb-4 text-sm leading-6 text-gray-600">
          Comfortable everyday sneakers with a lightweight and modern design.
        </p>

        {/* Price */}
        <div className="mb-5 flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">$129</span>

          <span className="text-sm text-gray-400 line-through">$159</span>

          <span className="rounded-md bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
            20% OFF
          </span>
        </div>

        {/* Button */}
        <button
          type="button"
          className="w-full rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
