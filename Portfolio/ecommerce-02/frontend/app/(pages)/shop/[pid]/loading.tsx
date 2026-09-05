import { SingleCardShimmer, HeadingShimmer, SingleImageShimmer } from "@/app/components/shimmerUI";

export default function Loading() {
  return (
    <div className="mx-auto w-full">
      <div className="mt-8 flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col-reverse gap-4 md:flex-row w-4/4 md:w-1/2 lg:w-2/4 lg:sticky lg:top-24 lg:h-fit">
          <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
            {Array.from({ length: 4 }).map((_, index) => (
              <SingleImageShimmer key={index} />
            ))}
          </div>
          <div className="relative w-full overflow-hidden rounded-xl border-2 border-gray-700">
            <SingleImageShimmer />
          </div>
        </div>

        <div className="w-4/4 md:w-1/2 lg:w-2/4">
          <HeadingShimmer />
        </div>
      </div>
    </div>
  );
}
