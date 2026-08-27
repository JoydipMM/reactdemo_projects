import { Button } from "./Button";

export function EmptyState({
  title,
  message,
  action,
}: {
  title: string;
  message: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="mx-auto max-w-xl py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">NOVA</p>
      <h1 className="mt-4 text-4xl font-semibold uppercase tracking-wide text-neutral-950">{title}</h1>
      <p className="mx-auto mt-4 max-w-sm text-neutral-600">{message}</p>
      {action ? (
        <Button className="mt-8" href={action.href}>
          {action.label}
        </Button>
      ) : null}
    </div>
  );
}
