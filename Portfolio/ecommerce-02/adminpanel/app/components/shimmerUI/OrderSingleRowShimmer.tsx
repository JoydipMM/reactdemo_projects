import React from "react";

export default function OrderSingleRowShimmer() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">
      <div className="relative h-36 w-28 shrink-0 overflow-hidden rounded-lg bg-surface sm:h-40 sm:w-32">
        <div className="loading-skeleton h-36 w-full" />
      </div>

      <div className="grid flex-1 gap-6 sm:grid-cols-3 sm:items-start lg:gap-12">
        <div className="sm:col-span-3" style={{marginTop: "-20px"}}>
          <div className="flex flex-wrap items-center gap-3">
            <div className="loading-skeleton h-6 w-76 rounded-lg" />
          </div>
        </div>

        <div>
          <div className="loading-skeleton h-4 w-36 rounded-lg mb-2" />
          <div className="loading-skeleton h-4 w-26 rounded-lg" />
        </div>

        <div>
          <div className="loading-skeleton h-4 w-36 rounded-lg mb-2" />
          <div className="loading-skeleton h-4 w-26 rounded-lg" />
        </div>

        <div>
          <div className="loading-skeleton h-4 w-36 rounded-lg mb-2" />
          <div className="loading-skeleton h-4 w-26 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
