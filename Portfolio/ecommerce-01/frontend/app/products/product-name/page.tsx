import type { Metadata } from "next";
import { SectionHeader } from "@/components/home/SectionHeader";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductInformation } from "@/components/product/ProductInformation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { products, recommendedProducts, recentlyViewedProducts } from "@/data/products";

const product = products[0];

export const metadata: Metadata = {
  title: product.name,
  description: product.description,
};

export default function ProductDetailPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/products" }, { label: product.name }]} />
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ProductGallery product={product} />
        <ProductInformation product={product} />
      </div>
      <section className="pt-20">
        <SectionHeader title="You may also like" />
        <ProductGrid products={recommendedProducts} />
      </section>
      <section className="pt-20">
        <SectionHeader title="Recently viewed" />
        <ProductGrid products={recentlyViewedProducts} />
      </section>
    </Container>
  );
}
