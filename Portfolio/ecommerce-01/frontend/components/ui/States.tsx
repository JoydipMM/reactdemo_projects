export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label={label}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="animate-pulse" key={index}>
          <div className="aspect-[3/4] bg-stone-100" />
          <div className="mt-4 h-4 w-3/4 bg-stone-100" />
          <div className="mt-2 h-4 w-1/2 bg-stone-100" />
        </div>
      ))}
    </div>
  );
}

export function ErrorState({ message = "Something went wrong." }: { message?: string }) {
  return <p className="border border-red-200 bg-red-50 p-4 text-sm text-red-800">{message}</p>;
}
