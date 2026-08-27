import type { Metadata } from "next";
import { CategoryCard } from "@/components/home/CategoryCard";
import { CollectionBanner } from "@/components/home/CollectionBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { Newsletter } from "@/components/home/Newsletter";
import { PromoBanner } from "@/components/home/PromoBanner";
import { SectionHeader } from "@/components/home/SectionHeader";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Container } from "@/components/ui/Container";
import { categories, editorialImages, featuredProducts, trendingProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "NOVA — Modern Essentials",
  description: "Discover modern clothing and everyday essentials designed for contemporary living.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container className="py-20">
        <SectionHeader title="Featured categories" eyebrow="Shop by edit" />
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.name} />
          ))}
        </div>
      </Container>
      <Container className="py-10">
        <SectionHeader title="New arrivals" eyebrow="Fresh pieces for the new season." href="/products" />
        <ProductGrid products={featuredProducts} />
      </Container>
      <div className="py-20">
        <PromoBanner image={editorialImages.weekend} />
      </div>
      <Container className="py-10">
        <SectionHeader title="Trending now" />
        <ProductGrid products={trendingProducts} />
      </Container>
      <Container className="py-20">
        <CollectionBanner image={editorialImages.essentials} />
      </Container>
      <Newsletter />
    </>
  );
}
