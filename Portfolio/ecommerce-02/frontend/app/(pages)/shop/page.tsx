import { FilterOption, SectionHeading } from "@/app/components";
import { SingleCard } from "@/app/features/product";

export default function ShopPage() {
  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-5 items-center mb-10">
            <FilterOption/>
          </div>

          {/* <SectionHeading title="Featured Products" subtitle="Check out our featured products." /> */}

          
        </div>
      </section>
    </div>
  );
}
