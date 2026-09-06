import { OrderSingleRowShimmer } from "@/app/components/shimmerUI";

export default function Loading() {
  return (
    <>
      <div className="mt-2 text-muted-foreground">
        <div className="loading-skeleton h-5 w-76 rounded-lg" />
      </div>

      <div className="mt-10 space-y-5">
        {Array.from({length:3}).map((_,index) => <OrderSingleRowShimmer key={index} />)}
      </div>
    
    </>
  );
}
