import { FilterOption, SectionHeading } from "@/app/components";
import { SingleCard } from "@/app/features/product";

export default function ShopPage() {
  return (
    <div>
        <div className="mx-auto w-full">
          
          <div className="flex flex-col sm:flex-row gap-5 items-start mb-10">
            <FilterOption/>

            <div className="flex-1">


              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-primary">Shop</h2>
                <select className="rounded-lg border border-border bg-background p-3 text-sm outline-none focus:border-primary">
                  <option value="low-high">Sort By: Price (Low to High)</option>
                  <option value="high-low">Sort By: Price (High to Low)</option>
                  <option value="newest">Sort By: Newest</option>
                  <option value="oldest">Sort By: Oldest</option>
                </select>
              </div>

              <p className="mb-6 text-sm text-gray-500">Showing 11 products</p>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
              </div>


            </div>



          </div>

          

          {/* <SectionHeading title="Featured Products" subtitle="Check out our featured products." /> */}

          
        </div>
    </div>
  );
}
