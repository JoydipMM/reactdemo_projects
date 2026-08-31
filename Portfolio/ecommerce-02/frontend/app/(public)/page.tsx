import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
            ShopNest
          </Link>

          {/* Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              Shop
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="text-gray-700 transition hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Account */}
            <button
              type="button"
              aria-label="Account"
              className="hidden text-gray-700 transition hover:text-black sm:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            {/* Cart */}
            <button
              type="button"
              aria-label="Cart"
              className="relative text-gray-700 transition hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="20" r="1" />
                <circle cx="19" cy="20" r="1" />
                <path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
              </svg>

              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white">
                2
              </span>
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              aria-label="Open menu"
              className="text-gray-700 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>


      <section className="bg-gray-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">


          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
            <p className="mt-2 text-gray-600">Explore our latest products.</p>
          </div>




          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {/* product card start */}
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
                <p className="mb-1 text-sm font-medium text-gray-500">
                  Nike
                </p>

                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Nike Air Max Sneakers
                </h3>

                <p className="mb-4 text-sm leading-6 text-gray-600">
                  Comfortable everyday sneakers with a lightweight and modern design.
                </p>

                {/* Price */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-900">
                    $129
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    $159
                  </span>

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
            {/* product card ended */}


          </div>


        </div>
      </section>




    </div>
  );
}
