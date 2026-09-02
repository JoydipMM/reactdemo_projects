import { SingleCard } from "@/app/features/product";
import { SectionHeading } from "@/app/components";

export default function Home() {
  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Products"
            subtitle="Explore our latest products."
          />


        </div>
      </section>
    </div>
  );
}
