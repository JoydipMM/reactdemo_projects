import type { Metadata } from "next";
import { FilterControls, FilterSidebar, SortDropdown } from "@/components/product/Filters";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse NOVA clothing, accessories, new arrivals, and sale essentials.",
};

export default function ProductsPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <div className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-5xl font-semibold uppercase tracking-wide sm:text-7xl">Shop</h1>
          <p className="mt-3 text-neutral-600">Showing {products.length} products</p>
        </div>
        <div className="hidden lg:block">
          <SortDropdown />
        </div>
        <FilterControls />
      </div>
      <div className="mt-10 flex gap-10">
        <FilterSidebar />
        <div className="flex-1">
          <ProductGrid products={products} />
        </div>
      </div>
    </Container>
  );
}
