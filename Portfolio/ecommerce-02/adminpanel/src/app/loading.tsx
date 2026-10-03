import { SingleCardShimmer, HeadingShimmer } from "./components/shimmerUI";

export default function Loading() {
  return (
    <div className=" bg-stone-50 text-slate-900" aria-busy="true" aria-live="polite">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <HeadingShimmer />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
              <SingleCardShimmer key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
