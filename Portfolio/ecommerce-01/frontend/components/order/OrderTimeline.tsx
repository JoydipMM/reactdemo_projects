export function OrderTimeline({ status }: { status: string }) {
  const steps = ["Order Confirmed", "Processing", "Shipped", "Delivered"];
  const activeIndex = status === "Cancelled" ? 1 : steps.findIndex((step) => step === status);

  return (
    <ol className="grid gap-4 sm:grid-cols-4">
      {steps.map((step, index) => {
        const active = index <= Math.max(activeIndex, 0);
        return (
          <li className="flex items-center gap-3" key={step}>
            <span className={active ? "grid size-8 place-items-center rounded-full bg-neutral-950 text-white" : "grid size-8 place-items-center rounded-full bg-stone-100 text-neutral-400"} aria-hidden="true">✓</span>
            <span className="text-sm font-medium">{step}</span>
          </li>
        );
      })}
    </ol>
  );
}
