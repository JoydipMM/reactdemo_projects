export function Rating({ rating, count }: { rating: number; count?: number }) {
  return (
    <div className="flex items-center gap-2 text-sm text-neutral-700" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      <span aria-hidden="true" className="tracking-[0.12em]">★★★★★</span>
      <span>{rating.toFixed(1)}</span>
      {count ? <span className="text-neutral-500">({count} reviews)</span> : null}
    </div>
  );
}
